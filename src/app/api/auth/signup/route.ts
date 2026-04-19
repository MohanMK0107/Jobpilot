  import { createUser } from "@/src/services/userService"

  export async function POST(req: Request) {
    try {
      const body = await req.json()

      if (!body) {
        console.log("error happened")
      }
      const res = await createUser(body);
      if(!res) return 'Failed to create new user check credentials';


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