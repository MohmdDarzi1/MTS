import { Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import RightBox from "./RightBox";
import TeacherName from "./TeacherName";
import TeacherCourse from "./TeacherCourse";
import { useParams } from "react-router-dom";
import { useGetTeachersDetails } from "../../Core/Services/api/teachers";

interface TeacherProfile {
  skills: string[];
  histories: string[];
  teacherId: number;
  fullName: string;
  linkedinProfileLink: string;
  pictureAddress: string;
  courseCounts: number;
  newsCount: number;
  // به اینجا ویژگی‌های جدید را اضافه کنید
  subject?: string; // این ویژگی‌ها را به صورت اختیاری تعریف کنید
  email?: string;
  phone?: string;
  description?: string;
}

interface TeacherProfileProps {
  teacher: TeacherProfile;
}

const MyTeacher: React.FC <TeacherProfileProps>= () => {
  const { teacherId } = useParams<{ teacherId: string }>();
  const teacherIdNum = teacherId ? parseInt(teacherId) : 0;

  const { data, isLoading, isError } = useGetTeachersDetails(teacherIdNum);
console.log(data,"teachermyغغ")
  // مدیریت حالت بارگذاری و خطا
  if (isLoading) {
    return <Typography>در حال بارگذاری...</Typography>;
  }

  if (isError || !data || data.length === 0) {
    return <Typography>معلمی پیدا نشد.</Typography>;
  }

  const teacher: TeacherProfile = data[0]; // دریافت اولین معلم

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "150px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#f6eff9",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            fontFamily: "yekanbold",
          }}
        >
          {teacher?.fullName || "نام معلم"}
        </Typography>
        <Typography
          sx={{
            width: "1000px",
            minHeight: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          صفحه اصلی{" "}
          <KeyboardArrowLeftIcon sx={{ width: "20px", height: "20px" }} />
          <Typography>اساتید</Typography>
          <Typography
            sx={{
              minHeight: "20px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <KeyboardArrowLeftIcon sx={{ width: "20px", height: "20px" }} />
            <Typography sx={{ color: "#5751E1" }}>
              {teacher?.fullName || "نام معلم"}
            </Typography>
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          direction: "ltr",
        }}
      >
   <TeacherName
          fullName={teacher?.fullName}
          subject={teacher?.subject || "موضوع مشخص نشده"}
          email={teacher?.email || "ایمیل مشخص نشده"}
          phone={teacher?.phone || "شماره تماس مشخص نشده"}
          pictureAddress={teacher?.pictureAddress}
          description={teacher?.description || "توضیحات مشخص نشده"}
        />
        <RightBox />
      </Box>
      <TeacherCourse teacherId={teacherIdNum} /> {/* ارسال teacherId به TeacherCourse */}
    </>
  );
};

export default MyTeacher;
