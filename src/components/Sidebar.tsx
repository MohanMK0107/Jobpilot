"use client"
import React, { useEffect } from 'react'
import { PiCirclesThreeBold } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoFileTrayStackedOutline , IoSettingsOutline } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { TbLayoutSidebarLeftExpand , TbLayoutSidebarRightExpand , TbLogout2 } from "react-icons/tb";
import useAppContext from '../hooks/UseAppContext';
const Sidebar = () => {
  const {sideBarCollapsed, toggleSidebar , sideBarLink,setSideBarLink , addnewapplication,toggleAddNewApplication} = useAppContext();
  const SidebarData = [
    {icon:LuLayoutDashboard,name:'Dashboard'},
    {icon:IoFileTrayStackedOutline,name:'Applications'},
    {icon:FaRegCalendar,name:'Calendar'},
    {icon:FiBookmark,name:'Saved'},
  ]

  useEffect(()=>{
    console.log(sideBarLink)
  },[sideBarLink])
  
  return (
    <div className={`bg-white h-full ${sideBarCollapsed ? 'w-20':'w-60'} transition-all duration-300 ease-in-out flex flex-col items-center`}>
      <div className='w-full h-full px-2 py-4'>
        {/*Logo*/}
        <div className={`flex items-center px-1 gap-2 w-full ${sideBarCollapsed ? 'justify-center':'justify-between'}  text-gray-600`}>
          <div className='flex items-center gap-2 '>
            <div className='group'>
              <PiCirclesThreeBold className="size-6"/>
            </div>
            <span className={`overflow-hidden f-monte text-xl font-semibold ${sideBarCollapsed ? 'w-0':''}`} >JobTrackr</span>         
          </div>
          <button onClick={()=>toggleSidebar()} className={`${sideBarCollapsed  ? 'hidden':'block'} text-gray-600 hover:text-gray-500`}>
            <TbLayoutSidebarRightExpand className='size-7 '/>
          </button>
        </div>
        <div className='w-full bg-gray-200 h-[1.5px] rounded-full my-2'/>
        {/*Add Application Button*/}
        <button onClick={()=>toggleAddNewApplication()} className={`over:bg-blue-400 flex items-center w-full px-4 py-2 gap-2 bg-blue-500 text-white rounded-lg  cursor-pointer mt-4`}>
          <div >
            <MdOutlineAddBox className={`size-7 text-white cursor-pointer ${sideBarCollapsed ? 'mx-auto':''}`}/>
          </div>
          <span className={`text-lg f-inter overflow-hidden font-semibold text-nowrap ${sideBarCollapsed ? 'w-0':''} transition-all duration-300 ease-in-out`}>Add Application</span>
        </button>

        <div className='flex flex-col my-5 px-2 relative w-full '>

          {SidebarData.map((data,i)=>(
            <div onClick={()=>setSideBarLink(data.name)} key={i} className=' text-gray-600 flex items-center gap-2 cursor-pointer hover:bg-gray-100 h-10 px-2 rounded-lg my-[2px]'>
              <div className=''>
                <data.icon className='size-6'/>
              </div>
              <span className={`f-inter overflow-hidden text-lg ${sideBarCollapsed ? 'w-0':'w-full'} transition-all duration-300 ease-in-out`}>{data.name}</span>
            </div>
          ))}

        </div>

        <button onClick={()=>toggleSidebar()} className={`${!sideBarCollapsed  ? 'hidden':'block'} flex justify-center w-full text-gray-600 hover:text-gray-500`}>
            <TbLayoutSidebarLeftExpand className='size-7 '/>
        </button>
        
      </div>
      <div className='w-full px-3 my-3'>
        <div  className=' text-gray-600 flex items-center gap-2 cursor-pointer hover:bg-gray-100 h-10 px-2 rounded-lg my-[2px]'>
          <div className=''>
            <IoSettingsOutline className='size-6'/>
          </div>
          <span className={`f-inter overflow-hidden text-lg ${sideBarCollapsed ? 'w-0':'w-full'} transition-all duration-300 ease-in-out`}>Settings</span>
        </div>
        <div className='w-full bg-gray-200 h-[1.5px] rounded-full my-2 '/>
        <div className='flex items-center gap-2'>
          <div className={`flex w-full ${sideBarCollapsed ? 'justify-center':'justify-start'}`}>
            <CgProfile className='size-8'/>
          </div>  
          <span className={`f-inter overflow-hidden font-semibold text-lg ${sideBarCollapsed ? 'w-0':'w-full'} transition-all duration-300 ease-in-out`}>UserName</span>

        </div>
      </div>

    </div>
  )
}

export default Sidebar