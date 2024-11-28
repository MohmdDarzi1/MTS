import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import { useGetTeachersDetails } from "../../Core/Services/api/teachers";
import { useGetLandingTeacher } from "../../Core/Services/api/Landing";

// type TeachersProps = {
//   teacherId: number
// }
const Teachers: React.FC = () => {
  // const {data}= useGetTeachersDetails(teacherId)
  // console.log(data,"teacherdetails")
  const { data, error, isLoading } = useGetLandingTeacher();
  if (isLoading) {
    return <Typography>در حال بارگذاری...</Typography>;
  }

  if (error) {
    return <Typography>خطا در بارگیری داده‌ها</Typography>;
  }

  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "150px", // تغییر ارتفاع به minHeight
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
          همه مربیان
        </Typography>
        <Typography
          sx={{
            width: "400px",
            height: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          صفحه اصلی{" "}
          <KeyboardArrowLeftIcon sx={{ width: "20px", height: "20px" }} />
          <Typography sx={{ color: "#5751E1" }}> مربیان</Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "grid", // استفاده از grid برای چیدمان
          gridTemplateColumns: "repeat(4, 1fr)", // تعیین تعداد ستون‌ها به ۴
          gap: "20px", 
          justifyContent: "center", 
          padding: "20px", 
        }}
      >
        {data?.map((teacher) => (
          <Box
            key={teacher.teacherId}
            sx={{
              width: "80%",
              // height: "700px",
              display: "flex",
              justifyContent: "center",
              // flexWrap: "wrap",
        // flexDirection:"column",
              alignItems: "center",
              margin: "auto",
              gap: "20px", // اضافه کردن فاصله بین باکس‌ها
            }}
          >
            <Box
              sx={{
                width: "306px",
                height: "176px",
                display: "flex",
                backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // اضافه کردن باکس شدو
                borderRadius: "10px", // گوشه‌های گرد
                overflow: "hidden", // جلوگیری از بیرون زدن محتوا
                transition: "transform 0.3s ease-in-out", // افکت تغییر اندازه
                "&:hover": {
                  transform: "scale(1.05)", // افکت در حالت هاور
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                onClick={() => navigate(`/MyTeacher/${teacher.teacherId}`)} // اصلاح مسیر
                component={"img"}
                image={teacher.pictureAddress || "src/assets/image/mmd.jpg"}
                sx={{ width: "156px" }}
              />
              <Box
                sx={{
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Typography sx={{ fontFamily: "yekanbold", fontSize: "16px" }}>
                  {/* محمد درزی */}
        {teacher.fullName || "محمد درزی"}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "yekanbold",
                    color: "#5751E1",
                    fontSize: "14px",
                    marginBottom: "8px",
                  }}
                >
                  {teacher.courseCounts} دوره
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <InstagramIcon sx={{ color: "#E1306C" }} />
                  <FacebookOutlinedIcon sx={{ color: "#1877F2" }} />
                  <WhatsAppIcon sx={{ color: "#25D366" }} />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Teachers;
