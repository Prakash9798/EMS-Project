import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const WeeklyCard = () => {
  const totalHours = 18;
  const loggedHours = 15;
  const percentage = (loggedHours / totalHours) * 100;

  return (
    <div>
      <div className="bg-[#20252E] w-full sm:w-[100%] md:w-[100%] lg:h-[530px] lg:w-[440px]  p-4 rounded-lg">
        <div className="bg-[#161A1F] px-3 py-2 rounded-lg mb-4  w-[190px] sm:w-[240px]  lg:w-[220px] lg:text-left ">
          <h1 className="font-bold text-2xl sm:text-3xl  text-white truncate">
            Weekly Hours
          </h1>
        </div>
       
        <div className="bg-[#2A323D] p-4 rounded-lg lg:w-[390px] lg:h-[410px] ">
          <p className="mb-4 text-base sm:text-lg text-white text-center lg:text-left">
            23 Jun 2025 to 29 Jun 2025
          </p>

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

          <div className="mt-8 text-sm sm:text-md text-white font-light flex flex-row  sm:flex-row  sm:justify-between gap-10 lg:flex lg:text-nowrap text-center">
            <p>Tot: {totalHours} h</p>
            <p>Logged: {loggedHours} h</p>
            <p>Avg: 7 h 30 m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCard;
