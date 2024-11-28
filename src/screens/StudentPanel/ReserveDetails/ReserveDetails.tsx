import { Box, CardMedia, Typography, IconButton, Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCourseReserve, useDeleteCourseReserve } from '../../../Core/Services/api/UserPanel';
import moment from 'moment';
import { string } from 'yup';
// import moment from 'moment-jalaali';  // استفاده از moment-jalaali برای تاریخ‌های فارسی

const ReserveDetails = () => {
  const token = localStorage.getItem("authToken");
  const { mutate:deleteCourse, isError, data, error } = useDeleteCourseReserve()

  const { data: CourseReserve,refetch  } = useCourseReserve(token || "");
  const [reserves, setReserves] = useState(CourseReserve || []);
 

  useEffect(()=>{
if (CourseReserve) {
  setReserves(CourseReserve)
}
  },[CourseReserve])


  const handleDelete = (reserveId: string) => {
    if (!token) {
      alert("توکن نامعتبر است!");
      return;
    }
  
    console.log("Deleting reserve with ID:", reserveId);  // بررسی reserveId
  
    deleteCourse(
      { token, reserveId,   },  // ارسال پارامترها به تابع deleteCourse
      {
        onSuccess: (data) => {
         setReserves((prev)=>prev.filter((proudct)=> proudct.reserveId !== reserveId))
          console.log("Deleted successfully:", data);
          // می‌توانید پاسخ موفقیت را در اینجا بررسی کنید
          refetch(); // در صورت لزوم به‌روزرسانی لیست رزروها
        },
        onError: (err) => {
          console.error("Error deleting course:", err); // نمایش خطا در کنسول
       
        },
      }
    );
  };
  

  return (
    <Box sx={{ direction: "rtl", padding: "20px" }}>
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#555",
          borderRadius: "20px",
          display: "grid",
          gridTemplateColumns: "100px 1fr 1fr 1fr 1fr 1fr 50px",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          color: "white",
          gap: "15px",
        }}
      >
        <Typography variant="subtitle1" textAlign="center">
          عکس دوره
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          نام دوره
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          نام استاد
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          شروع دوره
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          وضعیت دوره
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          وضعیت ثبت نام
        </Typography>
        <Typography variant="subtitle1" textAlign="center"></Typography>
      </Box>

      {/* Rows */}
      {CourseReserve?.map((course, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "20px",
            display: "grid",
            gridTemplateColumns: "100px 1fr 1fr 1fr 1fr 1fr 50px",
            alignItems: "center",
            padding: "15px",
            gap: "15px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
            marginY: "10px",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "80px", height: "60px", borderRadius: "10px" }}
            image={ "src/assets/image/mmd.jpg"}
            alt="Course image"
          />
          <Typography textAlign="center" variant="body1" sx={{ fontWeight: 500 }}>
            {course.courseName}
          </Typography>
          <Typography textAlign="center" variant="body1">
            {course.studentName}
          </Typography>
          <Typography textAlign="center" variant="body1">
            {moment(course.reserverDate, "YYYY/MM/DD").format("YYYY/MM/DD")} {/* تاریخ فارسی */}
          </Typography>
          <Typography textAlign="center" variant="body1">
            {course.accept}
          </Typography>
          <Typography
            textAlign="center"
            variant="body1"
            sx={{
              // color: course.payment === "تایید شده" ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {/* {course.payment} */}
          </Typography>

          {/* Delete Button */}
          <IconButton onClick={() => handleDelete(course.reserveId)} sx={{ color: "red" }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      
      <Stack spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Pagination count={10} variant="outlined" shape="rounded" />
        
      </Stack>
    </Box>
  );
};

export default ReserveDetails;
