import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { getResourceDetails, getResources, newUplaod, removeResource, updateResource } from "../api/resourceApi";



export const useGetResources = ()=>
{
  return useQuery({
    queryKey : ["resources"],
    queryFn : getResources
  })
}

export const useGetResourceDetails = (resource_id)=>
{
  return useQuery({
    queryKey : ["resource" ,resource_id],
    queryFn : () => getResourceDetails(resource_id)
  })
}
export const useNewTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: newUplaod,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      Swal.fire({
        icon: "success",
        title: "Assignment Task",
        text: "Task Assign Successfully",
      });
    },
  });
};

export const useUpdateResource = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateResource,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      Swal.fire({
         icon: "success",
        title: "Resource Updated!",
        text: "Your Resource has been updated successfully.",
      })
    },
  });
};


export const useRemoveTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeResource,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resources"] });
      Swal.fire({
        icon: "success",
        title: "Removing Task",
        text: "Task removed Successfully",
      });
    },
  });
};
