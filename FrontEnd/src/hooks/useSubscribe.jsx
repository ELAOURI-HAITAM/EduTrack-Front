import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  allFollowers,
  allFollowing,
  newFollow,
  removeFollow,
} from "../api/subscriptionApi";
import Swal from "sweetalert2";

export const useNewSubscribe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: newFollow,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
      Swal.fire({
        icon: "info",
        title: "Following",
        text: "You Have Followed ",
      });
    },
  });
};

export const useRemoveSubscribe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeFollow,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
      Swal.fire({
        icon: "info",
        title: "Unfollowing",
        text: "You Have Unfollowed ",
      });
    },
  });
};

export const useGetFollowers = () => {
  return useQuery({
    queryKey: ["subscriptions"],
    queryFn: allFollowers,
  });
};

export const useGetFollowing = () => {
  return useQuery({
    queryKey: ["subscriptions"],
    queryFn: allFollowing,
  });
};


