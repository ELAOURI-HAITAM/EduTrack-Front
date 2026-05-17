import { LayoutDashboard, SendHorizontal } from "lucide-react";
import React from "react";
import { FaUsers } from "react-icons/fa";
import UsersList from "../../features/admin/users/usersList";
import AdminDashboard from "../../pages/admin/dashboard";
import { Route } from "react-router-dom";
import Sidebar from "../../layouts/sidebar";

import LinkComponent from "../../components/LinkComponent/linkComponent";
const AdminRoutes = () => {
  const links = [
    {
      title: "DashBoard",
      icon: <LayoutDashboard />,
      path: "/admin/dashboard",
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/admin/users",
    },
    
  ];
  return (
    <>
      <Route element={<Sidebar links={<LinkComponent  links={links} />} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UsersList />} />
       
      </Route>
    </>
  );
};

export default AdminRoutes;
