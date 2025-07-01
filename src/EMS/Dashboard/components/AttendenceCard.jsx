import React from "react";

const AttendenceCard = () => {
  const attendanceData = [
    { date: "2025-06-24", hours: 6, minutes: 10 },
    { date: "2025-06-23", hours: 8, minutes: 50 },
    { date: "2025-06-20", hours: 8, minutes: 51 },
    { date: "2025-06-19", hours: 8, minutes: 50 },
    { date: "2025-06-18", hours: 9, minutes: 8 },
    { date: "2025-06-17", hours: 8, minutes: 51 },
  ];

  return (
    <div className="flex   ">
      <div className="bg-[#20252E] p-4 rounded-lg w-[100%] sm:w-[100%] lg:h-[530px] lg:w-[440px] ">
        <div className="bg-[#161A1F] p-2 rounded-lg mb-4 w-[240px] sm:w-[290px] lg:w-[290px]">
          <h1 className="font-bold text-2xl sm:text-3xl text-white truncate">
            Recent Attendance
          </h1>
        </div>

        <div className="bg-[#2A323D] p-4 rounded-md lg:w-[390px] lg:h-[410px] overflow-y-auto">
          {attendanceData.map((entry, index) => {
            const date = new Date(entry.date);
            const formattedDate = date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            });

            return (
              <div key={index} className="mb-4">
                <div className="flex  items-center justify-between flex-wrap gap-y-1">
                  <div className="text-white font-semibold text-base sm:text-lg">
                    {formattedDate}
                  </div>
                  <div className="text-white text-base sm:text-lg">
                    {entry.hours} hour {entry.minutes} minute
                  </div>
                </div>
                <hr className="mt-2 border-t-[1.5px] border-white" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AttendenceCard;
