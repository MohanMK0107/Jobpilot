"use client";
import React from "react";
import { TbArrowsSort } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import Select from "./Select";

const SortFilterBar = () => {

  const sourceOptions = ['Default','LinkedIn','Indeed','Glassdoor','Company Website','Referral','Naukri','Internshala','Hirist','foundit','Cutshort','Other'];
  const daysOptions = ['Default','Last 24 hours','Last 3 days','Last 7 days','Last 30 days',]; 
  const statusOptions = ['Default','Applied','Pending','Selected','Rejected'];
  const sortOptions = [
    "Applied (Newest)",
    "Applied (Oldest)",
    "Company (A–Z)",
    "Company (Z–A)",
    "Default"
  ];
  
  
  return (
    <div className="flex flex-wrap items-center justify-between w-full ">
      {/* Filter */}
      <div className="flex items-center gap-5">
        <span className="text-gray-600 flex items-center f-monte font-semibold gap-1"><VscSettings size={24}/>filter</span>
        {/*source filter*/}
        <Select filterKey="source" selectName="Source" selectOptions={sourceOptions} selectType="Filter"/>
        {/*Date filter*/}
        <Select filterKey="appliedDays" selectName="Days" selectOptions={daysOptions} selectType="Filter"/>
        {/*status filter*/}
        <Select filterKey="status" selectName="Status" selectOptions={statusOptions} selectType="Filter"/>
      </div>

      {/*sort*/}
      <div className=" flex items-center gap-2">
        <span className="text-gray-600 flex items-center f-monte font-semibold gap-1"><TbArrowsSort size={24}/></span>
        <Select filterKey="sort" selectName="Sort By" selectOptions={sortOptions} selectType="Sort"/>
      </div>
      
      </div>
  );
};

export default SortFilterBar;
