import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

export type UserProfile = {
  currentPictureAddress: string;
  profileCompletionPercentage: number;
  userImage: {
    id: string;
    userProfileId: number;
    pictureName: string;
    puctureAddress: string;
    insertDate: string;
  }[];
  email: string;
  phoneNumber: string;
  lName: string | null;
  fName: string | null;
  userAbout: string | null;
  linkdinProfile: string | null;
  telegramLink: string | null;
  receiveMessageEvent: boolean;
  homeAddress: string | null;
  nationalCode: string | null;
  gender: boolean;
  birthDay: string;
  latitude: number | null;
  longitude: number | null;
};

export const userProfile = async (token: string): Promise<UserProfile> => {
  try {
    const response = await axios.get(
      `https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo`,

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

export const useUserProfile = (token: string) => {
  return useQuery<UserProfile, Error>({
    queryKey: ["getCourseList", token],
    queryFn: () => userProfile(token),
  });
};

type EditProfileresponse = {
  newToken: string;
  id: number;
  message: string;
  success: boolean;
  errors: string | null;
};

type DataEditProfile = {
  LName: string;
  FName: string;
  UserAbout: string;
  LinkdinProfile: string;
  TelegramLink: string;
  ReceiveMessageEvent: boolean;
  HomeAdderess: string;
  NationalCode: string;
  Gender: boolean;
  BirthDay: string;
  Latitude: string;
  Longitude: string;
};

export const EditProfil = async (
  data: DataEditProfile,
  token: string
): Promise<EditProfileresponse> => {
  try {
    const formData = new FormData();
    formData.append("LName", data.LName);
    formData.append("FName", data.FName);
    formData.append("UserAbout", data.UserAbout);
    formData.append("LinkdinProfile", data.LinkdinProfile);
    formData.append("TelegramLink", data.TelegramLink);
    formData.append("ReceiveMessageEvent", String(data.ReceiveMessageEvent));
    formData.append("HomeAdderess", data.HomeAdderess);
    formData.append("NationalCode", data.NationalCode);
    formData.append("Gender", String(data.Gender));
    formData.append("BirthDay", data.BirthDay);
    formData.append("Latitude", data.Latitude);
    formData.append("Longitude", data.Longitude);

    const response = await axios.put(
      "https://classapi.sepehracademy.ir/api/SharePanel/UpdateProfileInfo",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useEditProfile = () => {
  return useMutation<
    EditProfileresponse,
    Error,
    { data: DataEditProfile; token: string }
  >({
    mutationFn: ({ data, token }) => EditProfil(data, token),
  });
};

type Api = {
  id: boolean;
  message: string;
  success: boolean;
  errors: null;
};
type ProfileImageParams = {
  formFile: File;
  token: string;
};

export const AddProfileImage = async (
  formFile: File,
  token: string
): Promise<Api> => {
  const formData = new FormData();
  formData.append("formFile", formFile);

  const response = await axios.post<Api>(
    "https://classapi.sepehracademy.ir/api/SharePanel/AddProfileImage",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // اضافه کردن توکن به هدر
      },
    }
  );

  return response.data;
};

export const useAddProfileImage = (): UseMutationResult<
  Api,
  Error,
  ProfileImageParams
> => {
  return useMutation<Api, Error, ProfileImageParams>({
    mutationFn: ({ formFile, token }) => AddProfileImage(formFile, token),
  });
};

type DeleteImageData = {
  token: string;
  DeleteEntityId: string;
};

// تابع حذف تصویر پروفایل
const deleteProfileImage = async (
  token: string,
  DeleteEntityId: string
): Promise<void> => {
  try {
    // ایجاد یک شیء FormData برای ارسال داده‌ها
    const formData = new FormData();
    formData.append("DeleteEntityId", DeleteEntityId);

    const response = await axios.delete(
      "https://classapi.sepehracademy.ir/api/SharePanel/DeleteProfileImage",
      {
        headers: {
          Authorization: `Bearer ${token}`, // اضافه کردن توکن به هدر
          "Content-Type": "multipart/form-data", // تعیین Content-Type به multipart/form-data
        },
        data: formData, // ارسال داده‌ها به صورت FormData
      }
    );

    // بررسی وضعیت پاسخ
    if (response.status === 200) {
      console.log("Profile image deleted successfully:", response.data);
    } else {
      console.error("Failed to delete profile image. Response:", response);
      throw new Error("Failed to delete profile image");
    }
  } catch (error) {
    console.error("Error deleting profile image:", error);
    throw new Error(
      "Error deleting profile image: " + (error as Error).message
    );
  }
};

// استفاده از React Query برای مدیریت درخواست حذف تصویر
export const useDeleteImage = () => {
  const queryClient = useQueryClient(); // دسترسی به queryClient برای مدیریت کش

  return useMutation({
    mutationFn: async ({ token, DeleteEntityId }: DeleteImageData) => {
      return deleteProfileImage(token, DeleteEntityId);
    },
    onSuccess: () => {
      // با موفقیت انجام شدن عملیات، کش کوئری را باطل می‌کنیم
      console.log("Invalidating 'userProfile' query cache...");
      queryClient.invalidateQueries({
        queryKey: ["userProfile"], // کلید کوئری مشخص
      });
    },
    onError: (error) => {
      // مدیریت خطا در صورت رخداد مشکل
      console.error("Error occurred while deleting profile image:", error);
    },
  });
};

// تعریف اینترفیس API
interface RessetPasswordApi {
  apiKey: string;
  phoneNumber: string;
  id: number;
  token: string;
  roles: string[];
  message: string;
  success: boolean;
  errors: string | null;
}

// تابع برای تغییر رمز عبور
export const RessetPassword = async (user: {
  oldPassword: string;
  newPassword: string;
}): Promise<RessetPasswordApi> => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      `https://classapi.sepehracademy.ir/api/SharePanel/ChangePassword`,
      user,
      {
        headers: {
          Authorization: `Bearer ${token}`, // افزودن توکن به هدر
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

// هوک برای مدیریت تغییر رمز عبور
export const useRessetPassword = (
  options?: UseMutationOptions<
    RessetPasswordApi,
    any,
    { oldPassword: string; newPassword: string }
  >
) => {
  return useMutation<
    RessetPasswordApi,
    any,
    { oldPassword: string; newPassword: string }
  >({
    mutationFn: RessetPassword, // تابع تغییر رمز عبور به‌عنوان mutationFn
    ...options, // انتقال سایر تنظیمات (مثل onSuccess و onError)
  });
};

type MyCourses = {
  listOfMyCourses: [];
  totalCount: number;
};

export const GetMyCourses = async (
  token: string,
  Query: string
): Promise<MyCourses> => {
  const response = await axios.get(
    `https://classapi.sepehracademy.ir/api/SharePanel/GetMyCourses?Query=${Query}`,
    {
      headers: {
        Authorization: `Bearer ${token}`, // افزودن توکن به هدر
      },
    }
  );
  return response.data;
};
export const useGetMyCourses = (token: string, searchValue: string) => {
  return useQuery<MyCourses, Error>({
    queryKey: ["myCourses", token, searchValue],
    queryFn: () => GetMyCourses(token, searchValue),
  });
};

export type FavoriteCourse = {
  favoriteCourseDto: {
    teacheName: string; // نام معلم
    levelName: string; // سطح دوره (مانند مبتدی)
    courseTitle: string; // عنوان دوره
    describe: string; // توضیحات دوره
    tumbImageAddress: string | null; // آدرس تصویر کوچک (ممکن است null باشد)
    typeName: string; // نوع دوره (مثلاً حضوری)
    lastUpdate: string; // آخرین به‌روزرسانی (به صورت رشته تاریخ)
    courseId: string; // شناسه دوره
    favoriteId: string; // شناسه علاقه‌مندی
    teacherId: number; // شناسه معلم
  }[];
  totalCount: number;
};

export const getFavoriteCourse = async (
  token: string
): Promise<FavoriteCourse> => {
  try {
    const response = await axios.get(
      "https://classapi.sepehracademy.ir/api/SharePanel/GetMyFavoriteCourses",

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const usegetFavoriteCourse = (token: string) => {
  return useQuery<FavoriteCourse, Error>({
    queryKey: ["favoriteCourse"],
    queryFn: () => getFavoriteCourse(token),
  });
};

interface Reservation {
  reserveId: string; // شناسه رزرو
  courseId: string; // شناسه دوره
  courseName: string; // نام دوره
  studentId: number; // شناسه دانش‌آموز
  studentName: string; // نام دانش‌آموز
  reserverDate: string; // تاریخ رزرو
  accept: boolean; // پذیرش یا رد
}

export const FetchCourseReserve = async (
  token: string
): Promise<Reservation[]> => {
  const response = await axios.get(
    "https://classapi.sepehracademy.ir/api/SharePanel/GetMyCoursesReserve",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// هوک سفارشی برای استفاده از داده‌های رزرو دوره
export const useCourseReserve = (token: string) => {
  return useQuery<Reservation[]>({
    queryKey: ["courseReserve", token], // استفاده از توکن در کلید
    queryFn: () => FetchCourseReserve(token),
    // onError: (error) => {
    //   console.error("خطا در دریافت اطلاعات رزرو دوره:", error);
    // },
  });
};

const deleteCourseReserve = async ({
  token,
  reserveId,
}: {
  token: string;
  reserveId: string;
}) => {
  try {
    const response = await axios.delete(
      `https://classapi.sepehracademy.ir/api/CourseReserve`, // URL API
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: { id: reserveId }, // ارسال reserveId به صورت raw در بدنه درخواست
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error deleting course:", error.response?.data); // نمایش خطاهای مربوط به درخواست
    } else {
      console.error("Unexpected error:", error);
    }
    throw error; // برای اینکه در تابع فراخوانی بتوانید خطا را مدیریت کنید
  }
};

export const useDeleteCourseReserve = () => {
  return useMutation<Api, Error, { token: string; reserveId: string }>({
    mutationFn: ({ reserveId, token }) =>
      deleteCourseReserve({ reserveId, token }),
  });
};
