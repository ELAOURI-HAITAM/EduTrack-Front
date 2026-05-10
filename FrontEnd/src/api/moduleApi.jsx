import { apiClient } from "./axios";

export const fetchModules = async () => {
  const response = await apiClient.get("/modules/my-modules");
  return response.data;
};

export const createModule = async (newModule) => {
  const response = await apiClient.post("/modules/create", newModule);
  return response.data;
};

export const updateModule = async ({ id, updatedData }) => {
  const response = await apiClient.put(`/modules/update/${id}`, updatedData);
  return response.data;
};

export const deleteModule = async (id) => {
  const response = await apiClient.delete(`/modules/delete/${id}`);
  return response.data;
};
