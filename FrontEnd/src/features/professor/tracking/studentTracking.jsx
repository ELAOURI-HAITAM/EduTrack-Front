import React from "react";
import { Clock, MessageSquare, ChevronRight } from "lucide-react";

const StudentTrackingRow = ({
  student_name,
  created_at,
  resource_title,
  difficulty,
  actual_minutes,
  estimated_minutes,
  comment,
}) => {
  const isOvertime = actual_minutes > estimated_minutes;

  return (
    <div className="border-b dark:border-gray-700 last:border-0 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 w-64">
          <div className="h-10 w-10 rounded-full bg-linear-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-sm font-bold">
            {student_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white leading-none">{student_name}</h4>
            <span className="text-[11px] text-gray-400 font-medium">
              {new Date(created_at).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm font-bold text-gray-700 dark:text-gray-200">{resource_title}</p>
          <div className="flex items-center gap-4 mt-1">
            <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${
              difficulty === 'Hard' ? 'bg-red-100 text-red-600' : 
              difficulty === 'Medium' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
            }`}>
              {difficulty}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock size={12} />
              <span className={isOvertime ? "text-red-500 font-bold" : ""}>
                {actual_minutes} min
              </span>
              <span className="text-gray-300">/ est. {estimated_minutes}m</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg relative">
          {comment ? (
            <div className="flex gap-2">
              <MessageSquare size={14} className="text-purple-400 shrink-0 mt-1" />
              <p className="text-xs text-gray-600 dark:text-gray-300 italic leading-relaxed">
                "{comment}"
              </p>
            </div>
          ) : (
            <span className="text-xs text-gray-300 italic tracking-widest">NO FEEDBACK</span>
          )}
        </div>

        <div className="hidden lg:block text-gray-200 group-hover:text-purple-400 transition-colors">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default StudentTrackingRow;