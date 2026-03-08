"use client";
import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "../icons";
import useAppContext from "../hooks/UseAppContext";

type FilterKey = "source" | "appliedDays" | "status" | "sort";
type selectType = 'Filter' | 'Sort';
interface SelectProps {
  selectName: string;
  selectOptions: string[];
  filterKey:FilterKey;
  selectType:selectType;
}

const Select: React.FC<SelectProps> = ({
  selectName,
  selectOptions,
  filterKey,
  selectType:selectType
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const {setFilters, setSort} = useAppContext();

 

  const handleSelect = (e:React.MouseEvent<HTMLDivElement>,option:string ):void=>{
    e.stopPropagation();
    setSelectedOption(option);
    if(selectType === 'Filter'){
      setFilters((prev)=>({
        ...prev,
        [filterKey]:
      option === "Default" ? ''
      : option,
    })
    )
    setOpen(false);

  } else if(selectType === 'Sort'){
    setSort(option === "Default" ? '' : option);
    setOpen(false);
  }
}

  return (
    <div onClick={()=>console.log("selected Option:",selectType)}  ref={ref} className="relative inline-block">
      
      {/* Trigger */}
      <div
        onClick={() => setOpen((p) => !p)}
        className="border border-gray-300 rounded-lg px-3 py-2
                   flex items-center gap-2 cursor-pointer
                   hover:border-gray-400 bg-white "
      >
        <span
          className={`whitespace-nowrap ${
            selectedOption ? "text-gray-700" : "text-gray-400"
          }`}
      
        >
          {selectedOption || selectName}
        </span>

        <IoIosArrowDown
          className={`size-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-0 top-12 z-40
                     w-max min-w-full
                     max-h-[250px]
                     overflow-y-auto
                     bg-white border border-gray-200
                     shadow-xl rounded-xl py-2"
        >
          {selectOptions.map((option) => (
            
            <div
              key={option}
              onClick={(e)=>handleSelect(e,option)}
              className="px-6 py-2 hover:bg-gray-100 
                         whitespace-nowrap cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
