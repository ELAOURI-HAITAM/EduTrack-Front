import React from 'react';
import { 
  RadialBarChart, 
  RadialBar, 
  ResponsiveContainer, 
  PolarAngleAxis 
} from 'recharts';

const ProgressRadialChart = ({ completed, total, percentage }) => {
  const data = [
    {
      name: 'Progress',
      value: percentage || 0,
      fill: '#8b5cf6', 
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 self-start">
        Course Completion
      </h3>
      
      <div className="h-64 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            innerRadius="80%" 
            outerRadius="100%" 
            barSize={15} 
            data={data} 
            startAngle={90} 
            endAngle={450}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              minAngle={15}
              background={{ fill: '#f3f4f6' }} 
              clockWise
              dataKey="value"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-black text-gray-800 dark:text-white">
            {percentage}%
          </span>
          <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
            Completed
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-between w-full px-4 border-t pt-4 dark:border-gray-700">
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase font-bold">Total Tasks</p>
          <p className="text-lg font-bold text-gray-700 dark:text-gray-200">{total}</p>
        </div>
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase font-bold">Finished</p>
          <p className="text-lg font-bold text-purple-600">{completed}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressRadialChart;