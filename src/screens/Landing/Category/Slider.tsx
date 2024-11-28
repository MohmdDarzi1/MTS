import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import "swiper/swiper-bundle.css";

const Slider = () => {
  const theme = useTheme(); // دسترسی به تم برای تغییر رنگ‌ها

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Stack
        sx={{
          width: "1220px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: theme.palette.background.paper, // استفاده از رنگ پس‌زمینه تم
        }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          width={250}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={false} // غیرفعال کردن حالت لوپ
        >
          {/* اسلایدها با تصاویر */}
          <SwiperSlide>
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
    <img
      src="src/assets/image/mts/landing.png"
      alt="Slide 4"
      style={{
        width: "80%",
        height: "auto", // برای تنظیم خودکار ارتفاع نسبت به عرض
        borderRadius: "15px", // گرد کردن گوشه‌ها
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه به تصویر
        marginBottom: "20px",
      }}
    />
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "22px", // افزایش اندازه فونت
          fontWeight: "bold",
          color: theme.palette.text.primary,
          marginBottom: "10px", // فاصله بین عنوان و متن دوم
        }}
      >
        طراحی گرافیک
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: theme.palette.text.secondary,
          fontStyle: "italic", // اضافه کردن استایل ایتالیک برای ظاهری متفاوت
        }}
      >
        دوره شماره 2
      </Typography>
    </Box>
  </Box>
</SwiperSlide>
<SwiperSlide>
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
    <img
      src="src/assets/image/mts/landing.png"
      alt="Slide 4"
      style={{
        width: "80%",
        height: "auto", // برای تنظیم خودکار ارتفاع نسبت به عرض
        borderRadius: "15px", // گرد کردن گوشه‌ها
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه به تصویر
        marginBottom: "20px",
      }}
    />
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "22px", // افزایش اندازه فونت
          fontWeight: "bold",
          color: theme.palette.text.primary,
          marginBottom: "10px", // فاصله بین عنوان و متن دوم
        }}
      >
        طراحی گرافیک
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: theme.palette.text.secondary,
          fontStyle: "italic", // اضافه کردن استایل ایتالیک برای ظاهری متفاوت
        }}
      >
        دوره شماره 2
      </Typography>
    </Box>
  </Box>
</SwiperSlide>
<SwiperSlide>
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
    <img
      src="src/assets/image/mts/landing.png"
      alt="Slide 4"
      style={{
        width: "80%",
        height: "auto", // برای تنظیم خودکار ارتفاع نسبت به عرض
        borderRadius: "15px", // گرد کردن گوشه‌ها
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه به تصویر
        marginBottom: "20px",
      }}
    />
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "22px", // افزایش اندازه فونت
          fontWeight: "bold",
          color: theme.palette.text.primary,
          marginBottom: "10px", // فاصله بین عنوان و متن دوم
        }}
      >
        طراحی گرافیک
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: theme.palette.text.secondary,
          fontStyle: "italic", // اضافه کردن استایل ایتالیک برای ظاهری متفاوت
        }}
      >
        دوره شماره 2
      </Typography>
    </Box>
  </Box>
</SwiperSlide>



          <SwiperSlide>
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
    <img
      src="src/assets/image/mts/landing.png"
      alt="Slide 4"
      style={{
        width: "80%",
        height: "auto", // برای تنظیم خودکار ارتفاع نسبت به عرض
        borderRadius: "15px", // گرد کردن گوشه‌ها
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // اضافه کردن سایه به تصویر
        marginBottom: "20px",
      }}
    />
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "22px", // افزایش اندازه فونت
          fontWeight: "bold",
          color: theme.palette.text.primary,
          marginBottom: "10px", // فاصله بین عنوان و متن دوم
        }}
      >
        طراحی گرافیک
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: theme.palette.text.secondary,
          fontStyle: "italic", // اضافه کردن استایل ایتالیک برای ظاهری متفاوت
        }}
      >
        دوره شماره 2
      </Typography>
    </Box>
  </Box>
</SwiperSlide>

        </Swiper>
      </Stack>
    </Box>
  );
};

export default Slider;
