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

type CourseType = {
  courseId: string;
  tumbImageAddress: string;
  title: string;
  technologyList: string;
  levelName: string;
  currentUserRateNumber: number;
  currentRegistrants: number;
  statusName: string;
  teacherName: string;
  dissLikeCount: number;
  likeCount: number;
  lastUpdate: string; // اطمینان حاصل کنید که این مقدار همیشه تعریف شده است
  cost: number;
};

interface CartProps extends CourseType {
  searchValue: string; // Add searchValue prop
}

const Cart: React.FC<CartProps> = ({
  courseId,
  title,
  tumbImageAddress,
  technologyList,
  levelName,
  currentUserRateNumber,
  teacherName,
  dissLikeCount,
  likeCount,
  lastUpdate,
  cost,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detailCourse/${courseId}`); // تغییر مسیر به جزئیات دوره
  };

  return (
    <Box
      sx={{
        width: "340px",
        height: "auto",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "20px",
        boxShadow: theme.shadows[2],
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "pointer", // نشانگر ماوس به شکل دست تبدیل شود
      }}
      onClick={handleCardClick} // افزودن handler کلیک
    >
      <CardMedia
        component={"img"}
        image={tumbImageAddress || "src/assets/image/png/cardCourse.jpg"}
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
          color: theme.palette.text.primary,
          marginBottom: "8px",
        }}
      >
        {title}
      </Typography>

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
          {technologyList}
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
          {levelName}
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
            {currentUserRateNumber || 0}
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
            {teacherName}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              backgroundColor: theme.palette.grey[400],
              borderRadius: "50px",
            }}
          >
            <ThumbDownOffAltIcon sx={{ fontSize: "16px" }} />
            <Typography sx={{ fontSize: "14px" }}>{dissLikeCount}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              backgroundColor: theme.palette.grey[400],
              borderRadius: "50px",
            }}
          >
            <ThumbUpOffAltIcon sx={{ fontSize: "16px" }} />
            <Typography sx={{ fontSize: "14px" }}>{likeCount}</Typography>
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
            {(lastUpdate || "").split("T")[0]} {/* استفاده از مقدار پیش‌فرض */}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "yekanbold",
            fontSize: "16px",
            color: theme.palette.text.primary,
          }}
        >
          {cost?.toLocaleString() } تومان
        </Typography>
      </Box>
    </Box>
  );
};

export default Cart;
