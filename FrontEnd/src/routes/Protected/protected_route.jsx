import {Navigate, Outlet } from "react-router-dom";
import { UseUser } from "../../hooks/useUser";
import Loader from "../../components/loading/loader";
const ProtectedRoute = ({allowedRoles }) => {
  const { data: user, isLoading , isError } = UseUser();
  if (isLoading) return <Loader />;
  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet/>;
};
export default ProtectedRoute;
