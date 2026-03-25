import { createUser } from "../services/userService"

export const handleCreateuser = async(data:any)=>{
  try {
    console.log('controller')
    console.log(data)
    const res = await createUser(data);
    if(!res) return 'error in controller'
    console.log(res)

    return Response.json({
      data:data,
      success:true,
      message:'data was recieved in controller'
    })
  } catch (error) {
    console.log(error)
    return Response.json({message:'error in controller', success:false },{status:500})

  }
}