import { apiClient } from "./axios";

export const getAllTasks = async () => {
  const response = await apiClient.get(`/completed_tasks/todo`);
  return response.data;
};

export const submitCompletedTask = async (newCompletedTask) => {
  const response = await apiClient.post("/completed_tasks/submit" , newCompletedTask);
  return response.data;
};

export const completedTasks = async () => {
  const response = await apiClient.get("/completed_tasks/completed");
  return response.data;
};
