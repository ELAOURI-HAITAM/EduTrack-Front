import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NotificationCount from "../notification/notificationCount";
import { useGetAllTasks } from "../../hooks/useCompletedTasks";

const LinkComponent = ({ links }) => {
  const location = useLocation();
  const { data: tasks } = useGetAllTasks();

  const totalTasks = tasks?.length || 0;

  const [unseenTasks, setUnseenTasks] = useState(0);

  useEffect(() => {
    const seenCount = Number(localStorage.getItem("seenTasksCount")) || 0;

    const newTasks = totalTasks - seenCount;

    setUnseenTasks(newTasks > 0 ? newTasks : 0);
  }, [totalTasks]);

  useEffect(() => {
    if (location.pathname === "/student/ToDoList") {
      localStorage.setItem("seenTasksCount", totalTasks);
      setUnseenTasks(0);
    }
  }, [location.pathname, totalTasks]);

  return (
    <ul className="space-y-3 font-medium">
      {links.map((linkItem, index) => {
        const isActive = location.pathname === linkItem.path;

        return (
          <li key={index}>
            <Link
              to={linkItem.path}
              className={`flex items-center p-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                isActive
                  ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {linkItem.path === "/student/ToDoList" &&
                unseenTasks > 0 && (
                  <NotificationCount notifCount={unseenTasks} />
                )}

              <div className="relative z-10 text-xl">
                {linkItem.icon}
              </div>

              <span className="relative z-10 ml-4 font-medium">
                {linkItem.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkComponent;