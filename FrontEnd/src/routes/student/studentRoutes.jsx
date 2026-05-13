import React from "react";
import { Route } from "react-router-dom";
import StudentDashboard from "../../pages/student/dashboard";
import Sidebar from "../../layouts/sidebar";
import {
  BookOpen,
  ChartNoAxesCombined,
  ClipboardList,
  icons,
  LayoutDashboard,
  ListChecks,
  ListTodo,
  Settings,
  Users,
} from "lucide-react";
import LinkComponent from "../../components/LinkComponent/linkComponent";
import StudentFollowing from "../../features/student/following/studentFollowing";
import StudentToDoList from "../../features/student/tasks/studentToDoList";
import StudentCompletedTasks from "../../features/student/tasks/studentCompletedTasks";
const StudentRoutes = () => {
  const links = [
    {
      title: "DashBoard",
      icon: <LayoutDashboard />,
      path: "/student/dashboard",
    },
    {
      title: "professors",
      icon: <Users />,
      path: "/student/my-professors",
    },
    {
      title: "ToDo List",
      icon: <ListTodo />,
      path: "/student/ToDoList",
      notif : ""
    },
    {
      title: "Completed Tasks",
      icon: <ListChecks />,
      path: "/student/completed-tasks",
    },
    
    
  ];
  return (
    <>
      <Route element={<Sidebar links={<LinkComponent links={links} />} />}>
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/my-professors" element={<StudentFollowing />} />
        <Route path="/student/ToDoList" element={<StudentToDoList />} />
        <Route path="/student/completed-tasks" element={<StudentCompletedTasks />} />
      </Route>
    </>
  );
};

export default StudentRoutes;
