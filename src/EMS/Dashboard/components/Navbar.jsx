import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faSpinner,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./LoginContext";


const Navbar = () => {
  const [openCard, setOpenCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useLogin();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setOpenCard(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCard = () => setOpenCard(!openCard);
  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <div className="bg-[#2E3440] w-full shadow-md sticky top-0 z-50">
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="block sm:hidden text-white text-xl"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <h1 className="font-bold text-[#D8DEE9] text-xl sm:text-2xl ml-2 sm:ml-14">
            Guava Tress Softech
          </h1>

          <div
            className="hidden sm:flex items-center gap-3 relative"
            ref={cardRef}
          >
            <img
              className="w-[50px] object-contain"
              src="https://ems.guavatrees.net/assets/layout/images/logo-mirage@2x.png"
              alt="logo"
            />

            <div className="relative">
              <h1
                onClick={handleCard}
                className="text-[#BCC2CD] cursor-pointer text-base"
              >
                {user?.name || "Prakash Kumar"}
              </h1>

              {openCard && (
                <div className="absolute top-10 right-0 w-[250px] bg-[#161A1F] rounded-md shadow-lg z-50">
                  <div className="p-3 flex items-center gap-3 hover:bg-[#1f252b] cursor-pointer">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[#99CE6B] text-base"
                    />
                    <h1 className="text-[#99CE6B] text-sm font-medium">
                      Profile
                    </h1>
                  </div>
                  <hr className="bg-gray-300 border-none h-[0.5px] w-full" />
                  <div
                    className="p-3 flex items-center gap-3 hover:bg-[#1f252b] cursor-pointer"
                    onClick={handleLogout}
                  >
                    {loading ? (
                      <FontAwesomeIcon
                        icon={faSpinner}
                        spin
                        className="text-[#99CE6B]"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        className="text-[#99CE6B]"
                      />
                    )}
                    <h1 className="text-[#99CE6B] text-sm font-medium">
                      Logout
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <hr className="w-[100%] mx-auto border-none h-[0.5px] bg-white" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden">
          <div className="fixed top-0 left-0 w-[250px] h-full bg-[#161A1F] shadow-lg p-4 z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-xl font-semibold">Menu</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-white text-lg"
                />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="text-[#99CE6B]" />
                <span className="text-white text-sm">
                  {user?.name || "Prakash Kumar"}
                </span>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleLogout}
              >
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className="text-[#99CE6B]"
                />
                <span className="text-white text-sm">Logout</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
