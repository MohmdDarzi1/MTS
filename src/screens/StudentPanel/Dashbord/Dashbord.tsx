import { Box, Typography, Button, useTheme, CardMedia } from "@mui/material";
import React, { useState } from "react";
import HelloMyName from "./HelloMyName";
import Percentages from "./Percentages";
import Taghvim from "./Taghvim";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CommentDashbord from "./CommentDashbord";
import {
  FavoriteCourse,
  usegetFavoriteCourse,
  UserProfile,
} from "../../../Core/Services/api/UserPanel";
import moment from "moment";

type ProfileData = {
  data: UserProfile | undefined;
};

const Dashbord: React.FC<ProfileData> = ({ data }) => {
  const token = localStorage.getItem("authToken");
  const { data: FavoriteCourse } = usegetFavoriteCourse(token || "");

  if (!data) {
    return <div>Loading...</div>;
  }

  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);

  const coursesToShow = showAll
    ? FavoriteCourse?.favoriteCourseDto
    : FavoriteCourse?.favoriteCourseDto.slice(0, 3);

  // Toggle function for "showAll"
  const handleShowAll = () => {
    setShowAll((prev) => !prev); // Toggle between showing all or just the first 3
  };
  const calculateProfileCompletion = (profile: UserProfile) => {
    // فیلدهایی که باید چک شوند
    const fields = [
      "fName",
      "lName",
      "email",
      "phoneNumber",
      "homeAdderess",
      "nationalCode",
      "gender",
      "birthDay",
      "linkdinProfile",
      "telegramLink",
      "userAbout",
    ];

    // شمارش تعداد فیلدهایی که مقدار دارند
    const filledFields = fields.reduce((count, field) => {
      if (profile[field as keyof UserProfile]) {
        return count + 1;
      }
      return count;
    }, 0);

    // محاسبه درصد
    return (filledFields / fields.length) * 100;
  };

  const completionPercentage = calculateProfileCompletion(data);

 
  return (
    <>
      <HelloMyName data={data} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <Box
          sx={{
            width: "528px",
            height: "287px",
            borderRadius: "15px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <CommentDashbord />
        </Box>

        <Taghvim />
        <Percentages
          totalFields={11}
          filledFields={Math.round((completionPercentage / 100) * 11)}
        />
      </Box>

      <Box sx={{ width: "97%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "white" : "#333",
            }}
          >
            جدید ترین دوره ها
          </Typography>

          <Button
            sx={{
              color: "#E1C461",
              display: "flex",
              alignItems: "center",
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={handleShowAll}
          >
            <KeyboardArrowLeftIcon sx={{ marginLeft: "5px" }} />
            {showAll ? "مشاهده کمتر" : "مشاهده همه"}
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderRadius: "20px",
            backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "white" : "#333",
            }}
          >
            عکس دوره
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "white" : "#333",
            }}
          >
            نام دوره
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "white" : "#333",
            }}
          >
            درباره دوره
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "white" : "#333",
            }}
          >
            استاد دوره
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "white" : "#333",
            }}
          >
            تاریخ دوره
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "white" : "#333",
            }}
          >
            سطح دوره
          </Typography>
        </Box>

        {coursesToShow?.map((course, index) => {
          const lastUpdateDate = course.lastUpdate
            ? moment(course.lastUpdate).locale("fa").format("YYYY/MM/DD")
            : "";

          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                borderRadius: "15px",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#424242" : "#fff",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                marginBottom: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "120px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                image={course.tumbImageAddress || "src/assets/image/2.png"}
                alt={course.courseTitle}
              />
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.mode === "dark" ? "white" : "#555",
                  fontWeight: "bold",
                  width: "150px",
                }}
              >
                {course.courseTitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.mode === "dark" ? "white" : "#555",
                  textAlign: "justify",
                  maxWidth: "180px",
                }}
              >
                {course.describe.slice(0, 40)}...
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.mode === "dark" ? "white" : "#555",
                  width: "120px",
                }}
              >
                {course.teacheName}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.mode === "dark" ? "white" : "#555",
                  width: "120px",
                }}
              >
                {lastUpdateDate}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.mode === "dark" ? "white" : "#555",
                  width: "80px",
                }}
              >
                {course.levelName}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Dashbord;
