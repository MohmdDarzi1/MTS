import { Box, CardMedia, Typography, useTheme } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import AnimationIcon from "@mui/icons-material/Animation";
import SchoolIcon from "@mui/icons-material/School";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment-jalaali";
interface Course {
  courseId: string;
  title: string;
  description: string;
  teacherName: string;
  typeName: string;
  tumbImageAddress: string;
  cost: string;
  levelName: string;
  commandCount: number;
  likeCount: number;
  dissLikeCount: number;
  lastUpdate: string;
  statusName: string;
  currentUserRateNumber: number;
}
interface CardCourseProps {
  course: Course; // تعریف prop به نام course
}

const CardCourse: React.FC<CardCourseProps> = ({ course }) => {
  console.log(course, "oke shod");
  const theme = useTheme();
  const navigate = useNavigate();

  const lastUpdateDate = course
    ? moment(course.lastUpdate).locale("fa").format("jYYYY/jMM/jDD")
    : "";

  return (
    <Box
      sx={{
        height: "500px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          width: "340px",
          height: "auto",
          backgroundColor: theme.palette.background.paper, // تغییر رنگ پس‌زمینه با توجه به تم
          borderRadius: "20px",
          boxShadow: theme.shadows[2], // استفاده از سایه‌های تم
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <CardMedia
          // onClick={() => navigate("/detailCourse")}
          onClick={() => navigate(`/detailCourse/${course.courseId}`)}
          // onClick={() => navigate(`/detailCourse/${course.courseId}`)} // استفاده از course.courseId
          component={"img"}
          // image="src/assets/image/png/cardCourse.jpg"
          image={
            course.tumbImageAddress === "null" || !course.tumbImageAddress
              ? "../src/assets/image/mts/courses_details.jpg.png"
              : course.tumbImageAddress
          }
          sx={{
            borderRadius: "12px",
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "yekanbold",
            textAlign: "center",
            color: theme.palette.text.primary, // تغییر رنگ متن با توجه به تم
            marginBottom: "8px",
          }}
        >
          {/* طراحی کامل گرافیک برای مبتدی ها */}
          {course.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            backgroundColor: theme.palette.background.default, // تغییر رنگ پس‌زمینه
            borderRadius: "8px",
            boxShadow: theme.shadows[1],
          }}
        >
          <Typography
            sx={{
              fontFamily: "yekanbold",
              fontSize: "14px",
              color: theme.palette.text.primary,
              padding: "5px 10px",
              backgroundColor: theme.palette.grey[400], // تغییر رنگ
              borderRadius: "50px",
            }}
          >
            {/* گرافیک */}
            {course.typeName}
          </Typography>
          <Typography
            sx={{
              fontFamily: "yekanbold",
              fontSize: "14px",
              color: theme.palette.text.primary,
              padding: "5px 10px",
              backgroundColor: theme.palette.grey[400],
              borderRadius: "50px",
            }}
          >
            طراحی
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <StarIcon sx={{ color: "#FFC224", fontSize: "18px" }} />
            <Typography
              sx={{
                fontFamily: "yekanbold",
                fontSize: "16px",
                color: theme.palette.text.primary,
              }}
            >
              {course.currentUserRateNumber}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            backgroundColor: theme.palette.background.default,
            borderRadius: "8px",
            boxShadow: theme.shadows[1],
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <PeopleIcon sx={{ color: "#4CAF50", fontSize: "18px" }} />
            <Typography
              sx={{
                fontFamily: "yekanbold",
                fontSize: "14px",
                color: theme.palette.text.primary,
              }}
            >
              {/* 12 */}
              {course.commandCount}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <AnimationIcon sx={{ color: "#FF9800", fontSize: "18px" }} />
            <Typography
              sx={{
                fontFamily: "yekanbold",
                fontSize: "14px",
                color: theme.palette.text.primary,
              }}
            >
              {course.levelName}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 16px",
            backgroundColor: theme.palette.background.default,
            borderRadius: "8px",
            boxShadow: theme.shadows[1],
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <SchoolIcon sx={{ color: "#161439", fontSize: "18px" }} />
            <Typography
              sx={{
                fontFamily: "yekanbold",
                fontSize: "14px",
                color: theme.palette.text.primary,
              }}
            >
              {/* محمد درزی */}
              {course.teacherName}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                backgroundColor: theme.palette.grey[400], // تغییر رنگ
                borderRadius: "50px",
              }}
            >
              <ThumbDownOffAltIcon sx={{ fontSize: "16px" }} />
              <Typography sx={{ fontSize: "14px" }}>
                {course.dissLikeCount}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                backgroundColor: theme.palette.grey[400], // تغییر رنگ
                borderRadius: "50px",
              }}
            >
              <ThumbUpOffAltIcon sx={{ fontSize: "16px" }} />
              <Typography sx={{ fontSize: "14px" }}>
                {course.likeCount}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 16px",
            backgroundColor: theme.palette.background.default,
            borderRadius: "8px",
            boxShadow: theme.shadows[1],
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <CalendarMonthIcon
              sx={{ fontSize: "18px", color: theme.palette.text.primary }}
            />
            <Typography sx={{ fontSize: "14px", fontFamily: "yekanbold" }}>
              {/* 1403/5/16 */}
              {lastUpdateDate}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "yekanbold",
              fontSize: "16px",
              color: theme.palette.text.primary,
            }}
          >
            {/* 1,600,000 */}
            {course.cost}
            تومان
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardCourse;
