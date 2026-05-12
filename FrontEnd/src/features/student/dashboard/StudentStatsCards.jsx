import React from "react";
import NumberFlow from "@number-flow/react";
import { Users, BookOpen, Target } from "lucide-react";

const StudentStatsCards = ({ profsCount, modulesCount, percentage, loading }) => {
  const cards = [
    {
      title: "My Professors",
      value: profsCount,
      icon: <Users size={32} />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Available Modules",
      value: modulesCount,
      icon: <BookOpen size={32} />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Overall Progress",
      value: percentage,
      suffix: "%",
      icon: <Target size={32} />,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <div key={idx} className="relative overflow-hidden rounded-2xl bg-linear-to-br p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}>
          <div className={`absolute inset-0 bg-linear-to-br ${card.color}`}></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm text-white">
                {card.icon}
              </div>
            </div>
            <div className="text-white/80 text-sm font-medium mb-1">{card.title}</div>
            <div className="text-3xl font-bold text-white">
              <NumberFlow value={card.value || 0} />
              {card.suffix}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentStatsCards;
