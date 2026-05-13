import React from "react";
import {
  FileText,
  Clock,
  CheckCircle,
  ExternalLink,
  BookOpen,
  PenTool,
  CircleCheckBig,
} from "lucide-react";
import MainButton from "../Buttons/main_button";
const TodoTaskCard = ({
  task_id,
  module_title = "",
  task_title = "",
  estimated_minutes = "",
  task_type = "",
  icon = "",
  ResourceButton,
  MarkAsDoneButton,
}) => {
  return (
    <div
      data-aos="zoom-in"
      className="block mt-2 rounded-lg  border border-purple-400 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-purple-200 dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700 rounded-md">
          {module_title}
        </span>
        <div className="text-gray-400">{icon}</div>
      </div>

      <h3 className="text-lg mt-2 font-bold text-gray-800 dark:text-white leading-tight">
        {task_title}
      </h3>

      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{estimated_minutes} min</span>
        </div>
        <div className="flex items-center gap-1 border-l pl-4">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          <span>{task_type}</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        {ResourceButton}
        {MarkAsDoneButton}
      </div>
    </div>
  );
};

export default TodoTaskCard;
