import React, { useEffect, useState } from "react";
import { PiStudent } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { LuUserCog } from "react-icons/lu";
import NumberFlow from "@number-flow/react";
import Loader from "../../../components/loading/loader";
import { BookOpen, Bug, ClipboardList, UserCheck } from "lucide-react";


const CountInfos = ({
  modulesCount,
  subsCount,
  difficultyCount,
  loading,
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Loader />
      </div>
    );
  }

  return (
    <div  className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  transition-all duration-700 ease-out`}>
      <div data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800" className="group">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-500 to-purple-600 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <BookOpen size={32} className="text-white" />
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-full absolute -top-4 -right-4 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <div className="text-white/80 text-sm font-medium mb-1">Total Modules</div>
            <div className="text-3xl font-bold text-white">
              <NumberFlow value={modulesCount} />
            </div>
          </div>
        </div>
      </div>


      <div data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800" className="group">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <UserCheck  size={32} className="text-white" />
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-full absolute -top-4 -right-4 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <div className="text-white/80 text-sm font-medium mb-1">Subscribers</div>
            <div className="text-3xl font-bold text-white">
              <NumberFlow value={subsCount} />
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800" className="group md:col-span-2 xl:col-span-1">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <ClipboardList  size={32} className="text-white" />
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-full absolute -top-4 -right-4 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <div className="text-white/80 text-sm font-medium mb-1">Tasks</div>
            <div className="text-3xl font-bold text-white">
              <NumberFlow value={difficultyCount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountInfos;