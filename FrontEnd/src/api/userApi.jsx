import { apiClient } from "./axios";

export const fetchUsers = async () => {
  const response = await apiClient.get("/users/all");
  return response.data;
};

export const createUser = async (newUser) => {
  const response = await apiClient.post("/users/create", newUser);
  return response.data;
};

export const updateUser = async ({ id, updatedData }) => {
  const response = await apiClient.put(`/users/update/${id}`, updatedData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await apiClient.delete(`/users/delete/${id}`);
  return response.data;
};

export const getUserDetails = async (id) => {
  const response = await apiClient.get(`/users/details/${id}`);
  return response.data;
};

export const importUsers = async (formData) => {
  const response = await apiClient.post("/users/import-excel", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
