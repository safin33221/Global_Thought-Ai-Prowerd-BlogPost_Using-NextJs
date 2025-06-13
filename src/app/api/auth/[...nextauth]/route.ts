import loginUser from "@/app/actions/auth/loginUsr";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import toast from "react-hot-toast";

export const authOptions = {
    // Configure one or more authentication providers
    session: {
        strategy: 'jwt' as const,
        maxAge: 2 * 24 * 60 * 60, // 2 days
        updateAge: 24 * 60 * 60,  // refresh once per day
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "email", type: "text", placeholder: "your_email@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined, req: unknown) {
                if (!credentials) {
                    return null;
                }
                const dbUser = await loginUser(credentials);

                // If loginUser returns an error, throw it for NextAuth to handle
                if (dbUser?.error) {
                    toast.error(dbUser.error);
                }

                if (dbUser && dbUser.user) {
                    // Map dbUser.user to NextAuth User type
                    const user = dbUser.user;
                    return {
                        id: user._id?.toString() ?? user.id ?? "",
                        name: user.name ?? null,
                        email: user.email ?? null,
                        image: user.image ?? null
                    };
                }

                // If you return null then an error will be displayed advising the user to check their details.
                return null;
            }
        })
    ]
}
const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }