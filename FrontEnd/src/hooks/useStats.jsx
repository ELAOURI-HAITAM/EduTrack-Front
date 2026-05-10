import { useQuery } from "@tanstack/react-query";
import { fetchProfessorStats } from "../api/stats";

export const useGetProfessorStats = () => {
  return useQuery({
    queryKey: ["professor"],
    queryFn: fetchProfessorStats,
  });
};
