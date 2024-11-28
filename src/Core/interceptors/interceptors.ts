import axios, { AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";

const baseURL: string = import.meta.env.VITE_BASE_URL;

const http = axios.create({
  baseURL: baseURL,
});

interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
}

const onSuccess = <T>(response: AxiosResponse<ApiResponse<T>>): T => {
  console.log("interceptor", response);
  console.log(baseURL,"baseUrllll")
  if (!response.data.success) {
    toast.error(response.data.message); 
  } else {
    toast.success(response.data.message); 
  }
  return response.data.data;
};

const onError = (err: AxiosError<ApiResponse>): Promise<never> => {
  console.log("interceptor", err);
  if (err.response) {
    console.error("Response data:", err.response.data); 
    if (err.response.status === 401) {
 
      window.location.pathname = "/";
    } else {
      toast.error(err.response.data.message || "خطایی رخ داده است."); 
    }
  } else {
    toast.error("خطا در برقراری ارتباط با سرور."); 
  }
  return Promise.reject(err);
};

http.interceptors.response.use(onSuccess, onError);



export default http;
