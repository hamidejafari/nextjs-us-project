import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({

      clientId: "GOOGLE_CLIENT_ID",

      clientSecret: "GOOGLE_CLIENT_SECRET",

      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',

    })
  ],

  database: process.env.MONGODB_URI,
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
});