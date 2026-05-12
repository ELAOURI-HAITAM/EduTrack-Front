import React from "react";
import { useGetStudentStats } from "../../hooks/useStats";
import StudentStatsCards from "../../features/student/dashboard/StudentStatsCards";
import ProgressRadialChart from "../../features/student/progressRadialChart";
import TimeAnalysisChart from "../../features/student/dashboard/TimeAnalysisChart";

const StudentDashboard = () => {
  const { data: student, isLoading, isError } = useGetStudentStats();

  const stats = student?.stats;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            My Learning Journey
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your progress, time efficiency, and subscriptions.
          </p>
        </div>

        {/* الكارطات الفوقانية */}
        <StudentStatsCards 
          profsCount={stats?.total_profs} 
          modulesCount={stats?.total_modules} 
          percentage={stats?.progress.percentage}
          loading={isLoading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* شارت ديال التقدم (Completed vs Total) */}
          <ProgressRadialChart 
            completed={stats?.progress.completed} 
            total={stats?.progress.total_resources} 
            percentage={stats?.progress.percentage}
          />

          {/* شارت ديال تحليل الوقت (Estimated vs Actual) */}
          <TimeAnalysisChart
            estimated={stats?.time_analysis.total_estimed} 
            actual={stats?.time_analysis.total_actual}
            difference={stats?.time_analysis.diffirence}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
