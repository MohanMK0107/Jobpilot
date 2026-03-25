'use client'
import Image from 'next/image'
import React from 'react'
import { CgProfile, FaRegEdit } from '@/src/icons'
const page = () => {
  return (
    <div className='grid grid-cols-[30%_70%] h-full '>
      <div className='w-full flex flex-col items-center pt-20'>
        <div className='w-70 h-70 border-4 border-gray-200 rounded-full'>
          <img src='/profile.jpg' alt='profile-image' className='h-full w-full rounded-full'/>
        </div>
       <h2 className='text-[1.7rem] f-monte font-semibold text-gray-600 '>Anonymous GTR</h2>
       <p className='f-monte text-gray-500'>anonymousgtr35@abcd.com</p>
       <button>
        <FaRegEdit/>
       </button>
      </div>
      <div className=''>

      </div>
    </div>
  )
}

export default page
