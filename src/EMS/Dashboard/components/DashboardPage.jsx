import React from "react";
import Navbar from "./Navbar";
import AttendenceCard from "./AttendenceCard";
import WeeklyCard from "./WeeklyCard";
import MonthlyHours from "./MonthlyHours";
import HolidayCard from "./HolidayCard";
import BirthdayCard from "./BirthdayCard";
import AnniversaryCard from "./AnniversaryCard";
import Footer from "./Footer";
import Footer1 from "./Footer1";
import Sidebar from "./Sidebar";

const DashboardPage = () => {
  return (
    <div className="bg-[#2E3440]">
      <Navbar />
      <div className="lg:flex lg:items-center  lg:justify-between lg:p-9 lg:ml-[25px] lg:mr-[-20px]">
        <AttendenceCard />
        <WeeklyCard />
        <MonthlyHours />
      </div>
      <div className="lg:flex lg:items-center lg:justify-between lg:p-4 lg:ml-[45px] lg:mr-[10px]">
        <HolidayCard />
        <BirthdayCard />
        <AnniversaryCard />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Footer1 />
      </div>
      <Sidebar />
    </div>
  );
};

export default DashboardPage;
