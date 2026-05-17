import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/main_pages/home";
import Login from "../pages/authentication/login";
import MainPagesRoutes from "./main/mainPagesRoutes";
import AuthRoutes from "./auth/authRoutes";
import StudentRoutes from "./student/studentRoutes";
import ProfessorRoutes from "./professor/professorRoutes";
import ProtectedRoute from "./Protected/protected_route";
import Unauthorized from "../pages/page-not-found/unauthorized";
import AdminRoutes from "./admin/adminRoutes";
const AllRoutes = () => {
  return (
    <Routes>
      {MainPagesRoutes()}
      {AuthRoutes()}
      <Route element={<ProtectedRoute allowedRoles={["Student"]} />}>
        {StudentRoutes()}
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["Professor"]} />}>
        {ProfessorRoutes()}
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["Admin"]}/>}>
        {AdminRoutes()}
      </Route>
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
};

export default AllRoutes;
