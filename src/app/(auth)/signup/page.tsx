"use client"
import React, { useEffect } from 'react'
import AuthForm from '@/src/components/AuthForm'

const page = () => {

  return (
    <div className=' h-full w-full'>
      <AuthForm authstate='Sign Up'/>
    </div>
  )
}

export default page;