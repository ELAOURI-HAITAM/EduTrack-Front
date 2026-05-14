import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const fetchUser = async () => {
  const { data } = await axios.get("http://localhost:8000/users/me", {
    withCredentials: true,
  });
  return data;
};


const addEmail = async (newEmail) => {
  const { data } = await axios.post("http://localhost:8000/users/add" , newEmail);
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

