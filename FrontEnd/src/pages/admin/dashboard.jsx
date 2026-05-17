import React from "react";
import Sidebar from "../../layouts/sidebar";
import { useGetAdminStats, useGetProfessorStats } from "../../hooks/useStats";
import AdminStatsCards from "../../features/admin/dashboard/adminStatsCards";
import UsersDoughnutChart from "../../features/admin/dashboard/usersDoughnutChart";
import AccountsPieChart from "../../features/admin/dashboard/accountsPieChart";

const AdminDashboard = () => {
  const { data: admin, isLoading, isError } = useGetAdminStats();
  console.log(admin);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome back! Here's what's happening with your organization today.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <AdminStatsCards
          totalModules={admin?.content.total_modules}
          totalUsers={admin?.users.total_users}
          pendingAccounts={admin?.account_status.pending}
          totalStudents={admin?.users.total_students}
          totalProfessors={admin?.users.total_professors}
        />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <UsersDoughnutChart
              totalStudents={admin?.users.total_students}
              totalProfessors={admin?.users.total_professors}
            />
          </div>
          <div className="flex-1">
            <AccountsPieChart pendingAccounts={admin?.account_status.pending} activeAccounts={admin?.account_status.active}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
