import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CardCourse from "../../../Components/Common/CardCourse";
import { useGetCourseTop } from "../../../Core/Services/api/courses"; // مسیر هوک را به درستی تنظیم کنید

const LandingCourse: React.FC = () => {
  const count = 4; // تعداد دوره‌ها
  const { data, error, isLoading } = useGetCourseTop(count);

  if (isLoading) return <Typography>در حال بارگذاری...</Typography>;
  if (error) return <Typography>خطا در بارگذاری دوره‌ها</Typography>;
  
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #ccc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "187px", height: "31px", marginTop: "40px" }}>
          <Button
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#EFEEFE",
              borderRadius: "30px",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            دوره های کلاس برتر
          </Button>
        </Box>
        <Box sx={{ width: "404px", height: "43px" }}>
          <Typography
            sx={{
              fontFamily: "yekanbold",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            بهترین دوره های آموزشی جهان ما را کاوش کنید
          </Typography>
        </Box>
        <Box sx={{ width: "437px", height: "54px" }}>
          <Typography
            sx={{
              fontFamily: "iransans",
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است
          </Typography>
        </Box>
      </Box>

      {/* لیست دوره‌ها */}
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          height: "550px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
    { 
      data?.map((course) => (
        <CardCourse key={course.courseId} course={course}  />
      ))
    //  (
    //   <Typography>دوره‌ای برای نمایش وجود ندارد</Typography>
    // )
    }
      
      </Box>
    </Box>
  );
};

export default LandingCourse;
