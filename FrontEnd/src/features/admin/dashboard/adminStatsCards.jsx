import React from "react";
import NumberFlow from "@number-flow/react";
import Loader from "../../../components/loading/loader"; 
import { Users, BookOpen, Clock, GraduationCap, Briefcase } from "lucide-react";

const AdminStatsCards = ({
  totalUsers = 0,
  totalStudents = 0,
  totalProfessors = 0,
  totalModules = 0,
  pendingAccounts = 0,
  loading,
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 transition-all duration-700 ease-out md:grid-cols-2 xl:grid-cols-3">
      
      {/* Card 1: Total Users (Blue Gradient) */}
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" className="group">
        <div className="relative transform overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                <Users size={32} className="text-white" />
              </div>
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110"></div>
            </div>
            
            <div className="mb-1 text-sm font-medium text-white/80">Total Users</div>
            {/* التعديل هنا: درناهم كاملين فـ سطر واحد */}
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-white">
                <NumberFlow value={totalUsers} />
              </div>
              
              {/* الخط الفاصل بين الرقم الكبير والديطاي */}
              <div className="flex items-center gap-2 border-l border-white/30 pl-3">
                <div className="flex items-center gap-1 text-sm font-medium text-white/90" title="Students">
                  <GraduationCap size={16} />
                  <span><NumberFlow value={totalStudents} /></span>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-white/90" title="Professors">
                  <Briefcase size={16} />
                  <span><NumberFlow value={totalProfessors} /></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Card 2: Total Modules (Purple Gradient) */}
      <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="800" className="group">
        <div className="relative transform overflow-hidden rounded-2xl bg-linear-to-br from-purple-500 to-purple-600 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                <BookOpen size={32} className="text-white" />
              </div>
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110"></div>
            </div>
            <div className="mb-1 text-sm font-medium text-white/80">Total Modules</div>
            <div className="text-3xl font-bold text-white">
              <NumberFlow value={totalModules} />
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Pending Accounts (Orange Gradient) */}
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" className="group md:col-span-2 xl:col-span-1">
        <div className="relative transform overflow-hidden rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                <Clock size={32} className="text-white" />
              </div>
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110"></div>
            </div>
            <div className="mb-1 text-sm font-medium text-white/80">Pending Accounts</div>
            <div className="text-3xl font-bold text-white">
              <NumberFlow value={pendingAccounts} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminStatsCards;