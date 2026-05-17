import React from "react";
import Sidebar from "../../layouts/sidebar";
import CountInfos from "../../features/professor/dashboard/countInfos";
import { useGetProfessorStats } from "../../hooks/useStats";
import GenderPieChart from "../../features/professor/dashboard/pieChart";
import DifficultyBarChart from "../../features/professor/dashboard/barChart";
import { UseUser } from "../../hooks/useUser";

const ProfessorDashboard = () => {
  const {data : professor , isLoading , isError} = useGetProfessorStats();
  const {data : user} = UseUser();
  console.log(user);
  
  
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-fadeIn">
          <h1 data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800"   className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Welcom Back Pr.{user?.last_name} {user?.first_name}
          </h1>
          <p data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800" className="text-gray-600 dark:text-gray-300">
            Here's what's happening with your organization today.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <CountInfos
          modulesCount={professor?.stats.total_modules}
          subsCount={professor?.stats.total_subs}
          difficultyCount={professor?.stats.total_tasks}
        />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
        <GenderPieChart males={professor?.stats.total_genders.males} females={professor?.stats.total_genders.females}/>

          </div>
          <div className="flex-1">
        <DifficultyBarChart difficultyData={professor?.difficulty_analysis}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
