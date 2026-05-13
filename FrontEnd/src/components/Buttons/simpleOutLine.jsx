import React from "react";

const SimpleOutLineButton = ({
  name,
  disabled,
  borderColor = "border-red-500",
  textColor = "text-red-700",
  hoverBg = "hover:bg-red-600",
  hoverText = "hover:text-white",
  icon,
  full = false,
  onclick,
}) => {
  return (
    <button
    disabled={disabled}
      onClick={onclick}
      type="button"
      className={`
        me-2 mb-2 cursor-pointer duration-700
        ${full ? "w-full" : ""}
        rounded-lg border px-5 py-2.5 text-center text-sm font-medium
        ${borderColor}
        ${textColor}
        ${hoverBg}
        ${hoverText}
      `}
    >
      <div className="flex justify-center items-center gap-5">
        {name}
        {icon}
      </div>
    </button>
  );
};

export default SimpleOutLineButton;
