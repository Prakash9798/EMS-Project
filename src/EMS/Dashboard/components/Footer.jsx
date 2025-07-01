import React from "react";

const Footer = () => {
  return (
    <div className="p-4 lg:flex lg:items-center lg:justify-center lg:ml-[33px]">
      <div className="w-full bg-[#20252E] lg:w-[98%]  rounded-md p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-white text-2xl sm:text-3xl font-light">
            Work Log
          </h1>

          <div className="flex flex-col sm:flex-row gap-3">
            <select className="h-[35px] w-full sm:w-[150px] bg-[#20262E] px-2 text-white rounded">
              <option value="">Select Project</option>
              <option value="">Project A</option>
              <option value="">Project B</option>
            </select>

            <select className="h-[35px] w-full sm:w-[150px] bg-[#20262E] px-2 text-white rounded ">
              <option value="">Select Employee</option>
              <option value="">Employee A</option>
              <option value="">Employee B</option>
            </select>
          </div>
        </div>

        <hr className="mt-4 w-full border-none h-[0.5px] bg-gray-500" />

        <div className="p-4">
          <div className="min-h-[80px] rounded-md bg-[#2A323D] p-5 flex items-center justify-start">
            <h1 className="font-light text-[#E4E4E6]">No Recent Work Logs!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
