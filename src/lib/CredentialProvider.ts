import CredentialsProvider  from "next-auth/providers/credentials";
import { prisma } from "./prisma";

import bcrypt from "bcrypt";


export const credentialsProvider = CredentialsProvider({
  name:'Credentials',
  credentials:{
    
  }
})