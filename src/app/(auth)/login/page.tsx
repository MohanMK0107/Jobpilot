"use client"
import AuthForm from '@/src/components/AuthForm'
import React from 'react'

const page = () => {

  return (
    <div className='w-full h-full relative'>
        <AuthForm authstate='Sign In'/>
    </div>
  )
}

export default page;