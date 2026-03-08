'use client'
import React, { useState } from "react";

type checkboxType = {
  checked:boolean;
  onChange: (checked:boolean) =>void;
}

const CheckBox = ({checked,onChange}:checkboxType) => {

  const handleCheckChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    onChange(e.target.checked)
    console.log(e.target.checked)
  }


  return (
      <label>
        <input checked={checked}  onChange={handleCheckChange} type="checkbox" className="hidden peer" />

        <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center peer-checked:border-amber-300 group">
        <div className="w-3 h-3 bg-amber-300 rounded-full opacity-0 group-peer-checked:opacity-100" />
      </div>
      </label>
  );
};

export default CheckBox;
