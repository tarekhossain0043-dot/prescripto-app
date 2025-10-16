import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
export default function Navbar() {
  const nevigate = useNavigate();
  const [token, setToken] = useState(true);
  return (
    <div>
      <div className="flex items-center justify-between py-4 text-sm border-b border-b-gray-200">
        <Link to={"/"}>
          <img
            className="w-44 cursor-pointer"
            src={assets.logo}
            alt="pres-logo"
          />
        </Link>
        <ul className="hidden md:flex items-start gap-5 font-medium">
          <NavLink to="/">
            <li className="py-1">HOME</li>
            <hr className="transition-all ease-in-out duration-300 border-none rounded-[30px] outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/all-doctors">
            <li className="py-1">ALL DOCTORS</li>
            <hr className="transition-all ease-in-out duration-300 border-none rounded-[30px] outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1">ABOUT</li>
            <hr className="transition-all ease-in-out duration-300 border-none rounded-[30px] outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">CONTACT</li>
            <hr className="transition-all ease-in-out duration-300 border-none rounded-[30px] outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-3">
          {token ? (
            <div className="flex items-center gap-3 cursor-pointer group relative">
              <img
                src={assets.profile_pic}
                className="w-10 h-10 bg-cover rounded-full cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-105"
                alt="login-user-pic"
              />
              <img
                src={assets.dropdown_icon}
                className="w-3 h-3 rounded-full cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-105"
                alt="dropdown-menu-pic"
              />
              {/* show/hide dropdown */}
              {/* <div className="absolute right-[0px] transform inline-block translate-y-[125px] transition-all ease-in-out duration-300 invisible opacity-0 group-hover:visible group-hover:translate-y-[115px] group-hover:opacity-[1]">
                <ul className="list-none w-[200px] h-full  bg-[#F8F8F8] px-[17px] rounded-[4px]">
                  <NavLink className="pt-[17px] px-[17px]" to="/my-profile">
                    <li className="text-[18px] font-[400] text-[#4B5563] transition-colors duration-300 ease-in-out hover:text-primary">
                      My Profile
                    </li>
                  </NavLink>
                  <NavLink className="px-[17px]" to="/my-appoinment">
                    <li className="text-[18px] font-[400] text-[#4B5563] transition-colors duration-300 ease-in-out hover:text-primary">
                      My Appoinment
                    </li>
                  </NavLink>
                  <NavLink className="pb-[17px] px-[17px]" to="/login">
                    <li className="text-[18px] font-[400] text-[#4B5563] transition-colors duration-300 ease-in-out hover:text-primary">
                      Logout
                    </li>
                  </NavLink>
                </ul>
              </div> */}
              <div className="absolute z-20 transform translate-y-[130px] right-0 opacity-0 invisible group-hover:translate-y-[105px] group-hover:opacity-[1] group-hover:visible transition-all duration-500 ease-in-out">
                <div className="bg-[#F8F8F8] min-w-[200px] px-[17px] py-[17px] transition-all ease-out duration-300 w-full">
                  <p
                    onClick={() => nevigate("/my-profile")}
                    className="text-[18px] font-[400] text-[#4B5563] cursor-pointer mb-[14px] hover:text-primary transition-all ease-in-out duration-300"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => nevigate("/my-appoinment")}
                    className="text-[18px] font-[400] text-[#4B5563] cursor-pointer mb-[14px] hover:text-primary transition-all ease-in-out duration-300"
                  >
                    My Appointments
                  </p>
                  <Link to="/login">
                    <p
                      onClick={() => setToken(false)}
                      className="text-[18px] font-[400] text-[#4B5563] cursor-pointer mb-0 hover:text-primary transition-all ease-in-out duration-300"
                    >
                      Logout
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => nevigate("/login")}
              className="bg-primary primary-btn inline-block leading-[43px] text-[18px] font-[400] text-white px-8 py-3 rounded-full hidden md:block"
            >
              Create account
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
