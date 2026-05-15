import { apiClient } from "./axios";

export const getTasks = async () => {
  const response = await apiClient.get("/tasks/my-tasks");
  return response.data;
};
export const getTaskDetails = async (id) => {
  const response = await apiClient.get(`/tasks/${id}`);
  return response.data;
};
export const newUplaod = async (formData) => {
  const response = await apiClient.post("/tasks/upload", formData);
  return response.data;
};

export const updateTask = async ({id , formData}) => {
  const response = await apiClient.put(`/tasks/update/${id}` , formData);
  return response.data;
};

export const removeTask = async ( resource_id ) => {
  const response = await apiClient.delete(`/tasks/remove/${resource_id}`);
  return response.data;
};
