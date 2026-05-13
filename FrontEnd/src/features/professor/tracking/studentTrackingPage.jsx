import React, { useState } from "react";
import { useGetStudentTracking } from "../../../hooks/useProfessors"; 
import { Users, AlertTriangle, Search, Filter } from "lucide-react";
import TrackingSummaryCard from "../../../components/cards/trackingCard";
import StudentTrackingRow from "./studentTracking";

const StudentTrackingPage = () => {
  const { data, isLoading, isError } = useGetStudentTracking();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [filtredGender , setFiltredGender] = useState("All");
  const [filtering , setFiltering] = useState();
  if (isLoading) return <div className="p-10 text-center font-bold">Loading Tracking Data...</div>;
  if (isError) return <div className="p-10 text-center text-red-500 font-bold">Error loading data.</div>;

  const { summary, tracking } = data;

  const filteredData = tracking?.filter((item) => {
    const matchesSearch = item.student_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.resource_title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === "All" ? true : item.difficulty === filterDifficulty;
    const matchesGender = filtredGender == "All" ? true : item.student_gender == filtredGender
    return matchesSearch && matchesDifficulty && matchesGender;
  });

  return (
    <div  className="p-6 bg-gray-50 min-h-screen dark:bg-gray-900">
      
      <div data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <TrackingSummaryCard 
          title="Total Submissions" 
          value={summary.total_submissions} 
          icon={<Users size={24} />} 
          colorTheme="purple" 
        />
        <TrackingSummaryCard 
          title="Struggling Students" 
          value={summary.struggling_students} 
          icon={<AlertTriangle size={24} />} 
          colorTheme={summary.struggling_students > 0 ? "red" : "green"} 
        />
      </div>

      <div data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800" className="bg-white dark:bg-gray-800 p-4 rounded-t-xl border-b flex flex-wrap gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search by student or lesson..."
            className="w-full text-white pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div  className="flex items-center gap-2">
          <Filter size={18} className="text-gray-400" />
          <select onChange={(event) => setFiltering(event.target.value)} className="border text-white rounded-lg p-2 outline-none dark:bg-gray-700 dark:border-gray-600" name="" id="">
            <option value="All">Filter By</option>
            <option value="gender">Filter By Gender</option>
            <option value="difficulty">Filter By Difficulty</option>
          </select>
          {filtering == "gender" ? (<select 
            className="border rounded-lg text-white p-2 outline-none dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => setFiltredGender(e.target.value)}
          >
            <option value="All">Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>) : (<select 
            className="border text-white rounded-lg p-2 outline-none dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => setFilterDifficulty(e.target.value)}
          >
            <option value="All">All Difficulties</option>
            <option value="Hard">Hard Only</option>
            <option value="Medium">Medium Only</option>
            <option value="Easy">Easy Only</option>
          </select>)}
         
        </div>
      </div>

      <div data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800" className="bg-white dark:bg-gray-800 rounded-b-xl shadow-sm overflow-hidden">
        {filteredData?.length > 0 ? (
          filteredData.map((item) => (
            <StudentTrackingRow 
              key={item.id}
              student_name={item.student_name}
              created_at={item.completed_at}
              resource_title={item.resource_title}
              difficulty={item.difficulty}
              actual_minutes={item.actual_minutes}
              estimated_minutes={item.estimated_minutes}
              comment={item.comment}
              gender={item.student_gender}
            />
          ))
        ) : (
          <div className="p-20 text-center text-gray-400">
            No tracking data found for this filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentTrackingPage;