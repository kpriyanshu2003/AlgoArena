import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../db";
import { comparePassword } from "@/lib/bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "test@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          if (!credentials?.email && !credentials?.password)
            throw new Error("Email and Password is required");
          if (!credentials?.email) throw new Error("Email is required");
          if (!credentials?.password) throw new Error("Password is required");
        }

        let exisitngUser;
        try {
          exisitngUser = await db.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });
        } catch (error) {
          throw new Error("Something went wrong. Please try again.");
        }

        if (!exisitngUser) {
          throw new Error("User not found. Please sign up.");
        }

        // TODO: Hash the password and compare it to the hashed password in the database
        // const isPasswordValid = await comparePassword(credentials.password, exisitngUser.password);
        const isPasswordValid = exisitngUser.password === credentials.password;

        if (!isPasswordValid) {
          throw new Error("Wrong credentials. Please try again.");
        }

        if (!exisitngUser.emailVerified) {
          throw new Error("Please verify your email.");
        }

        return {
          id: exisitngUser.id,
          name: exisitngUser.name,
          email: exisitngUser.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          name: user.name,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          id: token.id,
        },
      };
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};
