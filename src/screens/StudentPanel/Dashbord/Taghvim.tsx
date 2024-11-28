import { Box } from '@mui/material'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css' // ضروری است که استایل های اولیه تقویم را وارد کنید

const Taghvim = () => {
    const [date, setDate] = useState<Date | null>(new Date());

  return (
    <Box
      sx={{
        width: "275px",
        height: "320px", // افزایش ارتفاع برای داشتن فضای بیشتر
        borderRadius: "20px", // گوشه‌های گردتر
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)", // سایه بزرگتر برای عمق بیشتر
        overflow: "hidden", // جلوگیری از بیرون رفتن محتوا
        backgroundColor: (theme) => theme.palette.background.paper, // استفاده از رنگ پس‌زمینه تم
      }}
    >
      <Calendar
        onChange={(value) => setDate(value as Date)}
        value={date}
        locale="fa-IR"
        tileClassName="calendar-tile" // استفاده از یک کلاس سفارشی برای تنظیمات استایل
        next2Label={null} // مخفی کردن دکمه‌های ماه بعد و قبل در حالت صفحه کوچک
        prev2Label={null}
      />
    </Box>
  )
}

export default Taghvim;
