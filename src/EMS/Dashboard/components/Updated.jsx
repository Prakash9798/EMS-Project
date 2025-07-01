import React from 'react'
import {
    CircularProgressbar,
    buildStyles,
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
const MonthlyHours = () => {
    const totalHours = 144;
    const loggedHours = 131;
    const percentage = (loggedHours / totalHours) * 100;
  return (
  
    <div className='h-[530px] w-[440px] bg-[#20252E] p-4'>
     <div className=' bg-[#161A1F] w-[230px] h-[45px] text-nowrap p-1 rounded-lg ml-5 '>
       <h1 className='font-bold text-3xl text-white'>Monthly Hours</h1>
       </div>
       <div  className="p-6 w-[390px] h-[410px]  bg-[#2A323D] mt-4">
    <div className='flex items-center justify-between'>
    <p className="mb-4 text-xl font-normal text-white">June</p>
    <div className='flex items-center gap-3'>
    <div className='w-[30px] h-[32px] bg-[#89C553] p-[-3px] rounded-md cursor-pointer'>
    <i class="ri-arrow-right-fill text-white text-2xl"></i>
    </div>
    <div className='w-[30px] h-[32px] bg-[#89C553] p-[-3px] rounded-md cursor-pointer'>
    <i className="ri-arrow-left-fill text-white text-2xl"></i>
    </div>
    </div>
    </div>

    <div className="w-[240px] mx-auto relative">
      <CircularProgressbar 
        value={percentage}
        strokeWidth={13} 
        // text={`Total Hours\n${totalHours} h`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#89C553",
          trailColor: "#d6d6d6",
          textSize: "12px",
          
        })}
      />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] text-center text-white">
    <div className="text-xl font-normal">Total Hours</div>
    <div className="text-xl font-normal">{totalHours} h</div>
  </div>

    </div>

    <div className="mt-9 text-md text-white font-light flex items-center justify-between ">
      <p>Tot: {totalHours} h</p>
      <p>Logged: {loggedHours} h</p>
      <p>Avg: 7 h 30 m</p>
    </div>

    </div>
  </div>
  )
}

export default MonthlyHours;