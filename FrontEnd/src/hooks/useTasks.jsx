import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { getTaskDetails, getTasks, newUplaod, removeTask, updateTask } from "../api/task";



export const useGetTasks = ()=>
{
  return useQuery({
    queryKey : ["tasks"],
    queryFn : getTasks
  })
}

export const useGetTaskDetails = (task_id)=>
{
  return useQuery({
    queryKey : ["task" ,task_id],
    queryFn : () => getTaskDetails(task_id)
  })
}
export const useNewTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: newUplaod,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      Swal.fire({
        icon: "success",
        title: "Assignment Task",
        text: "Task Assign Successfully",
      });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      Swal.fire({
         icon: "success",
        title: "Task Updated!",
        text: "Your Task has been updated successfully.",
      })
    },
  });
};


export const useRemoveTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      Swal.fire({
        icon: "success",
        title: "Removing Task",
        text: "Task removed Successfully",
      });
    },
  });
};
