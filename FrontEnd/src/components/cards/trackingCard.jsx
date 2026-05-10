import React from "react";

const TrackingSummaryCard = ({ 
  title, 
  value, 
  icon, 
  colorTheme = "purple" 
}) => {
  const themes = {
    purple: "border-purple-500 bg-purple-100 text-purple-600",
    red: "border-red-500 bg-red-100 text-red-600",
    green: "border-green-500 bg-green-100 text-green-600",
  };

  const selectedTheme = themes[colorTheme] || themes.purple;
  const [borderColor, bgColor, textColor] = selectedTheme.split(" ");

  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-l-4 ${borderColor}`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${bgColor} ${textColor}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">{title}</p>
          <h2 className="text-2xl font-black text-gray-800 dark:text-white">{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default TrackingSummaryCard;