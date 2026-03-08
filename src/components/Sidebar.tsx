"use client"
import React, { use, useEffect } from 'react'
import { useRouter, usePathname } from "next/navigation";
import {PiCirclesThreeBold ,
        TbLayoutSidebarLeftExpand , 
        TbLayoutSidebarRightExpand , 
        TbLogout2 ,
        LuLayoutDashboard ,
        IoFileTrayStackedOutline , 
        IoSettingsOutline , 
        MdOutlineAddBox , 
        FaRegCalendar , 
        CgProfile , 
        LuFile , 
        MdOutlineAnalytics , 
        HiCubeTransparent
      } from "../icons";

import useAppContext from '../hooks/UseAppContext';
import path from 'path';
const Sidebar = () => {
  const {sideBarCollapsed, toggleSidebar , addnewapplication,toggleAddNewApplication ,setLoading , router , pathName} = useAppContext();
  const SidebarData = [
    {icon:LuLayoutDashboard,name:'Dashboard',path:'/'},
    {icon:IoFileTrayStackedOutline,name:'Applications',path:'/applications'},
    {icon:FaRegCalendar,name:'Calendar',path:'/calendar'},
    {icon:HiCubeTransparent,name:'Interview Prep',path:'/interview-prep'},
    {icon:MdOutlineAnalytics,name:'Analytics',path:'/analytics'},
    {icon:LuFile,name:'Resumes',path:'/resumes'},
  ]
  

  const handlePageChange = (path:string)=>{
    if(pathName === path) return;
    setLoading(true);
    router.push(path);
  }
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
        <button onClick={()=>router.push('/addapplication')} className={`over:bg-blue-400 flex items-center w-full px-4 py-2 gap-2 bg-blue-500 text-white rounded-lg  cursor-pointer mt-4`}>
          <div >
            <MdOutlineAddBox className={`size-7 text-white cursor-pointer ${sideBarCollapsed ? 'mx-auto':''}`}/>
          </div>
          <span className={`text-lg f-inter overflow-hidden font-semibold text-nowrap ${sideBarCollapsed ? 'w-0':''} transition-all duration-300 ease-in-out`}>Add Application</span>
        </button>

        <div className='flex flex-col my-5 px-2 relative w-full '>

          {SidebarData.map((data,i)=>(
            <div onClick={()=>handlePageChange(data.path)} key={i} className={`text-gray-600 flex items-center gap-2 cursor-pointer hover:bg-gray-100 h-10 px-2 rounded-lg my-[2px] 
              ${pathName === data.path ? 'bg-gray-100':''}
            `}>
              <div>
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