"use client"
import React, { useEffect, useRef, useState } from 'react'
import {HiMiniXMark,GoSearch,MdDeleteOutline,GoPin} from "../icons"
import CheckBox from './CheckBox';
import useAppContext from '../hooks/UseAppContext';
type noteType = {
  id:number;
  title:string;
  description:string;
  date:string;
  pinned:boolean
}
const AllNotes = () => {
  let notesData:noteType[] = [
    {id:1,date:'12-02-2026',title:'Interview prep',description:'prepare for the interview of mern stack',pinned:false},
    {id:2,date:'15-02-2026',title:'Follow Up',description:'Follow up the company applied in linkedin',pinned:false},
    {id:3,date:'03-03-2026',title:'Apply for cognizant',description:'apply on superset before march 10th',pinned:false},
    {id:4,date:'12-01-2026',title:'Status check',description:'Check status of applications applied last week',pinned:false},
    {id:5,date:'28-01-2026',title:'Contact HR',description:'Contact UntieGrid HR regarding interview process',pinned:false},
    {id:6,date:'06-03-2026',title:'Update Resume',description:'Update Resume with sql and new project',pinned:false},
  ]
  const {toggleViewNote} = useAppContext();

  const [selectedNotes,setSelectedNotes] = useState<number[]>([]);

  const [search,setSeacrh] = useState<string>('')
  const handleSelectAll = (checked:boolean)=>{
    if(checked){
      setSelectedNotes(notesData.map(note=>note.id))
    }else{
      setSelectedNotes([])
    }
  }
  const handleselectNote = (id:number,checked:boolean)=>{
    if(checked){
      setSelectedNotes(prev=>[...prev,id])
    }else{
      setSelectedNotes(prev=>prev.filter(noteId=>noteId !== id))
    }
  }
  
  const allselected = selectedNotes.length === notesData.length
  function ShortenText(text:string){
    if(text.length < 35) return text; 
    return text.slice(0,35) + '...'; 
  }

  const seacrhedNotes = notesData.filter((note:noteType)=>{
    return note.title.toLowerCase().includes(search.toLowerCase())
  })
  
  
  const pinNote = ()=>{
    const res = notesData.filter(
      data=>selectedNotes.includes(data.id))
      .map(d=>({
        ...d,
        pinned: true
      }))
      ;
    console.log(res)
  }
  
  useEffect(()=>{
    console.log(selectedNotes)
    pinNote()
    console.log(notesData)
  },[selectedNotes])





  return (
    <div className='bg-gray-50 w-[25vw] h-[70vh] flex flex-col items-center py-3 shadow-md rounded-lg relative '>
      <h2 className='text-2xl f-poppins text-gray-600 font-semibold'>Notes</h2>

      <button onClick={()=>toggleViewNote()} className='absolute top-4 right-3 text-gray-600 cursor-pointer z-55 '>
        <HiMiniXMark className='size-6'/>
      </button>

      <div className='w-full flex flex-col px-8 py-4'>
        <div className='flex items-center border border-gray-300 rounded-md p-2 mb-2 text-gray-600'>
          <GoSearch className='size-5'/>
          <input value={search} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSeacrh(e.target.value)} type="text" placeholder='Search Notes' className='px-2 w-full focus:outline-none focus:ring-none f-inter ' />
        </div>
      </div>
      <div className='flex items-center w-full px-5 pb-3 justify-between'>
        {/*select all**/}
        <div className='flex items-center gap-1'>
          <CheckBox checked={allselected} onChange={checked=>handleSelectAll(checked)} />
          <span className="text-gray-600 f-inter text-sm">Select all</span>
        </div>
        { selectedNotes.length > 0 &&
        <div className='flex items-center gap-3 text-gray-600'>
          <button className="flex items-center hover:text-red-400  cursor-pointer"><MdDeleteOutline  className='size-5'/></button>
          <button  className='flex items-center hover:text-blue-400 cursor-pointer'><GoPin className='size-5 mt-'/></button>
        </div>
        }
      </div>

      <div className='w-full h-full px-5 overflow-y-auto'>
        
        {/*individual Notes*/}
        <div className='flex flex-col w-full'>
          {seacrhedNotes.map(note=>(
            <div key={note.id} className='flex items-center gap-3 bg-white px-2 py-3 mt-3 rounded-lg shadow-sm hover:scale-105 transition-transform cursor-pointer duration-200'>
              <CheckBox checked={selectedNotes.includes(note.id)} onChange={(checked)=>handleselectNote(note.id,checked)} />
              <div className='flex flex-col w-full'>
                <h3 className='text-lg f-inter font-semibold text-gray-600'>{note.title}</h3>
                <span className='text-sm f-poppins text-gray-600 truncate '>{ShortenText(note.description)}</span>
                <div className='flex w-full '>
                  <p className='text-[12px] f-poppins text-gray-400 font-semibold mt-1'>{note.date}</p>
                </div>
              </div>
          </div>
          )) }

        </div>
      </div>


    </div>
  )
}

export default AllNotes