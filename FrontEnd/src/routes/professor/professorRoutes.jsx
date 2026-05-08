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
      title: "My Community",
      icon: <Users />,
      path: "/professor/my-community",
    },
    {
      title: "Profile",
      icon: <Settings />,
      path: "/professor/profile",
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
      </Route>
    </>
  );
};

export default ProfessorRoutes;
