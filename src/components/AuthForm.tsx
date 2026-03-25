"use client"
import React, {  ChangeEvent, FormEvent, useEffect, useState } from "react";
import {FcGoogle , FaGithub , FaRegUser , FaEye ,FaEyeSlash ,FiMail,GoLock} from "../icons"
import useAppContext from "../hooks/UseAppContext";
import {signIn} from 'next-auth/react'
interface AuthFormProps {
  authstate: "Sign In" | "Sign Up";
}

const AuthForm: React.FC<AuthFormProps> = ({ authstate }) => {
  const [showPass,setShowpass] = useState<boolean>(false);

  const [userName,setUserName] = useState<string>('')
  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')

  const { router , pathName} = useAppContext();

  const handleSubmit = async (e:FormEvent)=>{
    e.preventDefault();
    if(pathName === '/signup'){
      try {
        const res = await fetch('/api/auth/signup',{
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            userName,
            email,
            password
          })
        });
        const data = await res.json();
        console.log(data)
      } catch (error) {
        // console.log(error);
        throw error;
      }
    } 
  }

  const handleStateChange = (state:string)=>{
    if(state === 'Sign In'){
      router.push('/signup')
    }else{
      router.push('/login')
    }
  }

  useEffect(()=>{
    // console.log(authForm)
  },[])
  
  return (
    <div className="w-full h-full flex flex-col items-center py-5 gap-2">
      <h1 className="f-inter text-2xl font-semibold ">{authstate}</h1>
      <div className="flex items-center gap-8 mt-2  w-full justify-center">
        <button className="flex items-center border-3 px-4 py-2 gap-2 border-gray-400 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105">
          <FcGoogle className="lg:size-5 xl:size-7" />
          <span className="lg:textlg xl:text-xl f-poppins font-semibold">Google</span>
        </button>
        <button onClick={()=>signIn('github')} className="flex items-center border-3 px-4 py-2 gap-2 border-gray-400 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105">
          <FaGithub className="lg:size-5 xl:size-7" />
          <span className="lg:text-lg` xl:text-xl f-poppins font-semibold">Github</span>
        </button>
      </div>
      <div className="flex items-center gap-2 xl:gap-4 w-full lg:px-12 lg:mt-2 xl:mt-5">
        <span className="w-full h-[1px] bg-gray-300" />
        <span className="f-inter xl:text-lg text-gray-400">or</span>
        <span className="w-full h-[1px] bg-gray-300" />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full lg:px-8 xl:px-12 lg:mt-2 xl:mt-10">
        {authstate === "Sign Up" && 
        <div className="flex w-full items-center p-2 border-3 border-black/50 rounded-xl gap-1 text-gray-700 ">
          <FaRegUser className="lg:size-5 xl:size-6 " />
          <input name="username" value={userName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserName(e.target.value)} type="text" className="outline-none w-full xl:py-1 px-2 f-poppins" placeholder="Username" required/>
        </div>
        }
        <div className="flex w-full items-center p-2 border-3 border-black/50 rounded-xl gap-1 text-gray-700 ">
          <FiMail className="lg:size-5 xl:size-6 " />
          <input name="email" value={email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} type="email" className="outline-none w-full xl:py-1 px-2 f-poppins" placeholder="Email" required/>
        </div>
        <div className="flex w-full items-center p-2 border-3 border-black/50 rounded-xl gap-1 text-gray-700 ">
          <GoLock className="lg:size-5 xl:size-6 " />
          <input name="password" value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} type={showPass ? 'text' :'password'} className="outline-none w-full xl:py-1 px-2 f-poppins" placeholder="Password" required/>
          <button onClick={()=>setShowpass(prev=>!prev)} className="cursor-pointer">
          {showPass ?
          <FaEye  className="lg:size-4 xl:size-5"/>
           :
           <FaEyeSlash className="lg:size-4 xl:size-5"/>
           }
          </button>
          
        </div>
        <button type="submit" className="bg-blue-400 text-xl f-poppins py-2 text-white font-semibold cursor-pointer hover:bg-blue-500 rounded-xl">{authstate}</button>
      </form>
      <div className="flex items-center text-gray-500 f-inter gap-1 mt-2 font-semibold">
        <p>{authstate === 'Sign In' ? 'Don\t have an account?' : 'Already have an account?'}</p>
        <p onClick={()=>handleStateChange(authstate)} className="hover:underline cursor-pointer hover:text-blue-500 ">{authstate === 'Sign In' ?'Sign Up':'Sign In'}</p>
      </div>
    </div>
  );
};

export default AuthForm;
