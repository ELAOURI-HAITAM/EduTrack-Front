import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Clock } from 'lucide-react';

const TimeAnalysisChart = ({ estimated, actual, difference }) => {
  const data = [
    { name: 'Estimated Time', minutes: estimated, fill: '#8b5cf6' },
    { name: 'Actual Time Spent', minutes: actual, fill: actual > estimated ? '#ef4444' : '#22c55e' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">Time Efficiency (Minutes)</h3>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${difference <= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {difference <= 0 ? "Ahead of Schedule" : "Behind Schedule"}
        </div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 40, right: 40 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" tick={{fontSize: 12, fill: '#6b7280'}} width={100} />
            <Tooltip cursor={{fill: '#f3f4f6'}} />
            <Bar dataKey="minutes" radius={[0, 4, 4, 0]} barSize={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-500 mt-4 italic text-center">
        Difference: {Math.abs(difference)} minutes {difference > 0 ? "slower" : "faster"} than estimated.
      </p>
    </div>
  );
};

export default TimeAnalysisChart;