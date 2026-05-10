import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { completedTasks, getAllTasks, submitTask } from "../api/taskApi";

export const useGetAllTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getAllTasks,
  });
};

export const useSubmitTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      Swal.fire({
        icon: "success",
        title: "Submiting Task !",
        text: "You Submited Task successfully.",
      });
    },
  });
};

export const useGetCompletedTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: completedTasks,
  });
};
