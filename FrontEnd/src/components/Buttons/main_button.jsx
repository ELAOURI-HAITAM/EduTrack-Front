import React, { useState, useEffect } from "react";
import Loader from "../loading/loader";

const MainButton = ({
  link,
  name,
  type,
  children,
  variant = "primary",
  full = false,
  onclick,
  className = "",
  loading = false,
  icon,
  borderColor = "border-blue-500",
  textColor = "text-blue-600",
  hoverBg = "hover:from-blue-500 hover:to-purple-600",
  hoverText = "hover:text-white",
  bgColor = "bg-gradient-to-r from-blue-500 to-purple-600",
  hoverBgColor = "hover:from-blue-600 hover:to-purple-700",
  primaryTextColor = "text-white",
  focusRingColor = "focus:ring-blue-300"
}) => {
  const baseClasses = `px-6 py-3 cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 ${full ? "w-full" : ""}`;
  const variants = {
    primary:
      `${bgColor} ${primaryTextColor} ${hoverBgColor} ${focusRingColor} shadow-lg hover:shadow-xl`,
    outline:
      `border-2 ${borderColor} ${textColor} hover:bg-gradient-to-r ${hoverBg} ${hoverText} focus:ring-blue-300`,
  };

  return (
    <a href={link}>

    <button
    
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onclick}
    >
      <div className="flex justify-center gap-10 items-center">
        {name}
        {icon}
        {children}
        {loading && <Loader/>}
      </div>
    </button>
    </a>
  );
};

export default MainButton;
