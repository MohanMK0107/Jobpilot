"use client"
import React from 'react'
import { HiMiniXMark } from "../icons";
import useAppContext from '../hooks/UseAppContext';
const CreateNote = () => {
  const {toggleCreateNote} = useAppContext();
  const currDate:Date = new Date();
  const formatted = currDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',  
  });
  return (
    <div className='relative w-full h-full flex flex-col items-center '>
      <h1 className='f-inter text-xl font-semibold text-gray-700'>Create a Note</h1>
      <button onClick={()=>toggleCreateNote()} className='absolute top- right-2'>
        <HiMiniXMark className='size-7 text-gray-500'/>
      </button>
      <div className='flex flex-col w-full  px-3 h-full '>
        <input className='w-full h-12 outline-none focus-within:outline-none text-xl font-semibold f-poppins ' type="text" placeholder='Title ' />
        <div className='flex items-center justify-start w-full bg'>
          <span className='font-semibold text-gray-600 f-monte text-sm pl-1'>{formatted}</span>
        </div>
        <div className='h-full pb-4'>
          <textarea placeholder='enter text here...' className='w-full h-full outline-none focus-within:outline-none text-lg f-poppins mt-2 px-4 py-2 border border-gray-300 rounded-md'></textarea>
        </div>
        <div className='flex items-center justify-end gap-6 pr-3 mt-2'>
          <button className='text-inter px-2 py-1 font-semibold bg-red-400  hover:bg-red-500 text-white rounded-md text-lg cursor-pointer'>Cancel</button>
          <button className='text-inter px-2 py-1 font-semibold bg-blue-400 hover:bg-blue-500 text-white rounded-md text-lg cursor-pointer'>Save</button>
        </div>

      </div>

    </div>
  )
}

export default CreateNote