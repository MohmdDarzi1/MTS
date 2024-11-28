import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CardCourse from "../../Components/Common/CardCourse";
import { useGetTeachersDetails } from "../../Core/Services/api/teachers";
type TeacherCourseProps = {
  teacherId: number; // تعریف نوع برای props
};
const TeacherCourse: React.FC<TeacherCourseProps> = ({ teacherId }) => {

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "auto", // تغییر ارتفاع به صورت اتوماتیک
          padding: "40px 0", // فاصله درونی بالا و پایین
          backgroundColor: "#F8F9FA", // پس‌زمینه روشن
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px", // فاصله بین المان‌ها
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "auto",
            padding: "10px 20px",
            backgroundColor: "#5751E1", // رنگ پس‌زمینه برای متن
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // افکت سایه
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            دوره های این استاد
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around", // تراز بندی کارت‌ها
            alignItems: "center",
            width: "80%",
            gap: "20px", // فاصله بین کارت‌ها
            flexWrap: "wrap", // چینش کارت‌ها در صورت نیاز
          }}
        >
          {/* <CardCourse />
          <CardCourse />
          <CardCourse /> */}
          {/* <CardCourse/> */}
        </Box>
      </Stack>
    </>
  );
};

export default TeacherCourse;
