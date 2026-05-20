import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import {
  createUser,
  deleteUser,
  fetchUsers,
  getUserDetails,
  importUsers,
  updateUser,
} from "../api/userApi";

const fetchUser = async () => {
  const { data } = await axios.get("http://localhost:8000/users/me", {
    withCredentials: true,
  });
  return data;
};

const addEmail = async (newEmail) => {
  const { data } = await axios.post(
    "http://localhost:8000/users/add",
    newEmail,
  );
  return data;
};

export const UseUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addEmail,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      Swal.fire({
        icon: "success",
        title: "Domain Verified",
        text: "Email Created Successfully",
      });
    },
  });
};

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      Swal.fire({
        icon: "success",
        title: "User Created",
        text: "User Created Successfully",
      });
    },

    onError: (error) => {
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Something went wrong. Please try again!";

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: errorMessage,
        confirmButtonColor: "#d33",
      });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      Swal.fire({
        icon: "success",
        title: "User Updated!",
        text: "User has been updated successfully.",
      });
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Something went wrong. Please try again!";

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: errorMessage,
        confirmButtonColor: "#d33",
      });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      Swal.fire({
        icon: "success",
        title: "User Deleted!",
        text: "User has been deleted successfully.",
      });
    },
  });
};

export const useGetUserDetails = (user_id) => {
  return useQuery({
    queryKey: ["user", user_id],
    queryFn: () => getUserDetails(user_id),
  });
};

export const useImportUsers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: importUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      Swal.fire({
        icon: "success",
        title: "Users Creating",
        text: "Users Are Craeted Successfully",
      });
    },

    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops !!",
        text: error.response?.data?.detail,
      });
    },
  });
};
