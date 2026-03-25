"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {  CiMenuKebab  ,IoIosArrowBack ,IoIosArrowForward ,GoSearch ,IoEyeSharp , MdDeleteOutline ,FaRegEdit} from "../../../icons";
import SortFilterBar from "../../../components/Filter_Sort";
import useAppContext from "../../../hooks/UseAppContext";
import { Filter, SortDataFuntion  } from "../../../lib/FilterSortLogic";
import { applicationsData } from "@/data";

const page = () => {

  const tableHeaders = [
    "Company",
    "Role",
    "Source",
    "Applied Date",
    "Status",
    ""
  ];

  const {filters , sort} = useAppContext()

  const [initialIndex,setInitialIndex]=useState<number>(1);  
  const [indexofmenu,setIndexOfMenu]=useState<number|null>(null);
  const [searchItem,setSearchItem] = useState<string>('');
  const [debouncedSearch,setDebouncedSearch] = useState<string>('');
  const menuRef = useRef<HTMLDivElement | null>(null)
  // const finalData = SortDataFuntion(Filter(applicationsData,filters),sort);
  

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebouncedSearch(searchItem);
    },300);
    return ()=> clearTimeout(timer);
  },[searchItem])

  const SearchApplication = (data:any,searchItem:string)=>{
    if(!searchItem) return data;
    return data.filter((d:any)=> {
      return d.company.toLowerCase().includes(searchItem.toLowerCase()); 
    })
  }

  const handleMenuOpen = (id:number)=>{
    setIndexOfMenu(indexofmenu === id ?null:id)
  }
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIndexOfMenu(null);
      }
    };
  
    document.addEventListener("mousedown", handleOutsideClick);
  
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const finalData = SearchApplication(SortDataFuntion(Filter(applicationsData,filters),sort),debouncedSearch);
  const totalPages = Math.ceil(finalData.length / 10);
  const renderApplications = finalData.slice(initialIndex*10-10,initialIndex*10)
 
  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-white rounded-lg shadow-md flex flex-col">
        {/* Table Headers */}
        <div className="border-b border-gray-200 py-3 flex items-center  justify-between px-4">
          <div className="flex items-center text text-gray-600 gap-2 w-full pr-20">
            <SortFilterBar/>
          </div>
          {/*search bar*/}
          <div className="flex items-center border w-[20vw] border-gray-300 rounded-lg px-2 py-1 text-gray-700">
            <GoSearch className="size-6"/>
            <input value={searchItem} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearchItem(e.target.value)} type="text" className=" outline-none text-sm f-poppins py-1 px-2" placeholder="Search..." />
          </div>

        </div>
        {/*table content*/ }
        <div className=" w-full flex flex-col justify-between h-full">
          <table className="w-full">
              <tr className="border-b border-gray-300 w-full bg-gray-100">
                {tableHeaders.map((header, index) => (
                  <th key={index} className="py-2 px-4 text-left font-semibold text-gray-700 f-poppins  ">
                    {header}
                  </th>
                ))}
              </tr>

            {renderApplications.map((data:any, index:number) => (   
              <tr  key={index} className="relative border-b border-gray-200 hover:bg-gray-50 cursor-pointer ">
                <td className="py-4 px-4 font-semibold text-gray-600 f-poppins">{data.company}</td>
                <td className="py-4 px-4 font-semibold text-gray-600 f-poppins">{data.role}</td>
                <td className="py-4 px-4 font-semibold text-gray-600 f-poppins">{data.source}</td>
                <td className="py-4 px-4 font-semibold text-gray-600 f-poppins">{data.appliedDate}</td>
                <td className={`py-4 px-4 font-semibold f-poppins  ${data.status === "Selected" ? "text-green-500" : data.status === "Rejected" ? "text-red-500" : data.status === "Pending" ? "text-yellow-500":"text-blue-500"} flex items-center gap-2`}><div className={`size-2 rounded-full ${data.status === "Selected" ? "bg-green-500" : data.status === "Rejected" ? "bg-red-500" : data.status === "Pending" ? "bg-yellow-500":"bg-blue-500"} `} />{data.status}</td>
                <td>
                  <button onClick={()=>handleMenuOpen(index)} className=" h-full flex items-center text-2xl cursor-pointer"><CiMenuKebab/></button>
                </td>
                {indexofmenu===index &&
                 <div ref={menuRef} className="absolute z-20 bg-white border-gray-100 shadow-lg rounded-xl flex-col w-[8vw] items-center -top-5 right-14">
                  <span className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 f-inter text-gray-600 "><IoEyeSharp size={20}/>View</span>
                  <span className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 f-inter text-gray-600 "><FaRegEdit size={20}/>Edit</span>
                  <span className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 f-inter text-gray-600 "><MdDeleteOutline size={20}/>Delete</span>
                </div>}
              </tr>
            ))}
          </table>
          <div className="w-full flex items-center justify-center gap-4 py-3 px-4 bg-gray-100">
            <button onClick={()=>setInitialIndex(prev=>prev>1?prev-1:prev)} className="text-xl text-gray-600 cursor-pointer hover:bg-gray-200 p-1 rounded-full"><IoIosArrowBack/></button>
            <p className="font-inter font-semibold text-gray-500 flex items-center gap-1 "><span>{initialIndex}</span>/<span>{totalPages}</span></p>
            <button onClick={()=>setInitialIndex(prev=>prev<totalPages?prev+1:prev)} className="text-xl text-gray-600 cursor-pointer hover:bg-gray-200 p-1 rounded-full"><IoIosArrowForward/></button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default page;
