import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[80px] bg-[#C9CFCD66] rounded-[24px] px-[24px] flex items-center justify-between mt-[10px] mx-[80px]">
      <NavLink to="/Home" className="flex gap-2 items-center">
        <img src={logo} alt="Image of logo" />
        <h1 className="text-[#006644] font-semibold text-[25px]">Altripmart</h1>
      </NavLink>

      <div className="flex gap-[50px]">
        <NavLink
          to="/Explore"
          className={(e) => {
            return `text-[30px] ${e.isActive ? "text-red-900" : ""}`;
          }}
        >
          Explore
        </NavLink>
        <NavLink to="/About">About Altripmart</NavLink>
        <NavLink to="/Blog"> Blog</NavLink>
        <NavLink to="/Contact">Contact Us</NavLink>
      </div>

      <NavLink to="/Download">
        <button className="w-[200px] h-[48px] bg-[#006644] text-white rounded-[16px] hover:cursor-pointer">
          Download App
        </button>
      </NavLink>
    </div>
  );
};

export default Navbar;
