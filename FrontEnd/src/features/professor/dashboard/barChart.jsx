import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const DifficultyBarChart = ({ difficultyData }) => {
  const data = [
    { 
      name: 'Easy', 
      percentage: difficultyData?.percentages?.Easy || 0,
      count: difficultyData?.counts?.Easy || 0,
      fill: '#22c55e'
    },
    { 
      name: 'Medium', 
      percentage: difficultyData?.percentages?.Medium || 0,
      count: difficultyData?.counts?.Medium || 0,
      fill: '#f59e0b' 
    },
    { 
      name: 'Hard', 
      percentage: difficultyData?.percentages?.Hard || 0,
      count: difficultyData?.counts?.Hard || 0,
      fill: '#ef4444' 
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Tasks Difficulty (%)</h3>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
            <YAxis tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} domain={[0, 100]} />
            <Tooltip
              cursor={{fill: 'transparent'}}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              formatter={(value, name, props) => [
                `${value}% (${props.payload.count} tasks)`, 
                'Percentage'
              ]}
            />
            <Bar dataKey="percentage" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DifficultyBarChart;