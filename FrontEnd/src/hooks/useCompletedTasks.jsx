import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { completedTasks, getAllTasks, submitCompletedTask } from "../api/completedTask";
import { UseUser } from "./useUser";

export const useGetAllTasks = () => {
  const {data : user} = UseUser()
  return useQuery({
    queryKey: ["completes"],
    queryFn: getAllTasks,
    enabled : user?.role == "Student"
  });
};

export const useSubmitTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitCompletedTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completes"] });
      Swal.fire({
        icon: "success",
        title: "Submiting Task !",
        text: "You Submited Task successfully.",
      });
    },
  });
};

export const useGetAllCompletedTasks = () => {
  return useQuery({
    queryKey: ["completes_v2"], 
    queryFn: completedTasks,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
};