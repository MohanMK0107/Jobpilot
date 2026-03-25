import { prisma } from "../lib/prisma"

type User = {
  userName: string
  email: string
  password: string
}

export const createUser = async (data: User) => {
  console.log('service')
  try {

    if (!data) {
      throw new Error("Data not received")
    }
    console.log(data)
    

    const res = await prisma.user.create({
      data: {
        userName: data.userName,
        email: data.email,
        password: data.password
      }
    })

    return res

  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}