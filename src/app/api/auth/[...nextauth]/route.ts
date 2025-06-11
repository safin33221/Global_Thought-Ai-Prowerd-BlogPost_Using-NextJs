import loginUser from "@/app/actions/auth/loginUsr";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

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

                // Add logic here to look up the user from the credentials supplied

                if (dbUser) {
                    // Map dbUser to NextAuth User type
                    return {
                        id: dbUser._id?.toString() ?? dbUser.id ?? "",
                        name: dbUser.name ?? null,
                        email: dbUser.email ?? null,
                        image: dbUser.image ?? null
                    };
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ]
}
const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }