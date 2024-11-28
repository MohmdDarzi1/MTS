import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type LikeComment = {
  id: boolean;
  message: string;
  success: boolean;
  errors: null;
};

export const addLikeCoureseComment = async (
  CourseCommandId: string,
  token: string
): Promise<LikeComment> => {
  try {
    const response = await axios.post(
      `https://classapi.sepehracademy.ir/api/Course/AddCourseCommentLike?CourseCommandId=${CourseCommandId}`,
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

export const useAddLikeCoureseComment = (token: string) => {
  // اضافه کردن نوع پارامتر `string` به تابع
  return useMutation<LikeComment, Error, string>({
    mutationKey: ["getLikeCourseComment"],
    mutationFn: (CourseCommandId) =>
      addLikeCoureseComment(CourseCommandId, token),
  });
};

type DisLikeComment = {
  id: boolean;
  message: string;
  success: boolean;
  errors: null;
};

export const addDisLikeCoureseComment = async (
  CourseCommandId: string,
  token: string
): Promise<DisLikeComment> => {
  try {
    const response = await axios.post(
      `https://classapi.sepehracademy.ir/api/Course/AddCourseCommentDissLike?CourseCommandId=${CourseCommandId}`,
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

export const useAddDisLikeCoureseComment = (token: string) => {
  // اضافه کردن نوع پارامتر `string` به تابع
  return useMutation<DisLikeComment, Error, string>({
    mutationKey: ["getLikeCourseComment"],
    mutationFn: (CourseCommandId) =>
      addDisLikeCoureseComment(CourseCommandId, token),
  });
};
type Comment = {
  id: boolean;
  message: string;
  success: boolean;
  errors: null;
};

type AddCommentData = {
  CourseId: string;
  Title: string;
  Describe: string;
};

export const addComment = async (
  token: string,
  { CourseId, Title, Describe }: AddCommentData
): Promise<Comment> => {
  try {
    const formData = new FormData();
    formData.append("CourseId", CourseId);
    formData.append("Title", Title);
    formData.append("Describe", Describe);

    const response = await axios.post(
      `https://classapi.sepehracademy.ir/api/Course/AddCommentCourse`,
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

export const useAddComment = (token: string) => {
  return useMutation<Comment, Error, AddCommentData>({
    mutationKey: ["postCommentCourse"],
    mutationFn: (commentData: AddCommentData) => addComment(token, commentData),
  });
};





type ReplayComment = {
  id: boolean;
  message: string;
  success: boolean;
  errors: null;
};

type AddReplayCommentData = {
  CommentId: string;
  CourseId: string;
  Title: string;
  Describe: string;
};

export const addReplayComment = async (
  token: string,
  { CommentId, CourseId, Title, Describe }: AddReplayCommentData
): Promise<ReplayComment> => {
  try {
    const formData = new FormData();
    formData.append("CourseId", CourseId);
    formData.append("CommentId", CommentId);
    formData.append("Title", Title);
    formData.append("Describe", Describe);

    const response = await axios.post(
      `https://classapi.sepehracademy.ir/api/Course/AddReplyCourseComment`,
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

export const useAddReplayComment = (token: string) => {
  return useMutation<ReplayComment, Error, AddReplayCommentData>({
    mutationKey: ["postCommentCourse"],
    mutationFn: (commentData: AddReplayCommentData) =>
      addReplayComment(token, commentData),
  });
};
