import { useQuery } from "@tanstack/react-query";
import { fetchAdminStats, fetchProfessorStats, fetchStudentStats } from "../api/stats";

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


export const useGetAdminStats = () =>
{
  return useQuery({
    queryKey : ["admin"],
    queryFn : fetchAdminStats,
    refetchInterval : 2000
  })
}