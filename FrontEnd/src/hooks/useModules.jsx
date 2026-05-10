import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createModule,
  deleteModule,
  fetchModules,
  updateModule,
} from "../api/moduleApi";
import Swal from "sweetalert2";

export const useGetModule = () => {
  return useQuery({
    queryKey: ["modules"],
    queryFn: fetchModules,
  });
};

export const useAddModule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createModule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["modules"] });
      Swal.fire({
        icon: "success",
        title: "Module Created!",
        text: "Your module has been created successfully.",
      })
    },
  });
};

export const useUpdateModule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateModule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["modules"] });
      Swal.fire({
         icon: "success",
        title: "Module Updated!",
        text: "Your module has been updated successfully.",
      })
    },
  });
};

export const useDeleteModule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteModule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["modules"] });
       Swal.fire({
         icon: "success",
        title: "Module Deleted!",
        text: "Your module has been deleted successfully.",
      })
    },
  });
};
