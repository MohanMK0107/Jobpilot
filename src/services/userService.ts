import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

type signupData = {
  userName: string;
  email: string;
  password: string;
};
type loginData = {
  email: string;
  password: string;
};
export const createUser = async (data: signupData) => {
  console.log("service");
  try {
    if (!data) {
      throw new Error("Data not received");
    }
    const exist = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (exist) throw new Error("USER_EXISTS");

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        userName: data.userName,
        email: data.email,
        password: hashedPassword,
      },
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

