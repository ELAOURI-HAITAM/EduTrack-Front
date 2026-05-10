import { apiClient } from "./axios";

export const fetchProfessorStats = async () => {
  const response = await apiClient.get("/professors/my-stats");
  return response.data;
};
