import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const UsersDoughnutChart = ({ totalStudents = 0, totalProfessors = 0 }) => {
  const data = [
    { name: 'Students', value: totalStudents },
    { name: 'Professors', value: totalProfessors },
  ];
  const colors = ['#3b82f6', '#8b5cf6']; // أزرق وموڤ

  // دالة باش نكتبو النسبة المئوية
  const renderCustomLabel = ({ name, percent }) => {
    return `${name}: ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div 
      data-aos="fade-right" 
      data-aos-delay="300"
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800/50"
    >
      <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
        Users Distribution
      </h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={renderCustomLabel} // <-- التعديل لي زدنا هنا
              labelLine={false} // باش نحيدو داك الخط لي كيكون شاد فـ الكلمة
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

export default UsersDoughnutChart;