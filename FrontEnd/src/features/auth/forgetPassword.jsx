import React, { useState } from "react";
import FormModal from "../../components/modal/formModal";
import OtpModal from "../../components/modal/otpModal";
import SimpleInput from "../../components/inputs/simpleInput";
import axios from "axios";
import SimpleAlert from "../../components/alerts/simpleAlert";
import Swal from "sweetalert2";
import { LockIcon } from "lucide-react";

const ForgetPassword = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const openEmailDialog = () => setShowEmailModal(true);
  const closeEmailDialog = () => setShowEmailModal(false);
  const closeOtpDialog = () => setShowOtpModal(false);
  const closePasswordDialog = () => setShowPasswordModal(false);

  const handleSendOtp = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/users/forget-password",
        { email },
        {
          
          headers: { "Content-Type": "application/json"},
        },
      );
      console.log(response.data);
      setSuccess(response.data.message);
      setTimeout(() => {
        closeEmailDialog();
        setShowOtpModal(true);
        setSuccess("");
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail);
        console.log(error.response.data.detail);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/users/verify-otp",
        { email, otp },
        {
          withCredentials : true,
          headers: { "Content-Type": "application/json" },
        },
      );
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "OTP Verified!",
        text: "Your OTP has been verified successfully.",
      });
      closeOtpDialog();
      setEmail("");
      setOtp("");

      setTimeout(() => {
        setShowPasswordModal(true);
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail);
        console.log(error.response.data.detail);
      } else {
        setError("Invalid or expired OTP. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  const handleResetPassword = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/users/change-password",
        { new_password : password, confirm_password : confirmPassword },
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Password Updated!",
        text: "Your password has been updated successfully.",
      });
      closePasswordDialog();
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail);
        console.log(error.response.data.detail);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={openEmailDialog}
        className="text-blue-600 cursor-pointer underline hover:text-blue-950 duration-1000"
      >
        Forget Password ?
      </button>

      <FormModal
        title="Reset Your Password"
        show={showEmailModal}
        onClose={closeEmailDialog}
        onSubmit={handleSendOtp}
        action="Send Code"
        loading={loading}
      >
        {error && <SimpleAlert message={error} color={"failure"} />}
        {success && <SimpleAlert message={success} color={"success"} />}
        <SimpleInput
          label="Your Email"
          type="email"
          value={email}
          onchange={(event) => setEmail(event.target.value)}
          placeholder="student@edu.ac.ma"
        />
      </FormModal>

      <OtpModal
        title="Verify OTP"
        show={showOtpModal}
        onClose={closeOtpDialog}
        onSubmit={handleVerifyOtp}
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
        title={"Change Your Password"}
        show={showPasswordModal}
        onClose={closePasswordDialog}
        onSubmit={handleResetPassword}
        action="Update"
        loading={loading}
      >
        {error && <SimpleAlert message={error} color={"failure"} />}
        <SimpleInput
          label={"Password"}
          type="password"
          icon={<LockIcon />}
          placeholder="* * * * *"
          onchange={(event) => setPassword(event.target.value)}
        />
        <SimpleInput
          label={"Confirm Password"}
          type="password"
          icon={<LockIcon />}
          placeholder="* * * * *"
          onchange={(event) => setConfirmPassword(event.target.value)}
        />
      </FormModal>
    </>
  );
};

export default ForgetPassword;
