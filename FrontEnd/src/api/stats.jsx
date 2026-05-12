import { apiClient } from "./axios";

export const fetchProfessorStats = async () => {
  const response = await apiClient.get("/professors/my-stats");
  return response.data;
};



export const fetchStudentStats = async () =>{
  const response = await apiClient.get("/student/my-stats");
  return response.data;
}