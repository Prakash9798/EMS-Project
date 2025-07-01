import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogin } from "./Dashboard/components/LoginContext";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useLogin();

  const getUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://682d7aa64fae188947561cb8.mockapi.io/users`
      );
      const data = await res.json();
      setUsers(data);

      const credentials = data.find(
        (user) => user.email === email && user.password === password
      );

      if (credentials) {
        login(credentials);
        toast.success("Login successful");
        navigate("/dashboardpage");
        setEmail("");
        setPassWord("");
      } else {
        setTimeout(() => {
          toast.error("Invalid credentials");
        }, 1000);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center bg-[#492A5F] min-h-screen w-full px-3 pt-3 sm:pt-2">
      <div className="w-full max-w-[600px] bg-[#4B2B50] text-white relative p-5 sm:p-2 rounded-md">
        <div className="flex flex-col items-center justify-center p-5">
          <img
            className="w-[60px] sm:w-[80px]"
            src="https://cdn.guavatrees.net/gt-ems/media/client_89a05799-d3d4-4ac1-88bf-95878905e129/logo/77c79461-fa13-49c0-be6e-55e1ed14de22"
            alt="Logo"
          />
          <h1 className="mt-4 text-[24px] sm:text-[32px] lg:text-[40px] font-thin tracking-wider text-center">
            Sign in to Guava <br /> Trees Softech
          </h1>
          <p className="text-[#D6DBE7] mt-4 tracking-widest text-center">
            Welcome, please sign-in
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-3">
          <div className="mb-4 w-full max-w-[400px]">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[36px] text-black p-2 rounded-md"
            />
          </div>
          <div className="mb-4 w-full max-w-[400px]">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              className="w-full h-[36px] text-black p-2 rounded-md"
            />
          </div>

          <div className="flex items-center gap-2 w-full max-w-[400px] mx-auto mb-2 px-1">
            <input type="checkbox" className="w-5 h-5 text-purple-600" />
            <label htmlFor="remember" className="text-sm text-white">
              Remember me
            </label>
          </div>
        </div>

        <div className="login-btn flex flex-col items-center justify-center px-3 gap-3 mt-2">
          {loading ? (
            <button
              disabled
              className="w-full max-w-[430px] h-9 bg-[#89C553] flex items-center justify-center gap-2"
            >
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Logging in...
            </button>
          ) : (
            <button
              onClick={getUser}
              className="bg-[#99CE6B] w-full max-w-[430px] h-9"
            >
              Login
            </button>
          )}

          <button className="w-full max-w-[430px] h-9 bg-[#89C553]">
            Login with OTP
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[430px] mx-auto text-sm mt-4">
          <Link to="/pages">Register?</Link>
          <Link to="/">Forget Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
