import React, { useEffect, useState } from "react";
import { Button, styled } from "@mui/material";
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
// استایل دکمه
const ScrollButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: "20px", // فاصله از پایین صفحه
  right: "20px",  // فاصله از سمت راست صفحه
  zIndex: 1000, // قرار دادن در بالای دیگر عناصر
  backgroundColor: theme.palette.primary.main,
  color: "#fff", // رنگ متن
  '&:hover': {
    backgroundColor: theme.palette.primary.dark, // رنگ دکمه در حالت hover
  },
}));

const Scrool: React.FC = () => {
  const [showButton, setShowButton] = useState(false); // وضعیت نمایش دکمه

  // تابعی برای مدیریت اسکرول
  const handleScroll = () => {
    setShowButton(window.scrollY > 300); // نمایش دکمه پس از اسکرول به 300 پیکسل
  };

  // تابعی برای رفتن به بالای صفحه
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // اسکرول نرم به بالا
  };

  // استفاده از useEffect برای اضافه کردن و حذف لیسنر اسکرول
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <ScrollButton onClick={scrollToTop}>
        <PanToolAltIcon sx={{width:"40px",height:"40px"}}/>
        </ScrollButton>
      )}
    </>
  );
};

export default Scrool;
