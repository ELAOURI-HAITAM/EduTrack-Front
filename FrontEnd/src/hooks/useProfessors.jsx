import { useQuery } from "@tanstack/react-query";
import { getAllProfessors } from "../api/professorApi";
import { getStudentTracking } from "../api/trackingApi";

export const useGetAllProfessors = () => {
  return useQuery({
    queryKey: ["professors"],
    queryFn: getAllProfessors,
  });
};



export const useGetStudentTracking = () =>
{
  return useQuery({
    queryKey: ["professors"],
    queryFn: getStudentTracking,
  });
}