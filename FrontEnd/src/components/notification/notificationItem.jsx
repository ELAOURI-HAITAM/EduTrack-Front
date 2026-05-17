import React from "react";
import { formatDistanceToNowStrict, isValid, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

const NotificationItem = ({
  title,
  message,
  createdAt,
  isRead,
  onClick,
  link,
}) => {
  const navigate = useNavigate();

  const getTimeAgo = (value) => {
    if (!value) return "";

    const parsedDate = typeof value === "string" ? parseISO(value) : value;
    const date = isValid(parsedDate) ? parsedDate : new Date(value);

    if (!isValid(date)) return "";

    const secondsAgo = Math.floor((Date.now() - date.getTime()) / 1000);

    if (secondsAgo < 60) return "just now";

    return formatDistanceToNowStrict(date, { addSuffix: true });
  };



  return (
    <div
    onClick={onClick}
    className={`p-4 border-b last:border-0 cursor-pointer transition-colors ${
      isRead
        ? "bg-white opacity-70"
        : "bg-purple-50 hover:bg-purple-100"
    }`}
  >
      <div className="flex justify-between items-start">
        <h4
          className={`text-sm font-bold ${
            isRead ? "text-gray-600" : "text-purple-900"
          }`}
        >
          {title}
        </h4>

        {!isRead && (
          <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
        )}
      </div>

      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
        {message}
      </p>

      <span className="text-[10px] text-gray-400 mt-2 block">
        {getTimeAgo(createdAt)}
      </span>
    </div>
  );
};

export default NotificationItem;