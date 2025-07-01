import React, { useState } from "react";
import "./HolidayCard.css";

const HolidayCard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingHolidays = [
    {
      date: "08 August 2025 (Friday)",
      title: "Rakhi",
      type: "NATIONAL",
    },
    {
      date: "15 August 2025 (Friday)",
      title: "Independence Day",
      type: "NATIONAL",
    },
    {
      date: "09 September 2025 (Tuesday)",
      title: "Prophet's Birthday",
      type: "NATIONAL",
    },
  ];

  const allHolidays = [
    ...upcomingHolidays,
    {
      date: "02 October 2025 (Thursday)",
      title: "Gandhi Jayanti",
      type: "NATIONAL",
    },
    {
      date: "25 December 2025 (Thursday)",
      title: "Christmas",
      type: "NATIONAL",
    },
  ];

  const currentData = activeTab === "upcoming" ? upcomingHolidays : allHolidays;

  return (
    <div className="sm:p-2">
      <div className="p-4 image relative rounded-xl shadow-lg w-full sm:w-[100%] lg:h-[520px] sm:mt-4 lg:mt-0 lg:w-[430px]">
        <div className="bg-[#161A1F] px-3 py-2 rounded-md w-fit mb-1">
          <h2 className="text-[#D8DEE9] text-xl font-semibold text-center">
            Holidays
          </h2>
        </div>

        <div className="flex flex-wrap sm:justify-start ">
          <div
            onClick={() => setActiveTab("upcoming")}
            className={`cursor-pointer px-4 py-2 rounded text-center text-sm font-medium border-t  border-t-[#FFFFFF] ${
              activeTab === "upcoming"
                ? "bg-[#2A323D] text-[#99CE6B]"
                : "bg-[#2A323D] text-white font-light"
            }`}
          >
            Upcoming Holidays
          </div>
          <div
            onClick={() => setActiveTab("all")}
            className={`cursor-pointer px-4 py-2 rounded text-center text-sm font-medium ${
              activeTab === "all"
                ? "bg-[#2A323D] text-[#99CE6B]"
                : "bg-[#2A323D] text-white font-light"
            }`}
          >
            All Holidays
          </div>
        </div>

        <div
          className="h-[420px] rounded-lg border border-[#3B4252] shadow-inner bg-[#2A323D] w-full overflow-y-auto "
          style={{
            boxShadow: `
              inset 10px 10px 20px #1c1f26,
              inset -10px -10px 20px #343b45
            `,
          }}
        >
          {currentData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-start p-3">
                <div>
                  <p className="text-gray-300 text-base sm:text-lg">
                    {item.date}
                  </p>
                  <h3 className="text-white font-semibold text-lg sm:text-xl">
                    {item.title}
                  </h3>
                </div>
                <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                  {item.type}
                </span>
              </div>
              <hr className="border-t border-white mx-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HolidayCard;
