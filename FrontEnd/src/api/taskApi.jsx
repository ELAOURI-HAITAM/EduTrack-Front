import { apiClient } from "./axios";

export const getAllTasks = async () => {
  const response = await apiClient.get(`/tasks/todo`);
  return response.data;
};

export const submitTask = async (newTask) => {
  const response = await apiClient.post("/tasks/submit" , newTask);
  return response.data;
};

export const completedTasks = async () => {
  const response = await apiClient.get("/tasks/completed");
  return response.data;
};
