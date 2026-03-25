import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { CredentialsProvider } from "next-auth/providers/credentials";

import {PrismaAdapter} from "@next-auth/prisma-adapter"
import { prisma } from "@/src/lib/prisma";


const handler = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers:[
    // Github Provider
    GithubProvider({
      clientId:process.env.GITHUB_ID!,
      clientSecret:process.env.GITHUB_SECRET!,
    }),
    // Google Provider
    GoogleProvider({
      clientId:process.env.GOOGLE_ID!,
      clientSecret:process.env.GOOGLE_SECRET!,
    })
  ]
})