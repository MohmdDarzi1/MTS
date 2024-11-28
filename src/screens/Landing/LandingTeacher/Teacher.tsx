import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useGetLandingTeacher } from "../../../Core/Services/api/Landing";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const navigate =useNavigate()
  const { data, error, isLoading } = useGetLandingTeacher();

  if (isLoading) {
    return <Typography>در حال بارگذاری...</Typography>;
  }

  if (error) {
    return <Typography>خطا در بارگیری داده‌ها</Typography>;
  }
  
 const TeacherData = data?.slice(0,4)
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "500px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Button
              sx={{
                width: "160px",
                height: "30px",
                backgroundColor: "#EFEEFE",
                borderRadius: "30px",
              }}
            >
              معلم های برتر
            </Button>
            <Typography
              sx={{
                width: "348px",
                height: "143px",
                fontSize: "36px",
                color: "#161439",
                fontFamily: "yekanbold",
              }}
            >
              کلاس برتر ما و مربیان خبره در یک مکان
            </Typography>
            <Typography
              sx={{
                width: "384px",
                fontSize: "16px",
                color: "#161439",
                fontFamily: "iransans",
              }}
            >
              هنگامی که یک چاپگر ناشناس یک گالری از نوع و کتاب نمونه درهم درست
              شده باقی نمانده است فقط پنج قرن
            </Typography>
            <Button
              sx={{
                width: "217px",
                height: "50px",
                marginTop: "10px",
                backgroundColor: "#5751E1",
                borderRadius: "30px",
                color: "white",
                fontSize: "15px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", 
                "&:hover": {
                  backgroundColor: "#4745c8",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)", 
                },
              }}
            >
              همه مربیان را ببینید
              <KeyboardBackspaceIcon
                sx={{ width: "40px", height: "30px", marginLeft: "5px" }}
              />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "800px",
            height: "550px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {TeacherData?.map((teacher) => (
            <Box
            
              key={teacher.teacherId}
              sx={{
                width: "306px",
                height: "176px",
                display: "flex",
                margin: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <CardMedia
              onClick={()=>navigate("/teachers")}
                component={"img"}
                image={teacher.pictureAddress || "src/assets/image/comment1.png"}
                sx={{ width: "156px" }}
              />
              <Box
                sx={{
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ height: "20px" }}>
                  {teacher.fullName?.slice(0,7)}...
                </Typography>
                <Typography
                  sx={{
                    height: "20px",
                    fontFamily: "yekanbold",
                    color: "#5751E1",
                  }}
                >
                  {teacher.courseCounts} دوره
                </Typography>
                <Box sx={{ width: "100%", marginRight: "20px" }}>
                  <InstagramIcon />
                  <FacebookOutlinedIcon />
                  <WhatsAppIcon />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Teacher;
