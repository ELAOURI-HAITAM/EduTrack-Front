import { apiClient } from "./axios";

export const getResources = async () => {
  const response = await apiClient.get("/resources/my-resources");
  return response.data;
};
export const getResourceDetails = async (id) => {
  const response = await apiClient.get(`/resources/${id}`);
  return response.data;
};
export const newUplaod = async (formData) => {
  const response = await apiClient.post("/resources/upload", formData);
  return response.data;
};

export const updateResource = async ({id , formData}) => {
  const response = await apiClient.put(`/resources/update/${id}` , formData);
  return response.data;
};

export const removeResource = async ( resource_id ) => {
  const response = await apiClient.delete(`/resources/remove/${resource_id}`);
  return response.data;
};
