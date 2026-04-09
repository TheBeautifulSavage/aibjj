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
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          // Check if user exists
          const { data: existingUsers } = await supabase
            .from("User")
            .select("id, email, name, role, belt, subscriptionTier")
            .eq("email", user.email!)
            .limit(1);

          let dbUser = existingUsers?.[0];

          if (!dbUser) {
            // Create new user
            const newId = randomUUID();
            const now = new Date().toISOString();
            const { data: newUsers, error } = await supabase
              .from("User")
              .insert({
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
              })
              .select("id, email, name, role, belt, subscriptionTier")
              .single();

            if (error) {
              console.error("Error creating user:", error);
              return false;
            }
            dbUser = newUsers;
          }

          // Upsert OAuth account link
          if (dbUser && account.providerAccountId) {
            await supabase
              .from("Account")
              .upsert({
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
              }, { onConflict: "provider,providerAccountId", ignoreDuplicates: true });
          }

          // Set the user id for JWT
          user.id = dbUser?.id || user.id;
          (user as { role?: string }).role = dbUser?.role || "STUDENT";
          (user as { belt?: string }).belt = dbUser?.belt || "WHITE";
          (user as { subscriptionTier?: string }).subscriptionTier = dbUser?.subscriptionTier || "FREE";

          return true;
        } catch (error) {
          console.error("Google sign-in error:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role ?? "STUDENT";
        token.belt = (user as { belt?: string }).belt ?? "WHITE";
        token.subscriptionTier = (user as { subscriptionTier?: string }).subscriptionTier ?? "FREE";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.id as string;
        (session.user as { role?: string }).role = token.role as string;
        (session.user as { belt?: string }).belt = token.belt as string;
        (session.user as { subscriptionTier?: string }).subscriptionTier = token.subscriptionTier as string;
      }
      return session;
    },
  },
};
