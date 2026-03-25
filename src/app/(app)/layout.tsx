"use client";
import Sidebar from "@/src/components/Sidebar";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Uilayout = ({ children }: { children: React.ReactNode }) => {
  const [pageName, setPageName] = React.useState<string>("");
  const pathName = usePathname();

  useEffect(() => {
    switch (pathName) {
      case "/applications":
        setPageName("Job Applications");
        break;
      case "/calendar":
        setPageName("Calendar");
        break;
      case "/analytics":
        setPageName("Analysis");
        break;
      case "/calendar":
        setPageName("Calendar");
        break;
      case "/interview-prep":
        setPageName("Interview Prepration");
        break;
      case "/resumes":
        setPageName("Resume");
        break;
      case "/profile":
        setPageName("Profile");
        break;
      default:
        break;
    }
  }, [pathName]);

  return (
    <div className="w-full h-screen overflow-hidden flex">
      <div className="w-auto h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-3 px-3 py-2  w-full h-full ">
        <div className="w-full bg-white flex items-center py-3 pl-8 rounded-lg shadow-md">
          <h1 className="f-inter text-lg f-inter font-semibold text-gray-600">
            {pageName}
          </h1>
        </div>
        <div className="w-full h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Uilayout;
