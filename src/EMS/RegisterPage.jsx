import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Pages = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [Company, setCompany] = useState("");

  const handleRegister = async () => {
    if (!email || !name || !password) {
      toast.error("All fields are mandatory");
      return;
    }
    const res = await fetch(
      `https://682d7aa64fae188947561cb8.mockapi.io/users`,
      {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      toast.success("Registered Successfully");
      setEmail("");
      setName("");
      setPassWord("");
      setConfirmpass("");
      setCompany("");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex items-start justify-center w-full min-h-screen bg-[#ECEFF3]  ">
      <div className="w-full max-w-[450px] bg-[#E6EAF0] rounded-md shadow-md p-6 sm:p-8 lg:mt-3">
        <div className="flex flex-col items-center">
          <img
            src="https://ems.guavatrees.net/assets/layout/images/logo-mirage@2x.png"
            alt="Logo"
            className="w-[100px]"
          />
          <h1 className="text-[24px] sm:text-[32px] font-thin tracking-wider text-center mt-3">
            Register to EMS
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-2 mt-6">
          {[
            { label: "Name", value: name, setter: setName, type: "text" },
            {
              label: "Company Name",
              value: Company,
              setter: setCompany,
              type: "text",
            },
            { label: "Email", value: email, setter: setEmail, type: "email" },
            {
              label: "Password",
              value: password,
              setter: setPassWord,
              type: "password",
            },
            {
              label: "Confirm Password",
              value: confirmpass,
              setter: setConfirmpass,
              type: "password",
            },
          ].map((input, idx) => (
            <div key={idx} className="w-full max-w-[400px]">
              <label className="block text-sm font-thin mb-1">
                {input.label}
              </label>
              <input
                type={input.type}
                value={input.value}
                onChange={(e) => input.setter(e.target.value)}
                className="w-full h-[36px] text-black p-2 rounded-md"
              />
            </div>
          ))}

          <div className="w-full max-w-[400px] mt-4">
            <button
              onClick={handleRegister}
              className="w-full h-9 bg-[#89C553] bg-opacity-60 rounded-md hover:bg-opacity-80"
            >
              Register
            </button>
          </div>
        </div>

        <Link
          className="flex items-center justify-center text-gray-500 mt-4 text-sm"
          to="/"
        >
          Go back to <span className="text-[#94e74c] ml-1">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Pages;
