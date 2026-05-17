import { apiClient } from "./axios";
export const GetALlNotifications = async () => {
  const response = await apiClient.get("/notifications");
  return response.data;
};

export const readNotification = async (notification_id) => {
  const response = await apiClient.patch(`/notifications/${notification_id}/read`);
  return (await response).data;
};


