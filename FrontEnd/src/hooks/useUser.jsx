import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUser = async () => {
  const { data } = await axios.get("http://localhost:8000/users/me", {
    withCredentials: true,
  });
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
