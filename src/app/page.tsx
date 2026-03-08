"use client"
import React  from "react";
import useAppContext from "../hooks/UseAppContext";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import AddApplication from "../components/AddAplication";


export default function Home() {
  
  return (
    <div className="bg-gray-100 w-full h-screen flex  ">
      <div className="w-auto h-full">
        <Sidebar/>
      </div>
      <Dashboard/>
      
    </div>
  );
}
