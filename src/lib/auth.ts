import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const { data: users } = await supabase
          .from("User")
          .select("id, email, name, hashedPassword, role, belt, subscriptionTier")
          .eq("email", credentials.email)
          .limit(1);

        const user = users?.[0];

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          belt: user.belt,
          subscriptionTier: user.subscriptionTier,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account }) {
      // For Google OAuth: create user in DB if they don't exist yet
      // We do NOT mutate user.id here — that's handled in jwt() below
      if (account?.provider === "google") {
        try {
          const now = new Date().toISOString();
          const newId = randomUUID();

          // Upsert user — insert if new, skip if email already exists
          await supabase
            .from("User")
            .upsert(
              {
                id: newId,
                email: user.email,
                name: user.name,
                image: user.image,
                emailVerified: now,
                role: "STUDENT",
                belt: "WHITE",
                subscriptionTier: "FREE",
                stripes: 0,
                verified: false,
                createdAt: now,
                updatedAt: now,
              },
              { onConflict: "email", ignoreDuplicates: true }
            );

          // Link OAuth account (non-blocking)
          const { data: dbUsers } = await supabase
            .from("User")
            .select("id")
            .eq("email", user.email!)
            .limit(1);

          const dbUser = dbUsers?.[0];
          if (dbUser && account.providerAccountId) {
            supabase
              .from("Account")
              .upsert(
                {
                  id: randomUUID(),
                  userId: dbUser.id,
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token,
                  refresh_token: account.refresh_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                },
                { onConflict: "provider,providerAccountId", ignoreDuplicates: true }
              )
              .then(({ error }) => {
                if (error) console.error("Account upsert error (non-fatal):", error);
              });
          }
        } catch (error) {
          console.error("Google sign-in DB error (non-fatal):", error);
          // Never block sign-in over a DB error
        }
      }
      return true;
    },

    async jwt({ token, user, account }) {
      // Credentials login: user object is fully populated from authorize()
      if (user && !account) {
        token.id = user.id;
        token.role = (user as { role?: string }).role ?? "STUDENT";
        token.belt = (user as { belt?: string }).belt ?? "WHITE";
        token.subscriptionTier =
          (user as { subscriptionTier?: string }).subscriptionTier ?? "FREE";
        return token;
      }

      // Google OAuth first login: account is present, look up the real DB user
      if (account?.provider === "google" && user?.email) {
        try {
          const { data: dbUsers } = await supabase
            .from("User")
            .select("id, role, belt, subscriptionTier, name, image")
            .eq("email", user.email)
            .limit(1);

          const dbUser = dbUsers?.[0];
          if (dbUser) {
            token.id = dbUser.id;
            token.role = dbUser.role || "STUDENT";
            token.belt = dbUser.belt || "WHITE";
            token.subscriptionTier = dbUser.subscriptionTier || "FREE";
            token.name = dbUser.name || user.name;
            token.picture = dbUser.image || user.image;
          } else {
            // Fallback if DB lookup fails — still let them in
            token.id = user.id;
            token.role = "STUDENT";
            token.belt = "WHITE";
            token.subscriptionTier = "FREE";
          }
        } catch (err) {
          console.error("JWT Google DB lookup error:", err);
          // Fallback
          token.id = user.id;
          token.role = "STUDENT";
          token.belt = "WHITE";
          token.subscriptionTier = "FREE";
        }
        return token;
      }

      // Subsequent requests — token already populated, just return it
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.id as string;
        (session.user as { role?: string }).role = token.role as string ?? "STUDENT";
        (session.user as { belt?: string }).belt = token.belt as string ?? "WHITE";
        (session.user as { subscriptionTier?: string }).subscriptionTier =
          token.subscriptionTier as string ?? "FREE";
      }
      return session;
    },
  },
};
