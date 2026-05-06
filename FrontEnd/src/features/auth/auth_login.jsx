import React, { useState } from "react";
import LOGIN from "../../assets/auth/login.png";
import SimpleInput from "../../components/inputs/simpleInput";
import { Frown, LockKeyhole, Mail, Smile } from "lucide-react";
import MainButton from "../../components/Buttons/main_button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SimpleAlert from "../../components/alerts/simpleAlert";
import ForgetPassword from "./forgetPassword";
import OtpVerification from "../../components/modal/otpModal";
import { useQueryClient } from "@tanstack/react-query";

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8000/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      );
      console.log(response.data);
      setSuccess(response.data.message || "Login Successful");
      const role = response.data.role;
      setTimeout(() => {
        if (role == "Student") {
          navigate("/student/dashboard");
        } else if (role == "Professor") {
          navigate("/professor/dashboard");
        }
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800"
      className="bg-white rounded-xl shadow-lg mx-auto mt-10 w-full max-w-6xl px-4 py-6 sm:px-8 sm:py-10"
    >
      <div className="flex flex-col gap-10 sm:flex-row sm:items-center">
        <div className="w-full sm:w-1/2">
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="800"
            className="text-center sm:text-left mb-8"
          >
            <p className="text-5xl font-light">WELCOME BACK</p>
            <p className="text-3xl text-blue-600  font-bold">LOGIN PAGE</p>
          </div>
          <form
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="800"
            className="space-y-5"
            action=""
          >
            {error && (
              <SimpleAlert message={error} color={"failure"} icon={Frown} />
            )}
            {success && (
              <SimpleAlert message={success} color={"success"} icon={Smile} />
            )}
            <SimpleInput
              color={"black"}
              value={email}
              label={"Email"}
              icon={<Mail />}
              type="email"
              placeholder="student@edu.ac.ma"
              onchange={(event) => setEmail(event.target.value)}
            />
            <SimpleInput
              color={"black"}
              value={password}
              type={"password"}
              label={"Password"}
              placeholder="* * * * * "
              icon={<LockKeyhole />}
              onchange={(event) => setPassword(event.target.value)}
            />
            <div className="text-left">
              <ForgetPassword modal_id={"reset-password"} />
            </div>
            <MainButton
              type={"submit"}
              name={"Login"}
              full={true}
              onclick={handleLogin}
              loading={loading}
            />
          </form>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="800"
          className="w-full sm:w-1/2 flex justify-center items-center"
        >
          <img
            src={LOGIN}
            alt="Login"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <OtpVerification />
    </div>
  );
};
export default AuthLogin;
