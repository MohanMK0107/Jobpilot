"use client";
import React, { useActionState } from "react";
import { HiMiniXMark } from "@/src/icons/index";
import { FaBuilding, FaLink, FaMoneyBillWave } from "react-icons/fa";
import { MdWorkOutline, MdOutlineAccessTime } from "react-icons/md";
import useAppContext from "@/src/hooks/UseAppContext";

const page = () => {
  const {pathName , router} = useAppContext();
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      
      {/* Modal */}
      <div className="relative w-[420px] bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="text-xl font-semibold text-gray-700 f-inter">
            Application Details
          </h2>

          <button onClick={()=>router.back()} className="text-2xl text-gray-500 hover:text-gray-700 transition">
            <HiMiniXMark />
          </button>
        </div>

        {/* Job Info */}
        <div className="flex flex-col gap-2">

          <h1 className="text-xl font-semibold text-gray-800 f-inter">
            Software Developer
          </h1>

          <div className="flex items-center gap-2 text-gray-600">
            <FaBuilding />
            <span className="f-poppins">Google</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaMoneyBillWave />
            <span className="f-poppins">₹ 4,00,000</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <MdWorkOutline />
            <span className="f-poppins">On-site</span>
          </div>
        </div>

        {/* Application Details */}
        <div className="grid grid-cols-2 gap-4">

          <div className="flex flex-col">
            <span className="text-sm text-gray-400 f-inter">Applied Date</span>
            <span className="text-gray-700 font-semibold f-poppins">
              02 Mar 2026
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-gray-400 f-inter">Source</span>
            <div className="flex items-center gap-2 text-gray-700">
              <FaLink />
              LinkedIn
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-gray-400 f-inter">Status</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm font-semibold w-fit">
              Applied
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-gray-400 f-inter">Current Stage</span>
            <span className="text-gray-700 font-semibold">
              Resume Screening
            </span>
          </div>

        </div>

        {/* Notes */}
        <div className="flex flex-col gap-2">

          <h4 className="text-gray-700 font-semibold f-inter">
            Notes
          </h4>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-600 text-sm">
            Follow up with recruiter next week.  
            Resume submitted through referral.
          </div>

        </div>

      </div>
    </div>
  );
};

export default page;