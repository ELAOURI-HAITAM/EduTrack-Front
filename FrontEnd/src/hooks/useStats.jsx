import { useQuery } from "@tanstack/react-query";
import { fetchProfessorStats, fetchStudentStats } from "../api/stats";

export const useGetProfessorStats = () => {
  return useQuery({
    queryKey: ["professor"],
    queryFn: fetchProfessorStats,
  });
};



export const useGetStudentStats = () => {
  return useQuery({
    queryKey: ["student"],
    queryFn: fetchStudentStats,
    refetchInterval : 2000
  });
}