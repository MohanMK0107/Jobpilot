"use client"
import React, { useState, useEffect } from 'react'
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
        MdOutlineAnalytics , 
        HiCubeTransparent,
        LuUser
      } from "../icons";

import useAppContext from '../hooks/UseAppContext';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
  const {sideBarCollapsed, toggleSidebar , addnewapplication,toggleAddNewApplication ,setLoading , router , pathName} = useAppContext();
  const [menu,setMenu] = useState<Boolean>(false);
  const SidebarData = [
    {icon:LuLayoutDashboard,name:'Dashboard',path:'/'},
    {icon:IoFileTrayStackedOutline,name:'Applications',path:'/applications'},
    {icon:FaRegCalendar,name:'Calendar',path:'/calendar'},
    {icon:HiCubeTransparent,name:'Interview Prep',path:'/interview-prep'},
    {icon:MdOutlineAnalytics,name:'Analytics',path:'/analytics'},
  ]
  

  const handlePageChange = (path:string)=>{
    if(pathName === path) return;
    setLoading(true);
    router.push(path);
  }
  const handleLogout = ()=>{
    signOut({
      callbackUrl:'/login'
    })
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
        <button onClick={()=>router.push('/addapplication')} className={`hover:bg-blue-400 flex items-center w-full px-4 py-2 gap-2 bg-blue-500 text-white rounded-lg  cursor-pointer mt-4`}>
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

        <div onClick={()=>setMenu(prev=>!prev)} className='relative flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg'>
          <div  className={`flex w-full ${sideBarCollapsed ? 'justify-center':'justify-start'} `}>
            <CgProfile className='size-8'/>
          </div>  
          <span className={`f-inter overflow-hidden font-semibold text-lg ${sideBarCollapsed ? 'w-0':'w-full'} transition-all duration-300 ease-in-out`}>UserName</span>

          {menu &&
            <div className={`absolute bg-white rounded-lg p-2 flex flex-col shadow-md -right-10 w-42 gap-1 -top-32 border border-gray-200 ${sideBarCollapsed ? '-right-30':''} z-30`}>
              <div onClick={()=>router.push('/profile')} className='flex items-center gap-4 hover:bg-gray-100 cursor-pointer px-2 py-1 rounded-lg w-full'>
                <LuUser className='size-8 text-gray-600 cursor-pointer ml-1 '/>
                <span className='text-lg f-monte text-gray-600 font-semibold'>Profile</span>
              </div>
              <div onClick={handleLogout} className='flex items-center gap-4 hover:bg-gray-100 cursor-pointer px-2 py-1 rounded-lg w-full'>
                <TbLogout2 className='size-8 text-gray-600 cursor-pointer'/>
                <span className='text-lg f-monte text-gray-600 font-semibold'>Logout</span>
              </div>
            </div>
            }

        </div>
      </div>

    </div>
  )
}

export default Sidebar