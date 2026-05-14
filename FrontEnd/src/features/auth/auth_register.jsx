import React, { useState } from "react";
import REGISTER from "../../assets/auth/register.png";
import SimpleInput from "../../components/inputs/simpleInput";
import {
  CalendarDays,
  Frown,
  LockKeyhole,
  Mail,
  Phone,
  Smile,
  UserRound,
} from "lucide-react";
import MainButton from "../../components/Buttons/main_button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SimpleAlert from "../../components/alerts/simpleAlert";
import Swal from "sweetalert2";
import FormModal from "../../components/modal/formModal";
import OtpModal from "../../components/modal/otpModal";
import SimpleSelect from "../../components/selects/SimpleSelect";
import CreateEmail from "./createEmail";
const AuthRegister = () => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState([
    { value: "Male" },
    { value: "Female" },
  ]);
  const navigate = useNavigate();
  const closeOtpDialog = () => setShowOtpModal(false);
  const closeProfileDialog = () => setShowProfileModal(false);
  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8000/users/send-otp",
        {
          email,
        },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      console.log(response.data);
      setSuccess(response.data.message);
      Swal.fire({
        icon: "info",
        title: " Code Sent!",
        text: "An code with 6 digits has been sent to your email.",
      });
      setTimeout(() => {
        setShowOtpModal(true);
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.detail,
        });
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOtp = async () => {
    setError("");
    setLoading(true);
    try {
      const respponse = await axios.post(
        "http://localhost:8000/users/verify-otp",
        { email, otp },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      );
      console.log(respponse.data);
      setSuccess(respponse.data.message);
      setRole(respponse.data.role);
      setShowProfileModal(true);
      closeOtpDialog();
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail);
      }
    }
    finally{
        setLoading(false);
    }
  };


const handleProfile = async () => {
    setLoading(true);
    setError("");
    try {
      const payload = {
        role,
        password,
        first_name: firstName,
        last_name: lastName,
        birth_date: birthDate,
        gender: selectedGender,
        ...(role !== "Student" ? { phone_number: phoneNumber } : {}),
      };

      const response = await axios.post(
        "http://localhost:8000/users/complete-profile",
        payload,
        {
            withCredentials : true,
          headers: { "Content-Type": "application/json" },
        },
      );

      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Profile Completed",
        text: "Your profile has been saved successfully.",
      });
      closeProfileDialog();
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail || "Unable to complete profile.");
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
            <p className="text-3xl text-blue-600  font-bold">REGISTER PAGE</p>
          </div>
          <form
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="800"
            className="space-y-5"
            action=""
          >
            <SimpleInput
              color={"black"}
              value={email}
              label={"Email"}
              icon={<Mail />}
              type="email"
              placeholder="student@edu.ac.ma"
              onchange={(event) => setEmail(event.target.value)}
            />

            <div className="text-left text-blue-500 hover:text-blue-700 transition-colors duration-300">
              <Link to={"/login"}>Already have an account? Login</Link>
              <CreateEmail/>
            </div>
            <MainButton
              type={"submit"}
              name={"Register"}
              full={true}
              onclick={handleRegister}
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
            src={REGISTER}
            alt="Login"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <OtpModal
        title="Verify Code"
        show={showOtpModal}
        onClose={closeOtpDialog}
        onSubmit={handleOtp}
        otp={otp}
        setOtp={setOtp}
        loading={loading}
        action="Verify OTP"
      >
        {error && <SimpleAlert message={error} color={"failure"} />}
        <p className="text-center text-gray-600">
          Enter the 6-digit code sent to {email}
        </p>
      </OtpModal>
      <FormModal
        onSubmit={handleProfile}
        title={"Complete Your Profile"}
        show={showProfileModal}
        onClose={closeProfileDialog}
        action="Submit"
        loading={loading}
      >
        {role == "Student" ? (
          <>
            <div className="flex gap-4">
              <div className="flex-1">
                <SimpleInput
                  label={"First Name"}
                  icon={<UserRound />}
                  placeholder="JACK"
                  value={firstName}
                  onchange={(event) => setFirstName(event.target.value)}
                  className="max-w-none"
                />
              </div>
              <div className="flex-1">
                <SimpleInput
                  label={"Last Name"}
                  icon={<UserRound />}
                  placeholder="DOE"
                  value={lastName}
                  onchange={(event) => setLastName(event.target.value)}
                  className="max-w-none"
                />
              </div>
            </div>
            <SimpleInput
              label={"Birth Date"}
              type="date"
              icon={<CalendarDays />}
              value={birthDate}
              onchange={(event) => setBirthDate(event.target.value)}
            />
            <SimpleInput
              label={"Password"}
              type="password"
              icon={<LockKeyhole />}
              value={password}
              onchange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
            />
            <SimpleSelect
              label={"Gender"}
              options={gender}
              value={selectedGender}
              onchange={(event) => setSelectedGender(event.target.value)}
            />
          </>
        ) : (
          <>
            <div className="flex gap-4">
              <div className="flex-1">
                <SimpleInput
                  label={"First Name"}
                  icon={<UserRound />}
                  placeholder="JACK"
                  value={firstName}
                  onchange={(event) => setFirstName(event.target.value)}
                  className="max-w-none"
                />
              </div>
              <div className="flex-1">
                <SimpleInput
                  label={"Last Name"}
                  icon={<UserRound />}
                  placeholder="DOE"
                  value={lastName}
                  onchange={(event) => setLastName(event.target.value)}
                  className="max-w-none"
                />
              </div>
            </div>
            <SimpleInput
              label={"Birth Date"}
              type="date"
              icon={<CalendarDays />}
              value={birthDate}
              onchange={(event) => setBirthDate(event.target.value)}
            />
            <SimpleInput
              label={"Password"}
              type="password"
              icon={<LockKeyhole />}
              value={password}
              onchange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
            />
            <SimpleSelect
              label={"Gender"}
              options={gender}
              value={selectedGender}
              onchange={(event) => setSelectedGender(event.target.value)}
            />
            <SimpleInput
              type="tel"
              label={"Phone Number"}
              icon={<Phone />}
              placeholder="123-456-7890"
              value={phoneNumber}
              onchange={(event) => setPhoneNumber(event.target.value)}
            />
          </>
        )}
      </FormModal>
    </div>
  );
};
export default AuthRegister;
