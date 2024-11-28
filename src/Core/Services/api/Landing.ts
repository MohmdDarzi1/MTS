import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ApiRoutes } from "./ApiRoutes/ApiRoutes";

interface LandingData {
  courseCount: number;
  newsCount: number;
  studentCount: number;
  teacherCount: number;
}

export const getLanding = async (): Promise<LandingData> => {
  try {
    const response = await fetch(
      "https://classapi.sepehracademy.ir/api/Home/LandingReport",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result: LandingData = await response.json();

    console.log("LandingData Response: ", result);
    return result;
  } catch (error) {
    console.log("allerror", error);
    throw error;
  }
};

export const useGetLanding = (): UseQueryResult<LandingData, Error> => {
  return useQuery<LandingData, Error>({
    queryKey: ["getallLanding"],
    queryFn: () => getLanding(),
  });
};
type LandingTeacher = {
  teacherId: number;
  fullName: string;
  linkdinProfileLink: string;
  pictureAddress: string;
  courseCounts: number;
  newsCount: number;
};

export const getLandingTeacher = async (): Promise<LandingTeacher[]> => {
  try {
    const result = await fetch(
      "https://classapi.sepehracademy.ir/api/Home/GetTeachers",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res: LandingTeacher[] = await result.json(); // انتظار بازگشت یک آرایه

    console.log(res, "resTeacher");

    return res;
  } catch (error) {
    throw error;
  }
};

  export const useGetLandingTeacher = (): UseQueryResult<LandingTeacher[], Error> => {
  return useQuery<LandingTeacher[], Error>({
    queryKey: ["getLandingTeacher"],
    queryFn: () => getLandingTeacher(),
  });
};
