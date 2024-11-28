import { Box, Button, CardMedia, Typography, useTheme } from '@mui/material';
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const AboutLeft = () => {
 const theme = useTheme()
  return (
    <>
      <Box
        sx={{
          width: "590px",
          height: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "background.default", // استفاده از رنگ پس‌زمینه تم
          borderRadius: "15px", // گوشه‌های گرد
          padding: "20px", // اضافه کردن فضای داخلی
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // سایه سبک برای جعبه داخلی
        }}
      >
        <Box sx={{ width: "187px", height: "31px", marginTop: "40px" }}>
          <Button
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#6200ea",
              color: "white",
              borderRadius: "30px",
              fontSize: "15px",
              textAlign: "center",
              transition: "background-color 0.3s ease", // انیمیشن تغییر رنگ
              "&:hover": {
                backgroundColor: "#3700b3", // رنگ جدید برای hover
              },
            }}
          >
            درباره ما بیشتر بدانید
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "491px",
            display: "flex",
            overflow: "hidden",
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
            
              color: theme.palette.mode === "dark" ? "#fff" : "#000", // Dark mode title color
              fontSize: "40px",
              fontFamily: "yekan",
              textAlign: "right",
              zIndex: 2,
            }}
          >
            هزاران
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "200px",
              overflow: "hidden",
              marginLeft: "20px", // فاصله بین المان‌ها
            }}
          >
            <CardMedia
              sx={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: -10,
                zIndex: 1,
              }}
              component="img"
              image="src/assets/image/mts/Vector(1).png"
              alt="background image"
            />

            <Typography
              sx={{
                position: "absolute",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                fontSize: "25px",
                fontFamily: "yekanBold",
                color: "white",
                textAlign: "center",
              }}
            >
              دوره های
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "350px", height: "48px", marginTop: "30px" }}>
          <Typography
            sx={{
              width: "491px",
              fontSize: "30px",
              fontFamily: "yekanBold",
              color: theme.palette.mode === "dark" ? "#fff" : "#000", // Dark mode title color
            }}
          >
            برتر اکنون در یک مکان
          </Typography>
        </Box>

        <Box sx={{ width: "564px", height: "84px", marginTop: "20px" }}>
          <Typography
            sx={{
              width: "100%",
              height: "84px",
              fontSize: "20px",
              color: theme.palette.mode === "dark" ? "#ccc" : "#000", // Dark mode title color
            }}
          >
            صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می‌کند
            سازماندهی، اولویت بندی و. در این قسمت از Smashing Pod ما هستیم صحبت در
            مورد پایه پلتفرم وب.
          </Typography>
        </Box>

        <Box sx={{ width: "100%", height: "150px", border: "1px solid transparent", marginTop: "30px" }}>
          <Box
            sx={{
              flexDirection: "column", // ستون برای ردیف های جداگانه
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "flex-start",
              backgroundColor: "#777", // رنگ ملایم پس زمینه برای دارک مود
              borderRadius: "15px",
              padding: "10px",
              gap: "10px", // فاصله بین ردیف‌ها
            }}
          >
            {/* اولین ردیف */}
            <Box
              sx={{
                display: "flex", // قرار دادن آیکون و متن در کنار هم
                alignItems: "center", // تراز کردن عمودی
                gap: "10px", // فاصله بین آیکون و متن
              }}
            >
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "100px",
                  backgroundColor: "#FFC224",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <KeyboardBackspaceIcon sx={{ width: "20px", height: "20px", color: "#161439" }} />
              </Box>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#f0f0f0" }}>
                بهترین مربیان
              </Typography>
            </Box>

            {/* دومین ردیف */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "100px",
                  backgroundColor: "#FFC224",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <KeyboardBackspaceIcon sx={{ width: "20px", height: "20px", color: "#161439" }} />
              </Box>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#f0f0f0" }}>
                برنامه دوره ای انعطاف پذیر
              </Typography>
            </Box>

            {/* سومین ردیف */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "100px",
                  backgroundColor: "#FFC224",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <KeyboardBackspaceIcon sx={{ width: "20px", height: "20px", color: "#161439" }} />
              </Box>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#f0f0f0" }}>
                از هر کجا به کلاس خود دسترسی داشته باشید
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "217px",
            height: "50px",
            marginTop: "5px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // سایه ملایم و نرم
            borderRadius: "30px", // اضافه کردن گردی به باکس
            transition: "0.3s", // انتقال نرم هنگام hover
            "&:hover": {
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)", // سایه قوی‌تر هنگام hover
            },
          }}
        >
          <Button
            sx={{
              width: "217px",
              height: "50px",
              backgroundColor: "#5751E1",
              borderRadius: "30px",
              color: "white",
              fontSize: "15px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // سایه ملایم و نرم
              "&:hover": {
                backgroundColor: "#4745c8", // تغییر رنگ پس‌زمینه هنگام hover
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)", // سایه قوی‌تر هنگام hover
              },
            }}
          >
            رایگان آزمایش کنید
            <KeyboardBackspaceIcon sx={{ width: "40px", height: "30px", marginLeft: "5px" }} />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AboutLeft;
