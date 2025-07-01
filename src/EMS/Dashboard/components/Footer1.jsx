import React from "react";

const Footer1 = () => {
  return (
    <div className="flex justify-center lg:ml-[55px] lg:w-[96%]">
      <div className="w-full h-auto sm:h-[68px] bg-[#20252E] flex flex-col items-center sm:items-end justify-center text-white p-3 sm:p-2 text-center sm:text-right">
        <h1 className="text-sm sm:text-base">EMS v1.11.18</h1>
        <p className="text-xs sm:text-sm">
          Copyright{" "}
          <a
            href="https://www.guavatrees.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#99CE6B] hover:underline"
          >
            Guava Tress Softech
          </a>
          , 2025
        </p>
      </div>
    </div>
  );
};

export default Footer1;
