import React from "react";
import ConfirmationModal from "../../components/modal/confirmationModal";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut, LogOutIcon } from "lucide-react";
import MainButton from "../../components/Buttons/main_button";
import SimpleOutLineButton from "../../components/Buttons/simpleOutLine";

const Logout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleLogout = async () => {
    const modal = await ConfirmationModal({
      title: "Logout Confirmation",
      message: "Are you sure you want to logout ?",
    });
    try {
      if (modal.isConfirmed) {
        const response = await axios.post(
          "http://localhost:8000/users/logout",
          {},
          { withCredentials: true },
        );
        queryClient.invalidateQueries({ queryKey: ["user"] });
        Swal.fire({
          title: "Logged Out",
          text: response.data.message,
          icon: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          title: "Error",
          text: error.response.data.detail,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "An error occurred. Please try again later.",
          icon: "error",
        });
      }
    }
  };
  return (
    <SimpleOutLineButton name={"Log Out"} full={true} onclick={handleLogout}/>
  );
};

export default Logout;
