import CredentialsProvider  from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
export const credentialsProvider = CredentialsProvider({
  name:'Credentials',
  credentials:{
    email: { label: "Email", type: "text" },
    password: { label: "Password", type: "password" },
  },

  async authorize(credentials){
    try {
      if (!credentials?.email || !credentials?.password) {
        throw new Error("Missing credentials");
      }
      const user = await prisma.user.findUnique({
        where: {
          email: credentials.email,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      const isValid = await bcrypt.compare(
        credentials.password,
        user.password!
      );
      if (!isValid) {
        throw new Error("Incorrect password");
      }    

      return {
        id: user.id.toString(),
        email: user.email,
        name: user.userName,
      };
    } catch (error) {
      throw new Error("Invalid credentials");
    }
  }
})