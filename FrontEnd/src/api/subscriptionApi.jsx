import { apiClient } from "./axios";

export const newFollow = async ( prof_id ) => {
  const response = await apiClient.post(`/subscriptions/subscribe/${prof_id}`);
  return response.data;
};

export const removeFollow = async (prof_id ) => {
  const response = await apiClient.delete(`/subscriptions/unfollow/${prof_id}`);
  return response.data;
};

export const allFollowing = async () => {
  const response = await apiClient.get("/subscriptions/following");
  return response.data;
};

export const allFollowers = async () => {
  const response = await apiClient.get("/subscriptions/followers");
  return response.data;
};
