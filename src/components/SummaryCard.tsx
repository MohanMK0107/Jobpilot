import React from "react";
import {IoFileTrayStacked , HiMiniChatBubbleLeftRight ,FaHandshake, BsFileEarmarkExcelFill , IoIosArrowRoundUp ,} from '../icons'
const SummaryCard = () => {
  const summaryCards = [
    { title: "Total Applications", total: 50, icon: IoFileTrayStacked },
    { title: "Interview calls", total: 10, icon: HiMiniChatBubbleLeftRight },
    { title: "Offers", total: 5, icon: FaHandshake },
    { title: "Rejected", total: 30, icon: BsFileEarmarkExcelFill },
  ];

  return (
    <div className="w-fit flex gap-10">
      {summaryCards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 w-80 ">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 f-inter">{card.title}</p>
                <h2 className="text-2xl f-inter">{card.total}</h2>
                <div className="flex items-center">
                  <IoIosArrowRoundUp className="text-green-500 size-6"/>
                  <span className="text-green-500 text-sm f-poppins">4% <span className="text-gray-600">since last month</span></span>
                </div>
              </div>
              <div className="text-black/50 text-2xl bg-purple-100 p-2 rounded-lg ml-3">
                {React.createElement(card.icon)}
              </div>
            </div>
        </div>
        
    ))}
    </div>
  );
};

export default SummaryCard;
