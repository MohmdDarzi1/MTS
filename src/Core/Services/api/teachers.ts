import { useQuery, UseQueryResult } from '@tanstack/react-query';

interface TeacherProfile {
  skills: string[]; // آرایه‌ای از مهارت‌ها
  histories: string[]; // آرایه‌ای از تاریخچه‌ها یا سوابق
  teacherId: number; // شناسه‌ی معلم
  fullName: string; // نام کامل معلم
  linkedinProfileLink: string; // لینک پروفایل لینکدین
  pictureAddress: string; // آدرس تصویر پروفایل
  courseCounts: number; // تعداد دوره‌ها
  newsCount: number; // تعداد اخبار
}

export const getTeachersDetails = async (teacherId: number): Promise<TeacherProfile[]> => {
    try {
        const response = await fetch(
            `https://classapi.sepehracademy.ir/api/Home/GetTeacherDetails?TeacherId=${teacherId}`, // استفاده از teacherId داینامیک
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res: TeacherProfile[] = await response.json();
        console.log(res, "TeacherProfile");

        return res; // اضافه کردن این خط برای بازگشت داده‌ها
    } catch (error) {
        console.error("Failed to fetch teacher details:", error);
        throw error;
    }
};

export const useGetTeachersDetails = (teacherId: number): UseQueryResult<TeacherProfile[], Error> => {
    return useQuery<TeacherProfile[], Error>({
      queryKey: ["getDetailsTeacher", teacherId],
      queryFn: () => getTeachersDetails(teacherId),
    });
};
