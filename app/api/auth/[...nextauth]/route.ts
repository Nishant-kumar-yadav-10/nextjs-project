import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        return {
          id: "90",
          name: "Nishant",
          email: "nishant12ts@gmail.com",
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };