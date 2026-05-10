const StatsCard = ({ title, count, icon, color, gradient, delay = 0, to = "" }) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${gradient} p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 transform`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 transition-all duration-500 group-hover:scale-150"></div>
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className={`rounded-xl p-3 ${color} shadow-lg`}>
            {icon}
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white mb-1">
              {count}
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wide font-medium">
              {title}
            </div>
          </div>
        </div>
        
        {to && (
          <div className="mt-4 pt-4 border-t border-white/20">
            <a 
              href={to}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center"
            >
              View Details →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default StatsCard;