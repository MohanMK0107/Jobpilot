import React from "react";
import SummaryCard from "../components/SummaryCard";
import RecentApplications from "../components/RecentApplications";
import ChartAnalytics from "../components/ChartAnalytics";
import { PiNotePencilLight ,TbLabelImportantFilled ,BsRobot } from "../icons";
import useAppContext from "../hooks/UseAppContext";
import CreateNote from "../components/CreateNote";
import AllNotes from "../components/AllNotes";

const Dashboard = () => {
  const {createNote , toggleCreateNote , viewNote , toggleViewNote} = useAppContext();
  const currDate:Date = new Date();
  const formatted = currDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });


  return (
    <div className="px-8 py-6 w-full h-full flex flex-col gap-4 relative">
      <div className="flex flex-col">
        <h1 className="text-3xl f-inter font-semibold text-gray-700">
          Welcome , Mohan!
        </h1>
        <p className="text-2xl f-poppins text-gray-700">{`${formatted}`}</p>
      </div>
      <div className="flex items-center gap-3">
        {/* Summary Cards */}
        <SummaryCard />
      </div>
      <div className="w-full grid grid-cols-[40%_60%] gap-4 h-full">
        <div className="flex flex-col">
          <RecentApplications/>
          
        </div>
        <div className="w-full h-full flex flex-col gap-3 pr-8">
          <div className="h-[400px] w-full">
            <ChartAnalytics/>
          </div>
          <div className="flex flex-1 items-start w-full h-full justify-between">
            <div className="flex flex-col gap-1">
              <div onClick={()=>toggleCreateNote()} className=" flex items-center gap-2 bg-amber-300 hover:bg-amber-200 w-50 h-15 pl-3 py-3 rounded-lg shadow-md text-gray-600 cursor-pointer ">
                <PiNotePencilLight className=" size-8"/>
                <span className="text-lg f-inter font-semibold">Add Note</span>
              </div>
              <span onClick={()=>toggleViewNote()} className="flex justify-end underline f-inter font-semibold text-gray-400 cursor-pointer hover:text-gray-500">View notes</span>
              
            </div>

            <div className="bg-purple-400 w-50 h-15 pl-3 py-3 rounded-lg shadow-md hover:bg-purple-500  cursor-pointer flex items-center gap-2">
              <BsRobot className="size-8"/>
              <span className="text-lg f-inter font-semibold">Ask Ai</span>
            </div>

          </div>
          

        </div>

        <div className={`absolute z-30 bg-white border-2 border-gray-200 w-[25vw] h-[50vh] rounded-lg shadow-lg top- right-10 p-4 ${createNote && !viewNote ? 'translate-y-0 transition-transform duration-500 ease-in-out ':'translate-y-[200%] transition-transform duration-300 ease-in-out'}`}>
          <CreateNote/>
        </div>

        {viewNote && (
          <div className="absolute top-25 right-10">
            <AllNotes/>
          </div>
        )}


      </div>
    </div>
  );
};

export default Dashboard;
