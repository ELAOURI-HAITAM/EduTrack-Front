import React from "react";
import { Route } from "react-router-dom";
import ProfessorDashboard from "../../pages/professor/dashboard";
import {
  BookOpen,
  ChartNoAxesCombined,
  ClipboardList,
  icons,
  LayoutDashboard,
  Settings,
  Users,
  
} from "lucide-react";
import Sidebar from "../../layouts/sidebar";
import LinkComponent from "../../components/LinkComponent/linkComponent";
import ProfessorModules from "../../features/professor/modules/modulesList";
import ProfessorProfile from "../../features/professor/settings/profile";
import ProfessorFollowers from "../../features/professor/community/professorFollowers";
import ProfessorAssignments from "../../features/professor/assignments/assignmentsList";
import TaskDetails from "../../features/professor/assignments/taskDetails";
import StudentTrackingPage from "../../features/professor/tracking/studentTrackingPage";
const ProfessorRoutes = () => {
  const links = [
    {
      title: "DashBoard",
      icon: <LayoutDashboard />,
      path: "/professor/dashboard",
    },
    {
      title: "Modules",
      icon: <BookOpen />,
      path: "/professor/modules",
    },
    {
      title: "Assignments",
      icon: <ClipboardList />,
      path: "/professor/assignments",
    },
    {
      title: "Student Tracking",
      icon: <ChartNoAxesCombined />,
      path: "/professor/student-tracking",
    },
    {
      title: "My Followers",
      icon: <Users />,
      path: "/professor/my-community",
    },
    
  ];
  return (
    <>
      <Route
        element={
          <Sidebar links={<LinkComponent links={links} />} />
        }
      >
        <Route path="/professor/dashboard" element={<ProfessorDashboard />} />
        <Route path="/professor/modules" element={<ProfessorModules />} />
          <Route path="/professor/assignments" element={<ProfessorAssignments />} />
       <Route path="/professor/student-tracking" element={<StudentTrackingPage />} />
        <Route path="/professor/my-community" element={<ProfessorFollowers />} />
      </Route>
    </>
  );
};

export default ProfessorRoutes;
