import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/eduTrack1.png"

import AuthRegister from "../../features/auth/auth_register";
const Register = () => {
  return (
    <>
      <div className="bg-linear-to-r from-blue-600 to-purple-600 h-screen">
        <div className="bg-white h-14 rounded-r-lg flex items-center gap-3 px-6 shadow-sm">
          <Link to="/" className="flex  items-center gap-3">
            <img  src={LOGO} alt="EduTrack logo" className="w-16 h-16 " />
            <span className="text-xl font-bold text-blue-600">EduTrack</span>
          </Link>
        </div>
        <AuthRegister />
      </div>
    </>
  );
};

export default Register;
