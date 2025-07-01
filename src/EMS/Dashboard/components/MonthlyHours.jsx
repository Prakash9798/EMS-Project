import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MonthlyHours = () => {
  const [isBack, setIsBack] = useState(true);

  const handleNext = () => {
    if (!isBack) return;
    setIsBack(false);
  };

  const handlePrevious = () => {
    if (isBack) return;
    setIsBack(true);
  };

  const totalHours = isBack ? 160 : 144;
  const loggedHours = isBack ? 140 : 131;
  const percentage = (loggedHours / totalHours) * 100;
  const month = isBack ? "May" : "June";
  const average = isBack ? "8 h 0 m" : "7 h 30 m";

  return (
    <div>
      <div className="bg-[#20252E] w-full  sm:w-[100%] md:w-[100%] lg:h-[530px] lg:w-[440px]  p-4 rounded-lg">
        <div className="bg-[#161A1F] px-3 py-1 rounded-lg mb-5 w-[200px] sm:w-[230px]   ">
          <h1 className="font-bold text-2xl sm:text-3xl text-white truncate">
            Monthly Hours
          </h1>
        </div>

        <div className="bg-[#2A323D] p-4 rounded-lg  transition-all duration-500 ease-in-out lg:w-[390px] lg:h-[410px]">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <p className="text-base sm:text-xl font-normal text-white">
              {month}
            </p>

            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 bg-[#89C553] rounded-md cursor-pointer flex items-center justify-center"
                onClick={handlePrevious}
              >
                <i className="ri-arrow-left-fill text-white text-lg sm:text-2xl"></i>
              </div>
              <div
                className="w-8 h-8 bg-[#89C553] rounded-md cursor-pointer flex items-center justify-center"
                onClick={handleNext}
              >
                <i className="ri-arrow-right-fill text-white text-lg sm:text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="w-[200px] sm:w-[240px] mx-auto relative">
            <CircularProgressbar
              value={percentage}
              strokeWidth={13}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#89C553",
                trailColor: "#d6d6d6",
                textSize: "12px",
              })}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] text-center text-white">
              <div className="text-base sm:text-xl font-normal">
                Total Hours
              </div>
              <div className="text-base sm:text-xl font-normal">
                {totalHours} h
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm sm:text-lg text-white font-light flex flex-row sm:flex-row items-center justify-between text-center lg:text-nowrap lg:text-sm lg:gap-3 gap-2">
            <p>Tot: {totalHours} h</p>
            <p>Logged: {loggedHours} h</p>
            <p>Avg: {average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyHours;
