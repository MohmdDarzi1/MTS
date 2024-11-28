import { Box, Button, CardMedia, Typography, useTheme } from "@mui/material";
import React from "react";

const Travel = () => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light"; // بررسی وضعیت مود
 
  return (
    <>
      <Box
        sx={{
          width: "100%",
        //   height: "638px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: isLightMode ? "#282568" : theme.palette.background.paper,
        }}
      >
        <Box sx={{width:"100%",height:"450px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}> 
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
                backgroundColor: "#5751E1",
                borderRadius: "30px",
                fontSize: "12px",
                textAlign: "center",
                color: "#ffff",
              }}
            >
              چگونه سفر را شروع می کنیم
            </Button>
          </Box>
          <Box sx={{ width: "404px", height: "43px", marginTop: "10px" }}>
            <Typography
              sx={{
                fontFamily: "yekanbold",
                textAlign: "center",
                fontSize: "20px",
                color: theme.palette.mode === "dark" ? "#FFD700" : "#fff", // Dark mode title color
              }}
            >
              سفر یادگیری خود را از همین امروز شروع کنید!
            </Typography>
          </Box>
          <Box sx={{ width: "437px", height: "54px" }}>
            <Typography
              sx={{
                fontFamily: "iransans",
                textAlign: "center",
                fontSize: "12px",
                color: "#ACAACC",
              }}
            >
              شهودی Groove اعضای maketeam صندوق ورودی را با هم به اشتراک گذاشت
              سازماندهی، اولویت بندی و.در این قسمت.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
  <Box
    sx={{
      width: "300px",
      height: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <CardMedia
      image="src/assets/image/mts/SVG.png"
      sx={{ width: "150px", height: "150px" }}
    />
    <Typography sx={{ textAlign: "center", color: "#ffff" }}>
      دریافت گواهی آنلاین
    </Typography>
    <Typography sx={{ textAlign: "center", color: "#ffff" }}>
      گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.
    </Typography>
  </Box>
  <Box
    sx={{
      width: "300px",
      height: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <CardMedia
      image="src/assets/image/mts/SVG.png"
      sx={{ width: "150px", height: "150px" }}
    />
    <Typography sx={{ textAlign: "center", color: "#ffff" }}>
      دریافت گواهی آنلاین
    </Typography>
    <Typography sx={{ textAlign: "center", color: "#ffff" }}>
      گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.
    </Typography>
  </Box>
  <Box
    sx={{
      width: "300px",
      height: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <CardMedia
      image="src/assets/image/mts/SVG.png"
      sx={{ width: "150px", height: "150px" }}
    />
    <Typography sx={{ textAlign: "center", color: "#ffff" }}>
      دریافت گواهی آنلاین
    </Typography>
    <Typography sx={{ textAlign: "center", color: "#ffff" }}>
      گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.
    </Typography>
  </Box>
  <Box
    sx={{
      width: "300px",
      height: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <CardMedia
      image="src/assets/image/mts/SVG.png"
      sx={{ width: "150px", height: "150px" }}
    />
    <Typography sx={{ textAlign: "center", color: "#ffff" }}>
      دریافت گواهی آنلاین
    </Typography>
    <Typography sx={{ textAlign: "center", color: "#ffff" }}>
      گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.
    </Typography>
  </Box>
</Box>



        </Box>
      </Box>
    </>
  );
};

export default Travel;
