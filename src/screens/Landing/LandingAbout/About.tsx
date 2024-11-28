import { Box, Button, CardMedia, Typography, useTheme } from "@mui/material";
import React from "react";
import AboutRight from "./AboutRight";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AboutLeft from "./AboutLeft";


const About = () => {
  const theme = useTheme();
  return (
    <>
 <Box
  sx={{
    width: "100%",
    height: "750px",
    border: "1px solid #e0e0e0",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "150px",
    backgroundColor: theme.palette.background.paper,
    // backgroundColor: "#f5f5f5", // رنگ پس زمینه ملایم‌تر
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // سایه برای جعبه اصلی
    borderRadius: "15px", // گوشه‌های گرد
  }}
>
  <AboutRight />
 <AboutLeft/>
</Box>

    </>
  );
};

export default About;
