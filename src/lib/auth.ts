import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

export const authOptions: NextAuthOptions = {
  // No adapter — using JWT sessions only with manual DB lookups
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
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const now = new Date().toISOString();
          const newId = randomUUID();

          // Upsert user: insert if email doesn't exist, skip if it does
          // This eliminates the find-then-insert pattern (2 round trips → 1)
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

          // Fetch the user (existing or newly created)
          const { data: dbUsers, error: fetchError } = await supabase
            .from("User")
            .select("id, email, name, role, belt, subscriptionTier")
            .eq("email", user.email!)
            .limit(1);

          if (fetchError) {
            console.error("Error fetching user after upsert:", fetchError);
            // Don't block sign-in over a DB read error — JWT will have limited data
            return true;
          }

          const dbUser = dbUsers?.[0];

          // Upsert OAuth account link (fire and forget — don't block sign-in on failure)
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

          // Set the user data for JWT
          if (dbUser) {
            user.id = dbUser.id;
            (user as { role?: string }).role = dbUser.role || "STUDENT";
            (user as { belt?: string }).belt = dbUser.belt || "WHITE";
            (user as { subscriptionTier?: string }).subscriptionTier =
              dbUser.subscriptionTier || "FREE";
          }

          return true;
        } catch (error) {
          // Log but never block sign-in — a DB blip shouldn't lock users out
          console.error("Google sign-in error (non-fatal):", error);
          return true;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role ?? "STUDENT";
        token.belt = (user as { belt?: string }).belt ?? "WHITE";
        token.subscriptionTier =
          (user as { subscriptionTier?: string }).subscriptionTier ?? "FREE";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.id as string;
        (session.user as { role?: string }).role = token.role as string;
        (session.user as { belt?: string }).belt = token.belt as string;
        (session.user as { subscriptionTier?: string }).subscriptionTier =
          token.subscriptionTier as string;
      }
      return session;
    },
  },
};
