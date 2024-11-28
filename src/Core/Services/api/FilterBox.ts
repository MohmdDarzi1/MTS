import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Technologies = {
  id: number;
  techName: string;
  parentId: null | number;
  describe: string;
  iconAddress: string;
};

export const getTechnologies = async (): Promise<Technologies[]> => { // تغییر به Technologies[]
  try {
    const response = await axios.get(
      "https://classapi.sepehracademy.ir/api/Home/GetTechnologies"
    );
    const data: Technologies[] = response.data; // تعریف به عنوان آرایه
    console.log(data, "Technologies");
    return data;
  } catch (error) {
    throw error;
  }
};

export const useGetTechnologies = () => {
  return useQuery<Technologies[], Error>({ // تغییر نوع به Technologies[]
    queryKey: ["getTechnologies"],
    queryFn: getTechnologies,
  });
};




type Type = {
  id: number;
  typeName: string;

  insertDate: string;
};

export const getType = async (): Promise<Type[]> => { // تغییر به Technologies[]
  try {
    const response = await axios.get(
      "https://classapi.sepehracademy.ir/api/CourseType/GetCourseTypes"
    );
    const data: Type[] = response.data; // تعریف به عنوان آرایه
    console.log(data, "type");
    return data;
  } catch (error) {
    throw error;
  }
};

export const useGetType = () => {
  return useQuery<Type[], Error>({ // تغییر نوع به Technologies[]
    queryKey: ["getType"],
    queryFn: getType,
  });
};


type Level = {
    id: number;
    levelName: string;
  
   
  };
  
  export const getLevel = async (): Promise<Level[]> => { // تغییر به Technologies[]
    try {
      const response = await axios.get(
        "https://classapi.sepehracademy.ir/api/CourseLevel/GetAllCourseLevel"
      );
      const data: Level[] = response.data; // تعریف به عنوان آرایه
      console.log(data, "level");
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const useLevel = () => {
    return useQuery<Level[], Error>({ // تغییر نوع به Technologies[]
      queryKey: ["getLevel"],
      queryFn: getLevel,
    });
  };
// نوع تعریف شده برای هزینه دوره
type CartCourseCost = {
    cost: number;
  };
  
  // نوع تعریف شده برای داده‌های کل دوره‌ها
  type CartCourseAllCost = {
    courseFilterDtos: CartCourseCost[];
    totalCount: number;
  };
  
  // تابع برای دریافت داده‌ها با پارامترهای CostUp و CostDown
  const getRange = async (costUp: number, costDown: number): Promise<CartCourseAllCost> => {
    const response = await axios.get<CartCourseAllCost>(
      `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?CostDown=${costDown}&CostUp=${costUp}`
    );
    return response.data;
  };
  
  // استفاده از React Query برای دریافت داده‌ها
  export const useGetRange = (costUp: number, costDown: number) => {
    return useQuery<CartCourseAllCost, Error>({
      queryKey: ["getCourseData", costUp, costDown], // اضافه کردن CostDown به کلید
      queryFn: () => getRange(costUp, costDown), // فراخوانی تابع با پارامترهای جدید
    });
  };