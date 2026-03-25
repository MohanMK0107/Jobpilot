import { handleCreateuser } from "@/src/controllers/userController"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body) {
      console.log("error happened")
    }
    console.log(body)
    const res = await handleCreateuser(body)
    if(!res) return 'Failed to create new user check credentials'

    console.log(res)
    return Response.json({
      data: body,
      success:true,
    })

  } catch (error) {
    console.log(error)

    return Response.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}