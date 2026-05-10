import { apiClient } from "./axios";

export const getAllProfessors = async () => {
  const response = await apiClient.get("/students/all-profs");
  return response.data;
};
