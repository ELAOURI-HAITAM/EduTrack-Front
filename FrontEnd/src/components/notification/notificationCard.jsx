import React from "react";
import { Bell } from "lucide-react";

const NotificationCard = ({ title, message }) => {
  return (
    <div className="bg-white  p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell size={18} className="text-gray-500" />
          <h4 className="font-semibold text-gray-800">
            {title}
          </h4>
        </div>
        
      </div>
      <p className="text-gray-600 text-sm pl-7">
        {message }
      </p>
    </div>
  );
};

export default NotificationCard;