import React from "react";
import SummaryCard from "./SummaryCard";

const Dashboard = () => {
  return (
    <div className="px-10 py-8 w-full h-full flex flex-col  gap-4">
      <div className="flex flex-col">
        <h1 className="text-3xl f-inter font-semibold text-gray-700">
          Welcome , Mohan!
        </h1>
        <p className="text-xl f-poppins text-gray-700">Saturday, Jan 12 2026</p>
      </div>
      {/* Summary Cards */}
      <SummaryCard />
    </div>
  );
};

export default Dashboard;
