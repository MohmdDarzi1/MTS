import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import HeroSectionRight from "./HeroSection/HeroSectionRight";
import HeroSectionLeft from "./HeroSection/HeroSectionLeft";
import Category from "./Category/Category";
import About from "./LandingAbout/About";
import LandingCourse from "./LandingCourses/LandingCourse";
import Advertising from "./Advertising/Advertising";
import Teacher from "./LandingTeacher/Teacher";
import LandingData from "./LandingData/LandingData";
import Questions from "./LandingQuestions/Questions";
import TeacherStudent from "./Teacher&student/TeacherStudent";
import Travel from "./travel/Travel";
import Scrool from "../../Components/Common/Scrool";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "../../redux/slice/darkmodeSlice";

const Landing = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectDarkMode); // دریافت وضعیت فعلی

  const theme = useTheme(); // دسترسی به تم فعلی

  const handleToggle = () => {
    dispatch(toggleDarkMode()); // تغییر حالت دارک و لایت
  };

  return (
    <>
      <Box
        flexDirection={"column"}
        sx={{
          height: "1200px",
          width: "100%",
          overflowY: "auto", // فقط اسکرول عمودی
          overflowX: "hidden", // مخفی کردن اسکرول افقی
          backgroundColor: theme.palette.background.default, // استفاده از پس‌زمینه تم
        }}
      >


        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            gap: "15px",
            backgroundColor: theme.palette.background.paper, // رنگ پس‌زمینه برای کادر داخلی
          }}
        >
          <HeroSectionRight />
          <HeroSectionLeft />
        </Box>

        <Category />
        <About />
        <LandingCourse />
        <Advertising />
        <Teacher />
        <LandingData />
        <Questions />
        <Travel />
        <TeacherStudent />
        <Scrool />
      </Box>
    </>
  );
};

export default Landing;
