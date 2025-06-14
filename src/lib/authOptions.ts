

import loginUser from "@/app/actions/auth/loginUsr";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your_email@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const dbUser = await loginUser(credentials);

        if (dbUser?.error) {
          throw new Error(dbUser.error);
        }

        if (dbUser && dbUser.user) {
          const user = dbUser.user;
          return {
            id: user._id?.toString() ?? user.id ?? "",
            name: user.name ?? null,
            email: user.email ?? null,
            image: user.image ?? null,
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
