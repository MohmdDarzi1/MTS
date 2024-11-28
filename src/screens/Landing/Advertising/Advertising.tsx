import { Box, CardMedia, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import ButtonComponent from "../../../Components/Common/ButtonComponent";

const Advertising = () => {
  const theme = useTheme(); // دسترسی به تم

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "380px",
          backgroundColor: theme.palette.mode === "dark" ? "#333" : "#5751E1", // تغییر رنگ بر اساس حالت
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "100%",
            position: "relative",
          }}
        >
          <CardMedia
            component={"img"}
            image="src/assets/image/png/newsletter_shape02.png.png"
            sx={{
              width: "15%",
              height: "auto",
              position: "relative",
              top: "100px",
              right: "370px",
            }}
          />
          <CardMedia
            component={"img"}
            image="src/assets/image/png/newsletter_shape01.png.png"
            sx={{
              width: "100%",
              height: "auto",
              position: "relative",
              top: "120px",
            }}
          />
          <CardMedia
            component={"img"}
            image="src/assets/image/png/newsletter_img.png.png"
            sx={{
              width: "404px",
              height: "386px",
              position: "absolute",
              top: "50%", 
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />
        </Box>

        <Box
          sx={{
            flexDirection:"column",
            width: "830px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "537px", height: "86px" }}>
            <Typography
              sx={{ 
                fontSize: "30px", 
                fontFamily: "iransans", 
                color: theme.palette.mode === "dark" ? "#ffffff" : "#ffff" // تغییر رنگ متن در حالت دارک
              }}
            >
              می خواهید از دوره های جدید در جریان باشید؟
            </Typography>
            <CardMedia
              component={"img"}
              image="src/assets/image/png/newsletter_shape03.png.png"
              sx={{
                width:"333px",
                position:"relative",
                right:"500px",
                bottom:"150px"
              }}
            />
          </Box>
          <Box
            sx={{
              width: "536px",
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="ایمیل خود را وارد کنید"
              sx={{
                width: "534px",
                height: "58px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "40px", 
                  backgroundColor: theme.palette.mode === "dark" ? "#555" : "#fff", // تغییر رنگ پس زمینه
                },
              }}
            />
            <ButtonComponent />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Advertising;
