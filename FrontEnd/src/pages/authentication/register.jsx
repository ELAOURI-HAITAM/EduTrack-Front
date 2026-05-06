import React from "react";
import { Link } from "react-router-dom";
import AuthRegister from "../../features/auth/auth_register";
const Register = () => {
  return (
    <>
      <div className="bg-linear-to-r from-blue-600 to-purple-600 h-screen">
        <div className=" bg-white h-14 rounded-r-lg">
          <Link to={"/"}>
            <p className="pl-50 pt-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-xl font-bold ">
              EduTrack
            </p>
          </Link>
        </div>
        <AuthRegister/>
      </div>
    </>
  );
};

export default Register;
