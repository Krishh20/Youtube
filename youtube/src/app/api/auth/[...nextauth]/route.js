 import NextAuth from "next-auth"
 import GoogleProvider from "next-auth/providers/google";
 const handler = NextAuth({
 providers: [
 GoogleProvider({
 clientId: process.env.GOOGLE_CLIENT_ID,
 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   params: {   // this is added, if signout it remove token from cookies and need to sign again, w/o this no need to signin again
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code"
//         }
 })
 ]
 })
 export { handler as GET, handler as POST }