// import { useMutation } from "@tanstack/react-query";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
// تعریف تایپ برای ورودی تابع ثبت‌نام
interface RegisterResponse {
  id: number;
  message: string;
  success: boolean;
  errors: string[] | null;
}

type UserID = {
  user: RegisterResponse;
};

// تابع ثبت‌نام
export const getsignUp = async (user: string): Promise<RegisterResponse> => {
  try {
    const response = await fetch(
      `https://classapi.sepehracademy.ir/api/Sign/SendVerifyMessage`,
      {
        method: "POST", // استفاده از POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: user }), // ارسال شماره تلفن با نام مناسب
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: RegisterResponse = await response.json();
    console.log("signResult", result);
    return result;
  } catch (error) {
    console.error("Error in signup request:", error);
    throw error;
  }
};

// استفاده از useMutation برای مدیریت عملیات ثبت‌نام
export const useGetsignUp = () => {
  return useMutation<RegisterResponse, Error, string>({
    mutationFn: (data: string) => {
      console.log("DataSignUp", data);
      return getsignUp(data);
    },
  });
};

interface VerifyResponse {
  success: boolean;
  message: string;
}

// تابع ارسال کد تایید
const getVerifyCode = async (user: {
  phoneNumber: string;
  verifyCode: string;
}): Promise<VerifyResponse> => {
  const response = await fetch(
    `https://classapi.sepehracademy.ir/api/Sign/SendVerifyMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) {
    throw new Error("خطا در ارسال درخواست");
  }

  return response.json();
};

// استفاده از useMutation برای مدیریت عملیات تایید کد
export const useGetsignUpCode = () => {
  return useMutation<
    VerifyResponse,
    Error,
    { phoneNumber: string; verifyCode: string }
  >({
    mutationFn: getVerifyCode, // تعریف getVerifyCode به عنوان mutationFn
    onSuccess: (data) => {
      console.log("کد با موفقیت تایید شد:", data.message);
    },
    onError: (error) => {
      console.error("خطا در تایید کد:", error);
    },
  });
};
// تعریف نوع پاسخ
interface CompletedResponse {
  id: number;
  message: string;
  success: boolean;
  errors: string[] | null;
}

// تابع ارسال کد تایید
const getCompleted = async (user: {
  phoneNumber: string;
  password: string;
  gmail: string;
}): Promise<CompletedResponse> => {
  // بررسی ورودی‌ها
  const { phoneNumber, password, gmail } = user;

  // چک کردن وجود فیلدها
  if (!phoneNumber || !password || !gmail) {
    throw new Error("لطفا همه فیلدها را پر کنید");
  }

  // چک کردن فرمت ایمیل
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(gmail)) {
    throw new Error("لطفا ایمیل را در فرمت صحیح وارد کنید");
  }

  console.log("ورودی‌ها:", user); // نمایش ورودی‌ها برای بررسی

  try {
    const response = await fetch(
      `https://classapi.sepehracademy.ir/api/Sign/Register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("جزئیات خطا:", errorData); // نمایش اطلاعات خطا
      throw new Error(errorData.errors?.join(", ") || "خطا در ارسال درخواست");
    }

    return response.json();
  } catch (error) {
    console.error("خطا در ارسال درخواست:", error);
    throw error; // پرتاب خطا برای مدیریت در فراخوانی
  }
};

// استفاده از useMutation برای مدیریت عملیات تایید کد
// import { useMutation } from 'react-query';

export const useGetCompleted = () => {
  return useMutation<
    CompletedResponse,
    Error,
    { phoneNumber: string; password: string; gmail: string }
  >({
    mutationFn: getCompleted,
    onSuccess: (data) => {
      console.log("کد با موفقیت تایید شد:", data.message);
    },
    onError: (error) => {
      console.error("خطا در تایید کد:", error.message);
    },
  });
};
interface ApiResponse {
  apiKey: string | null;
  phoneNumber: string | null;
  id: number;
  token: string | null;
  roles: string[] | null;
  message: string;
  success: boolean;
  errors: any | null;
}

export const getLoginPages = async (user: {
  phoneOrGmail: string;
  password: string;
  rememberMe: true;
}): Promise<ApiResponse> => {
  try {
    const response = await fetch(`https://classapi.sepehracademy.ir/api/Sign/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('خطا در دریافت اطلاعات');
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const useGetLoginPages = () => {
  return useMutation<ApiResponse, Error, { phoneOrGmail: string; password: string; rememberMe: true }>({
    mutationFn: getLoginPages,
    onSuccess: (data) => {
      console.log("ورود موفق:", data.message);
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        console.log("توکن ذخیره شد:", data.token);
      } else {
        console.error("توکن وجود ندارد.");
      }
    },
    onError: (error) => {
      console.error("خطا در ورود:", error.message);
    },
  });
};
