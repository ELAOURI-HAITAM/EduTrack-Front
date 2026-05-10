import { apiClient } from "./axios";

export const getStudentTracking = async () => {
  const response = await apiClient.get("/professors/student-tracking");
  return response.data;
};
