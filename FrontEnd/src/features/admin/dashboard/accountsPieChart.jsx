import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const AccountsPieChart = ({ activeAccounts = 0, pendingAccounts = 0 }) => {
  const data = [
    { name: 'Active', value: activeAccounts },
    { name: 'Pending', value: pendingAccounts },
  ];
  const colors = ['#22c55e', '#f97316']; // خضر وليموني

  // دالة ديال النسبة المئوية
  const renderCustomLabel = ({ name, percent }) => {
    return `${name}: ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div 
      data-aos="fade-left" 
      data-aos-delay="400"
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800/50"
    >
      <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
        Account Status
      </h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={80}
              dataKey="value"
              label={renderCustomLabel} // <-- التعديل لي زدنا
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AccountsPieChart;