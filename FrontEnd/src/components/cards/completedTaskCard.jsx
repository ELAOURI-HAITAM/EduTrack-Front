import React from "react";
import { 
  Clock, 
  CheckCircle2, 
  BarChart3, 
  MessageSquare, 
  Calendar,
  ExternalLink, 
  CalendarDays
} from "lucide-react";

const CompletedTaskCard = ({
  module_title = "",
  task_title = "",
  actual_minutes = 0,
  difficulty = "",
  comment = "",
  completed_at = "", 
  ResourceButton 
}) => {
  
  const difficultyColor = {
    Easy: "text-green-600 bg-green-50 border-green-100",
    Medium: "text-amber-600 bg-amber-50 border-amber-100",
    Hard: "text-red-600 bg-red-50 border-red-100",
  }[difficulty] || "text-gray-600 bg-gray-50";

  return (
    <div 
      data-aos="fade-up"
      className="block mt-2 rounded-lg border border-green-400 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-green-100 dark:bg-gray-800"
    >
      <div className="flex justify-between items-start mb-3">
        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 rounded-md">
          {module_title}
        </span>
        <div className="text-green-500">
          <CheckCircle2 size={22} />
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
        {task_title}
      </h3>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Clock size={16} className="text-green-500" />
          <span className="font-medium">{actual_minutes} min spent</span>
        </div>
        
        <div className={`flex items-center gap-2 px-2 py-1 rounded-md border text-xs font-bold ${difficultyColor}`}>
          <BarChart3 size={14} />
          {difficulty}
        </div>
        <div className="flex items-center gap-5">
        <CalendarDays color="green"/>
          <span className="font-medium text-white">{completed_at.slice(0,10)}</span>

        </div>
      </div>

      {comment && (
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg italic text-sm text-gray-600 dark:text-gray-300 flex gap-2">
          <MessageSquare size={16} className="shrink-0 mt-1 opacity-50" />
          <p>"{comment}"</p>
        </div>
      )}

      <div className="mt-6">
        {ResourceButton}
      </div>
    </div>
  );
};

export default CompletedTaskCard;