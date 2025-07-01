import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:block">
      <div className="group h-screen w-[60px] hover:w-[220px] bg-[#2E3440] p-3 fixed top-0 left-0 z-50 transition-all duration-300 overflow-hidden flex flex-col gap-y-2">
        <div className="flex items-center  gap-4 h-[40px] ">
          <img
            className="w-[40px] h-[40px] object-contain "
            src="https://cdn.guavatrees.net/gt-ems/media/client_89a05799-d3d4-4ac1-88bf-95878905e129/logo/77c79461-fa13-49c0-be6e-55e1ed14de22"
            alt="Logo"
          />
          <div className="overflow-hidden transition-all duration-300 w-0 group-hover:w-[130px]">
            <span className="text-white text-sm font-semibold pl-3 whitespace-nowrap">
              Guava Trees
            </span>
          </div>
        </div>

      

        <div className="flex flex-col gap-y-3 mt-3  ">
          {[
            { icon: "ri-home-4-fill", label: "Dashboard" },
            { icon: "ri-contacts-line", label: "Contacts" },
            { icon: "ri-folder-4-line", label: "Projects" },
          ].map((item, index) => (
            <div
              key={index}
              className=" group flex items-center gap-4 h-[40px] pl-1 cursor-pointer "
            >
              <div className="flex items-center justify-between gap-4 w-full group-hover:flex-row-reverse transition-all duration-300">
                <i
                  className={`${item.icon} text-[#99CE6B] text-xl w-[24px] text-center`}
                ></i>
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
