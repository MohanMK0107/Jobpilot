import React from "react";
import { IoFileTrayStacked } from "react-icons/io5";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { IoIosArrowRoundUp , IoIosArrowRoundDown} from "react-icons/io";
const SummaryCard = () => {
  const summaryCards = [
    { title: "Total Applications", total: 50, icon: IoFileTrayStacked },
    { title: "Interview calls", total: 10, icon: HiMiniChatBubbleLeftRight },
    { title: "Offers", total: 5, icon: FaHandshake },
    { title: "Rejected", total: 30, icon: BsFileEarmarkExcelFill },
  ];

  return (
    <div className="w-full flex gap-10">
      {summaryCards.map((card, index) => (
        <div key={index}>
          <div className="bg-white shadow-md rounded-lg p-6 ">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm f-poppins">{card.title}</p>
                <h2 className="text-xl f-inter">{card.total}</h2>
                <div className="flex items-center">
                  <IoIosArrowRoundUp className="text-green-500 size-6"/>
                  <span className="text-green-500 text-sm f-poppins">4% <span className="text-gray-600">since last month</span></span>
                </div>
              </div>
              <div className="text-black/50 text-xl bg-purple-100 p-2 rounded-lg ml-3">
                {React.createElement(card.icon)}
              </div>
            </div>
          </div>
        </div>
        
    ))}
    </div>
  );
};

export default SummaryCard;
