'use client'
import React, { useEffect, useState } from 'react'
import { usePathname , useRouter } from 'next/navigation'
const Authlayout = ({children}:{children:React.ReactNode}) => {

  
  return (
    <div className='w-screen h-screen bg-gray-200 flex items-center justify-center'>
      <div className='bg-white w-[30vw] min-h-[60vh] py-5 rounded-[20px] shadow-md transition-all duration-300 ease-in'>
        {children}
      </div>
    </div>
  )
}

export default Authlayout