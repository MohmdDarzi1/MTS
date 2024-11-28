// import { CourseReserve } from "./UserPanel";
import {
  Query,
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

import axios from "axios";
import http from "../../interceptors/interceptors";
import { ApiRoutes } from "./ApiRoutes/ApiRoutes";
import React, { useEffect, useState } from "react";

interface Course {
  courseId: string;
  title: string;
  description: string;
  teacherName: string;
  typeName: string;
  tumbImageAddress: string;
  cost: string;
  levelName: string;
}

export const getCourseTop = async (count: number): Promise<Course[]> => {
  try {
    const response = await axios.get(
      `https://classapi.sepehracademy.ir/api/Home/GetCoursesTop`,
      {
        params: { count },
      }
    );

    const data = response.data;
    console.log("پاسخ کامل API:", data);

    if (Array.isArray(data)) {
      console.log("دوره‌های دریافت شده:", data);
      return data;
    } else {
      console.error("داده‌ها درست نیستند یا موفقیت نداشتند:", data);
      return [];
    }
  } catch (error: any) {
    console.error("Error fetching top courses:", error.message || error);
    return [];
  }
};

export const useGetCourseTop = (count: number) => {
  return useQuery<Course[], Error>({
    queryKey: ["getCourseList", count],
    queryFn: () => getCourseTop(count), // تابع برای فراخوانی داده‌ها
  });
};

type CartCourse = {
  teacherName: string;
  classRoomName: string;
  statusName: string;
  levelName: string;
  cost: number;
  currentRegistrants: number;
  likeCount: number;
  commandCount: number;
  userIsLiked: boolean;
  userFavorite: boolean;
  courseRate: number;
  title: string;
  describe: string;
  tumbImageAddress: string;
  lastUpdate: string;
  courseId: string;
  technologyList: string;
  dissLikeCount: number;
  currentUserDissLike: boolean;
  currentUserSetRate: boolean;
  currentUserRateNumber: number;
};

type CartCourseAll = {
  courseFilterDtos: CartCourse[];
  totalCount?: number;
};

export const getAllCartCourse = async (
  PageNumber: number,
  SortingCol: string = "asc", // مقدار پیش‌فرض
  courseLevelId: string = "1", // مقدار پیش‌فرض برای تست
  // ListTech: string = "React", // مقدار پیش‌فرض برای تست
  CourseTypeId: string = "2" // مقدار پیش‌فرض برای تست
): Promise<CartCourseAll> => {
  try {
    const url = `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&SortingCol=${SortingCol}&courseLevelId=${courseLevelId}&CourseTypeId=${CourseTypeId}`;
    const response = await axios.get<CartCourseAll>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const useGetCourseAllCart = (
  PageNumber: number,
  SortingCol: string = "DefaultColumn",
  courseLevelId: string,
  // ListTech:string,
  CourseTypeId: string
) => {
  return useQuery<CartCourseAll, Error>({
    queryKey: [
      "getCourseAllList",
      PageNumber,
      SortingCol,
      courseLevelId,
      CourseTypeId,
    ],
    queryFn: () =>
      getAllCartCourse(PageNumber, SortingCol, courseLevelId, CourseTypeId),
    staleTime: 5000,
    retry: 1,
    retryDelay: 1000,
  });
};

export type CourseDetails = {
  courseId: string;
  endTime: string; // تاریخ‌ها به صورت رشته‌ای برمی‌گردند.
  startTime: string;
  teacherId: number;
  teacherName: string;
  insertDate: string;
  title: string;
  imageAddress: string;
  currentRate: number;
  cost: number;
  googleTitle: string;
  googleSchema: string;
  capacity: number;
  uniqeUrlString: string;
  currentRegistrants: number;
  describe: string;
  miniDescribe: string;
  courseLevelName: string;
  courseStatusName: string;
  commentCount: number;
  likeCount: number;
  dissLikeCount: number;
  currentUserLike: boolean | string; // به نظر می‌رسد این فیلد به عنوان boolean تعریف شده ولی ممکن است از سرور به شکل string (مانند "0") بازگردد.
  currentUserDissLike: boolean | string; // همینطور برای currentUserDissLike
  courseGroupCount: number;
  isCourseUser: boolean | string; // شبیه currentUserLike
  isCourseReseve: boolean | string;
  courseReseveId: string;
  userFavoriteId: string;
  isUserFavorite: boolean;
  userLikeId: string;

  currentUserSetRate: boolean;
  currentUserRateNumber: number;
  techs: string[]; // آرایه‌ای از رشته‌ها برای تکنولوژی‌ها
};

export const getDetailCourses = async (
  courseId: string
): Promise<CourseDetails> => {
  // اصلاح نوع بازگشتی
  if (!courseId) {
    throw new Error("Invalid CourseId"); // بررسی CourseId
  }

  try {
    const response = await fetch(
      `https://classapi.sepehracademy.ir/api/Home/GetCourseDetails?CourseId=${courseId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok"); // بررسی پاسخ شبکه
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching course details:", error.message);
    throw error;
  }
};

export const useGetDetailCourses = (courseId: string) => {
  console.log("CourseId:", courseId); // اضافه کردن این خط
  return useQuery<CourseDetails, Error>({
    queryKey: ["getDetailCourse", courseId],
    queryFn: () => getDetailCourses(courseId),
    enabled: !!courseId, // فقط درخواست را اجرا می‌کند اگر CourseId موجود باشد
  });
};

export type CourseComment = {
  id: string; // شناسه به صورت UUID
  courseId: string; // شناسه دوره به صورت UUID
  parentId: string; // شناسه والد به صورت UUID
  title: string; // عنوان به صورت رشته
  describe: string; // توضیحات به صورت رشته
  author: string; // نویسنده به صورت رشته
  userId: number; // شناسه کاربر به صورت عدد
  insertDate: string; // تاریخ درج به صورت رشته (فرمت ISO)
  accept: boolean; // تایید شده یا نشده به صورت بولین
  acceptReplysCount: number; // تعداد پاسخ‌های تایید شده به صورت عدد
  disslikeCount: number; // تعداد دیسلایک به صورت عدد
  likeCount: number; // تعداد لایک به صورت عدد
  currentUserEmotion: "DISSLIKED" | "LIKED" | null; // احساسات کاربر فعلی (مورد پسند، ناپسند، یا خنثی)
  currentUserLikeId: string | null; // شناسه لایک کاربر فعلی به صورت UUID یا null
  pictureAddress: string; // آدرس تصویر به صورت رشته
};

export const getCourseComment = async (
  courseId: string
): Promise<CourseComment> => {
  console.log("courseId received:", courseId); // بررسی مقدار courseId
  try {
    const response = await fetch(
      `https://classapi.sepehracademy.ir/api/Course/GetCourseCommnets/${courseId}`
      // "https://classapi.sepehracademy.ir/api/Course/GetCourseCommnets/f4f2b093-8914-ef11-b6c2-f4b229435c5d"
    );
    // console.log(response,"id")
    const data = await response.json();
    console.log(data, "dataAPiComment");
    return data;
  } catch (error: any) {
    console.error("Error fetching course details:", error.message);
    throw error;
  }
};

export const useGetCourseComment = (courseId: string) => {
  return useQuery<CourseComment, Error>({
    queryKey: ["getCourseComment", courseId],
    queryFn: () => getCourseComment(courseId),
    // enabled: !!courseId, // فقط درخواست را اجرا می‌کند اگر courseId موجود باشد
  });
};

type GetReplayeComment = {
  id: string; // شناسه نظر
  courseId: string; // شناسه دوره
  parentId: string; // شناسه والد
  title: string; // عنوان نظر
  describe: string; // توضیحات نظر
  author: string; // نویسنده نظر
  userId: number; // شناسه کاربر
  insertDate: string; // تاریخ درج نظر
  accept: boolean; // وضعیت تایید
  acceptReplysCount: number; // تعداد پاسخ‌های تایید شده
  disslikeCount: number; // تعداد دیسلایک‌ها
  likeCount: number; // تعداد لایک‌ها
  currentUserEmotion: string; // احساس کاربر فعلی
  currentUserLikeId: string; // شناسه لایک کاربر فعلی
  pictureAddress: string; // آدرس تصویر نویسنده
};

export const getReplayComment = async (
  courseId: string,
  id: string
): Promise<GetReplayeComment> => {
  console.log("courseId received:", courseId); // بررسی مقدار courseId
  try {
    const response = await fetch(
      `https://classapi.sepehracademy.ir/api/Course/GetCourseReplyCommnets/${courseId}/${id}`
    );
    const data = await response.json();
    console.log(data, "replayeDAtaApi");
    return data;
  } catch (error: any) {
    console.error("Error fetching course details:", error.message);
    throw error;
  }
};

export const useGetReplayComment = (courseId: string, id: string) => {
  return useQuery<GetReplayeComment, Error>({
    queryKey: ["getReplayeComment", courseId, id],
    queryFn: () => getReplayComment(courseId, id),
    // enabled: !!courseId, // فقط درخواست را اجرا می‌کند اگر courseId موجود باشد
  });
};

type CourseFilterDto = {
  teacherName: string;
  classRoomName: string;
  statusName: string;
  levelName: string;
  cost: number;
  currentRegistrants: number;
  likeCount: number;
  commandCount: number;
  userIsLiked: boolean;
  userLikedId: string;
  userFavorite: boolean;
  userFavoriteId: string;
  courseRate: number;
  title: string;
  describe: string;
  tumbImageAddress: string | null;
  lastUpdate: string; // یا Date اگر می‌خواهید به فرمت Date تبدیل کنید
  courseId: string;
  technologyList: string;
  dissLikeCount: number;
  currentUserDissLike: boolean;
  currentUserSetRate: boolean;
  currentUserRateNumber: number;
};

interface SearchResponse {
  courseFilterDtos: CourseFilterDto[];
}

export const getSearchCard = async (query: string): Promise<SearchResponse> => {
  try {
    const response = await fetch(
      `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?Query=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("درخواست ناموفق بود");
    }

    const res: SearchResponse = await response.json();
    console.log(res, "searchdata");
    return res;
  } catch (error) {
    console.error("خطا:", error);
    throw error;
  }
};

export const useGetSearchCard = (query: string) => {
  return useQuery<SearchResponse, Error>({
    queryKey: ["searchCard", query], // کلید کش منحصر به‌فرد
    queryFn: () => getSearchCard(query), // فراخوانی API
    enabled: !!query, // درخواست فقط زمانی انجام شود که query وجود داشته باشد
  });
};

type CourseFavorite = {
  courseId: string;
  id: string;
  message: string;
  success: boolean;
  errors: null;
};

export const addCourseToFavorites = async (
  courseId: string,
  token: string
): Promise<CourseFavorite> => {
  const response = await axios.post(
    `https://classapi.sepehracademy.ir/api/Course/AddCourseFavorite`, // بدون courseId در URL
    { courseId },
    {
      headers: {
        Authorization: `Bearer ${token}`, // اضافه کردن توکن به هدر
      },
    }
    // ارسال داده به صورت JSON
  );
  return response.data;
};

export const useAddCourseToFavorites = (
  courseId: string,
  token: string
): UseMutationResult<CourseFavorite, Error, string> => {
  return useMutation<CourseFavorite, Error, string>({
    mutationKey: ["getFavorite"],
    mutationFn: () => addCourseToFavorites(courseId, token), // ارسال توکن به تابع
  });
};

type CourseLike = {
  id: boolean;
  message: string;
  success: boolean;
  errors: null;
};

export const LikeForCourse = async (
  courseId: string,
  token: string
): Promise<CourseLike> => {
  try {
    const response = await axios.post(
      `https://classapi.sepehracademy.ir/api/Course/AddCourseLike?CourseId=${courseId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`, // اضافه کردن توکن به هدر
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useLikeForCourse = (courseId: string, token: string) => {
  return useMutation<CourseLike, Error>({
    mutationKey: ["getLikeCourse", courseId, token],
    mutationFn: () => LikeForCourse(courseId, token),
  });
};

type CourseDisLike = {
  id: boolean;
  message: string;
  success: boolean;
  errors: null;
};

export const DisLikeForCourse = async (
  courseId: string,
  token: string
): Promise<CourseDisLike> => {
  try {
    const response = await axios.post(
      `https://classapi.sepehracademy.ir/api/Course/AddCourseDissLike?CourseId=${courseId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`, // اضافه کردن توکن به هدر
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useDisLikeForCourse = (courseId: string, token: string) => {
  return useMutation<CourseDisLike, Error>({
    mutationKey: ["getLikeCourse", courseId, token],
    mutationFn: () => DisLikeForCourse(courseId, token),
  });
};

// نوع داده برای پاسخ از API
type CourseRate = {
  id: boolean;
  message: string;
  success: boolean;
  errors: null;
};

// تابع ارسال ریتینگ به API
export const CourseRating = async (
  courseId: string,
  RateNumber: number,
  token: string
): Promise<CourseRate> => {
  try {
    const res = await axios.post(
      `https://classapi.sepehracademy.ir/api/Course/SetCourseRating?CourseId=${courseId}&RateNumber=${RateNumber}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

// هوک استفاده از ریتینگ
export const useCourseRating = (courseId: string, token: string) => {
  const [rateNumber, setRateNumber] = useState<number>(0);

  // استفاده از React Query برای ارسال ریتینگ
  const { mutate, isError, error, data } = useMutation<
    CourseRate,
    unknown,
    void,
    unknown
  >({
    mutationKey: ["rateCourse", courseId, token, rateNumber],
    mutationFn: () => CourseRating(courseId, rateNumber, token),
    onSuccess: (data) => {
      if (data.success) {
        console.log("ریتینگ با موفقیت ارسال شد", data.message);
      } else {
        console.log("خطا در ارسال ریتینگ", data.message);
      }
    },
    onError: (error) => {
      console.error("خطا در ارسال ریتینگ", error);
    },
  });

  return {
    mutate,
    setRateNumber,
    rateNumber,
    // isLoading,
    isError,
    error,
    data,
  };
};




const CourseReserveAdd = async ({ courseId, command, token }: { courseId: string; command: string; token: string }) => {
  try {
    const response = await axios.post(
      `https://classapi.sepehracademy.ir/api/CourseReserve/ReserveAdd`,
      { courseId, command }, // بدنه درخواست
      {
        headers: {
          "Content-Type": "application/json", // نوع محتوا
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const useCourseReserveAdd = () => {
  return useMutation<any, Error, { courseId: string; token: string ,command:string}>({
    mutationFn: ({ courseId, token,command }) => CourseReserveAdd({ courseId,command, token }),
  });
};