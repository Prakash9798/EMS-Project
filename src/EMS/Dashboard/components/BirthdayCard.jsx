import { div } from "framer-motion/client";
import React from "react";

const BirthdayCard = () => {
  const data = [
    {
      date: "01 July 2025",
      name: "Mohammad Ashraf Naim",
      dept: "TOP MANAGEMENT",
    },
    {
      date: "24 July 2025",
      name: "Mahak Majeed",
      dept: "SOFTWARE DEVELOPMENT",
    },
    {
      date: "26 July 2025",
      name: "Basit Azeem Sheikh",
      dept: "TOP MANAGEMENT",
    },
    {
      date: "10 August 2025",
      name: "Akshay Sodani",
      dept: "SOFTWARE DEVELOPMENT",
    },
    { date: "27 August 2025", name: "Kishan Kabra", dept: "HUMAN RESOURCES" },
    {
      date: "19 September 2025",
      name: "Maysara Noor Zia",
      dept: "SOFTWARE DEVELOPMENT",
    },
    {
      date: "28 September 2025",
      name: "Niranjan Kumar",
      dept: "SOFTWARE DEVELOPMENT",
    },
  ];

  return (
    <div className="sm:p-2">
      <div className=" relative image  p-1   rounded-xl w-full sm:w-[100%] sm:p-1 lg:h-[520px] sm:mt-4 lg:w-[430px] lg:mt-0">
        <div className="bg-[#161A1F] px-6 py-2 rounded-2xl  shadow-xl border border-[#3B4252] w-[150px]  transition-all duration-300 hover:shadow-[0_0_20px_#81A1C1]">
          <h1 className="font-bold text-2xl text-[#D8DEE9] tracking-wide ">
            Birthday
          </h1>
        </div>

        <div
          className="h-[480px] rounded-lg  shadow-inner w-full mt-6 bg-[#2A323D] overflow-y-auto border-b border-[#3B4252]"
          style={{
            boxShadow: `
              inset 10px 10px 20px #1c1f26,
              inset -10px -10px 20px #343b45
            `,
          }}
        >
          {data.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between items-start p-3">
                <div>
                  <p className="text-[#E4E4E6] text-sm sm:text-base">
                    {item.date}
                  </p>
                  <h3 className="text-[#E4E4E6] font-bold text-base sm:text-lg">
                    {item.name}
                  </h3>
                </div>
                <span className="bg-[#C8E6C9] text-[#246028] text-xs sm:text-sm font-bold px-2 py-1 rounded text-nowrap">
                  {item.dept}
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

export default BirthdayCard;
