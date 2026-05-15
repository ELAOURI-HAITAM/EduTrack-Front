import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { getAllTasks, submitCompletedTask, completedTasks } from "../api/completedTask";

export const useGetAllTasks = () => {
  return useQuery({
    queryKey: ["completed_tasks"],
    queryFn: getAllTasks,
  });
};

export const useSubmitTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitCompletedTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completed_tasks"] });
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
    queryKey: ["completed_tasks"],
    queryFn: completedTasks,
  });
};
