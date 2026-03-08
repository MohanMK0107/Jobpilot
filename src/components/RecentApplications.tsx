"use client";
import React from "react";
import { FaBuilding, FaLink , MdOutlineAccessTime} from "../icons";
import useAppContext from "../hooks/UseAppContext";

const applications = [
  {
    company: "Google",
    role: "Software Engineer",
    source: "LinkedIn",
    appliedDate: "2026-02-12",
  },
  {
    company: "Amazon",
    role: "Frontend Developer",
    source: "Referral",
    appliedDate: "2026-02-10",
  },
  {
    company: "Microsoft",
    role: "Backend Engineer",
    source: "Company Website",
    appliedDate: "2026-02-08",
  },
  {
    company: "Meta",
    role: "Full Stack Developer",
    source: "Indeed",
    appliedDate: "2026-02-05",
  },
];



const RecentApplications = () => {

  const {router} = useAppContext();

  
  
  return (
    <div className="w-full h-full rounded-2xl p-5 flex flex-col ">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg f-inter font-semibold text-gray-700 f-inter">
          Recent Applications
        </h3>

        <button onClick={()=>router.push('/applications')} className="text-sm bg-gray-200 px-3 py-1 rounded-lg f-inter flex items-center  hover:bg-gray-300 transition-colors">
          View All
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 mt-4 overflow-y-auto pr-1 h-full ">
        {applications.map((app, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 bg-white rounded-xl shadow-md cursor-pointer"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-3 rounded-full">
                <FaBuilding className="text-gray-600" />
              </div>

              <div>
                <h4 className="f-inter font-semibold text-gray-800">
                  {app.company}
                </h4>
                <p className="f-monte text-gray-500">{app.role}</p>
              </div>
            </div>

            {/* Middle */}
            <div className="hidden md:flex flex-col text-sm text-gray-500 gap-1 items-start">
              <div className="flex items-center gap-1">
                <MdOutlineAccessTime />
                <span className="f-monte">
                  {new Date(app.appliedDate).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <FaLink />
                <span>{app.source}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Empty State */}
      {applications.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <p>No recent applications</p>
        </div>
      )}
    </div>
  );
};

export default RecentApplications;