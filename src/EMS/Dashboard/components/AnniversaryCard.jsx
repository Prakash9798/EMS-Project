import React from "react";
import "./HolidayCard.css";

const AnniversaryCard = () => {
  const data = [
    {
      name: "Basit Azeem Sheikh (4)",
      dept: "TOP MANAGEMENT",
      date: "01 July 2025",
    },
    {
      name: "Gopika Sodani (4)",
      dept: "SOFTWARE DEVELOPMENT",
      date: "01 July 2025",
    },
    {
      name: "Saurabh Namdev (4)",
      dept: "SOFTWARE DEVELOPMENT",
      date: "01 July 2025",
    },
    {
      name: "Saman Noor (4)",
      dept: "SOFTWARE DEVELOPMENT",
      date: "01 July 2025",
    },
    {
      name: "Maysara Noor Zia (4)",
      dept: "SOFTWARE DEVELOPMENT",
      date: "01 July 2025",
    },
    {
      name: "Mohammad Ashraf Naim (4)",
      dept: "TOP MANAGEMENT",
      date: "01 July 2025",
    },
  ];

  return (
    <div className="sm:p-2">
      <div className="p-1 image relative rounded-xl shadow-lg w-full   sm:w-[100%] sm:mt-4 lg:mt-0 lg:h-[520px] lg:w-[430px]">
        <div className="bg-[#161A1F] px-6 py-4 rounded-2xl shadow-xl border border-[#3B4252] w-fit  transition-all duration-300 hover:shadow-[0_0_20px_#81A1C1]">
          <h1 className="font-bold text-2xl text-[#D8DEE9] tracking-wide">
            Anniversary
          </h1>
        </div>

        <div
          className="h-[480px] rounded-lg border border-[#3B4252] shadow-inner bg-[#2A323D] w-full mt-2 p-3 overflow-y-auto"
          style={{
            boxShadow: `
      inset 10px 10px 20px #1c1f26,
      inset -10px -10px 20px #343b45
    `,
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-3 gap-4 border-b border-white"
            >
              <div className="flex flex-col">
                <p className="text-[#E4E4E6] text-sm sm:text-base">
                  {item.date}
                </p>
                <h3 className="text-[#E4E4E6] font-bold text-base sm:text-lg">
                  {item.name}
                </h3>
              </div>

              <span className="bg-[#C8E6C9] text-[#246028] text-xs sm:text-sm font-bold px-2 py-1 rounded whitespace-nowrap">
                {item.dept}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnniversaryCard;
