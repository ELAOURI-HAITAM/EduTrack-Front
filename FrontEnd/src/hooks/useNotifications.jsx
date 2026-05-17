import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
 
  GetALlNotifications,
  readNotification,
  
} from "../api/notificationApi";
import { Play } from "lucide-react";
import notificationSound from "../assets/notification.opus";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
export const useGetAllNotifications = () => {
  const audioPlayer = useRef(
    typeof Audio !== "undefined" ? new Audio(notificationSound) : null,
  );

  const prevUnreadCount = useRef(0);

  const query = useQuery({
    queryKey: ["notifications"],
    queryFn: GetALlNotifications,
    refetchInterval: 1000,
  });

  useEffect(() => {
    if (query.data) {
      const currentUnreadCount = query.data.filter(
        (notif) => !notif.is_read,
      ).length;

      if (currentUnreadCount > prevUnreadCount.current) {
        if (audioPlayer.current) {
          audioPlayer.current.play().catch((err) => {
            console.log("Browser blocked autoplay:", err);
          });
        }
      }

      prevUnreadCount.current = currentUnreadCount;
    }
  }, [query.data]);

  return query;
};

export const useReadNotification = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: readNotification,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};


