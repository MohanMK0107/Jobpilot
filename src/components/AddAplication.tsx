"use client";
import React, { useState, useEffect } from "react";
import {
  HiMiniXMark,
  RiBuilding2Line,
  HiOutlineBriefcase,
  MdOutlineSource,
  FaRupeeSign,
  MdDateRange,
  MdOutlineNotes,
} from "../icons";
import useAppContext from "../hooks/UseAppContext";

import toast, {Toast} from 'react-hot-toast'

{/* Interface for add application*/}
interface ApplicationForm {
  companyName:string;
  position:string;
  source:string;
  location:string;
  worktype:string;
  appliedDate: string;
  salary:number;
  status:string;
  stage:string;
  notes:string;
}
// Shared Tailwind styles for consistency
const inputWrapperClasses = `
  flex items-center gap-3 px-4 py-2.5 
  bg-gray-50 border border-gray-200 rounded-xl 
  focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 
  transition-all duration-200
`;

const labelClasses = "text-sm font-semibold text-gray-700 ml-1";

const AddApplication = () => {
  const { toggleAddNewApplication, router, pathName } = useAppContext();
  const [source, setSource] = useState("");

  const [addApplicationForm,setAddApplicationForm] = useState<ApplicationForm>({
    companyName:'',
    position:'',
    source:'',
    location:'',
    worktype:'',
    appliedDate: '',
    salary: 0,
    status:'',
    stage:'',
    notes:'',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement >) => {
   
    const { name, value } = e.target;
  
    setAddApplicationForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const resetApplicationForm = ()=>{
    setAddApplicationForm({
      companyName:'',
      position:'',
      source:'',
      location:'',
      worktype:'',
      appliedDate: '',
      salary: 0,
      status:'',
      stage:'',
      notes:'',
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(addApplicationForm);
    toast.success('application added')
    resetApplicationForm();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity"
        onClick={toggleAddNewApplication}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl h-auto bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Add Application
            </h1>
            <p className="text-sm text-gray-500">
              Keep track of your job hunt progress.
            </p>
          </div>
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <HiMiniXMark size={28} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6 h-auto overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name='companyName'
              icon={<RiBuilding2Line className="text-gray-400" />}
              label="Company Name"
              value={addApplicationForm.companyName}
              placeholder="e.g. Google"
              onChange={handleChange}
            />
            <Input
              name='position'
              icon={<HiOutlineBriefcase className="text-gray-400" />}
              label="Position"
              value={addApplicationForm.position}
              placeholder="e.g. Frontend Developer"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name='location'
              icon={<RiBuilding2Line className="text-gray-400" />}
              label="Location"
              placeholder="e.g. Jp Nagar - bengaluru"
              value={addApplicationForm.location}
              onChange={handleChange}
            />

            <Select
              name='worktype'
              label="Work type"
              icon={<MdOutlineSource className="text-gray-400" />}
              value={addApplicationForm.worktype}
              onChange={handleChange}
              
            >
              <option value="">Select Job type</option>
              <option value="On Site">On Site</option>
              <option value="Work from Home">Work from home</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              name='source'
              label="Application Source"
              icon={<MdOutlineSource className="text-gray-400" />}
              value={addApplicationForm.source}
              onChange={handleChange}
              
            >
              <option value="">Select Source</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Indeed">Indeed</option>
              <option value="Company Site">Company Site</option>
              <option value="Referral">Referral</option>
              <option value="Other">Other</option>
            </Select>

            {source === "Other" ? (
              <Input
                icon={<MdOutlineSource className="text-gray-400" />}
                label="Custom Source"
                placeholder="Where did you find it?"
                
              />
            ) : (
              <Input
                icon={<MdDateRange className="text-gray-400" />}
                type="date"
                label="Applied Date"
              />
            )}
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="flex w-full">
              <Input
                name='salary'
                icon={<FaRupeeSign className="text-gray-400" />}
                type="number"
                label="Expected Salary"
                placeholder="LPA"
                value={addApplicationForm.salary}
                onChange={handleChange}
              />
            </div>
            <Select name='status' value={addApplicationForm.status} onChange={handleChange} label="Status">
              <option value="">Select satatus</option>
              <option value='applied'>Applied</option>
              <option value='interviewing'>Interviewing</option>
              <option value='offer'>Offer</option>
              <option value='rejected'>Rejected</option>
            </Select>

            { (addApplicationForm.status === 'interviewing' || addApplicationForm.status === 'applied') &&
             (<Select name='stage' value={addApplicationForm.stage} onChange={handleChange} label="Current Stage">
              <option value="">select stage</option>
              <option value='initialApplied'>Initial Applied</option>
              <option value='technicalAssesment'>Technical Assessment</option>
              <option value='systemDesign'>System Design</option>
              <option value='hrInterview'>HR Interview</option>
            </Select>)
            }
          </div>

          <div className="flex flex-col gap-1.5">
            <label className={labelClasses}>Internal Notes</label>
            <div className={inputWrapperClasses + " items-start"}>
              <MdOutlineNotes className="text-gray-400 mt-1" size={20} />
              <textarea
                name='notes'
                value={addApplicationForm.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Key technologies, interviewer names, or follow-up dates..."
                className="w-full bg-transparent outline-none text-sm resize-none py-1"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              onClick={toggleAddNewApplication}
              className="flex-1 py-3 px-4 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-[2] bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl transition-all"
            >
              Save Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* --- Sub-Components --- */

const Input = ({ icon, label, ...props }: any) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className={labelClasses}>{label}</label>
    <div className={inputWrapperClasses}>
      {icon}
      <input
        {...props}
        className="w-full bg-transparent outline-none text-sm placeholder:text-gray-400 text-gray-900"
      />
    </div>
  </div>
);

const Select = ({ icon, label, children, ...props }: any) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className={labelClasses}>{label}</label>
    <div className={inputWrapperClasses}>
      {icon}
      <select
        {...props}
        className="w-full bg-transparent outline-none text-sm text-gray-900 cursor-pointer"
      >
        {children}
      </select>
    </div>
  </div>
);

export default AddApplication;
