"use client"
import React  from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import AllApplications from "../components/AllApplications";
import Calender from "../components/Calender";
import SavedApplications from "../components/SavedApplications";
import useAppContext from "../hooks/UseAppContext";
import AddAplication from "../components/AddAplication";
import Loader from "../components/Loader";

export default function Home() {
  const {sideBarLink , addnewapplication , loading} = useAppContext();
  return (
    <div className="bg-gray-100 w-full h-full flex ">
      {loading && 
      <div className="fixed inset-0  z-80 flex items-center justify-center">
        <Loader/>
      </div>
      }

      {/*sidebar*/}
      <div className="h-full w-auto">
        <Sidebar/>
      </div>
      {/*main content*/}
      <div className="flex  w-full h-full">
        {sideBarLink === 'Dashboard' ? (
          <Dashboard/>
        ): sideBarLink === 'Applications' ? (
          <AllApplications/>
        ) : sideBarLink === 'Calendar' ? (
          <Calender/>
        ) : sideBarLink === 'Saved' ? (
          <SavedApplications/>
        ) : null}
      </div>
        {addnewapplication && <AddAplication/>}
    </div>
  );
}
