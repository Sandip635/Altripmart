import React from "react";
import logo from "../assets/logo.png";

const header = () => {
  return (
    <div className="h-[80px] bg-[#C9CFCD66] rounded-[24px] px-[24px] flex items-center justify-between mt-[10px] mx-[80px]">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="Image of logo" />
        <h1 className="text-[#006644] font-semibold text-[25px]">Altripmart</h1>
      </div>

      <div className="flex gap-[50px]">
        <span className="text-[#006644]">Explore</span>
        <span>About Altripmart</span>
        <span>Blog</span>
        <span>Contact Us</span>
      </div>

      <button className="w-[200px] h-[48px] bg-[#006644] text-white rounded-[16px] hover:cursor-pointer">
        Download App
      </button>
    </div>
  );
};

export default header;
