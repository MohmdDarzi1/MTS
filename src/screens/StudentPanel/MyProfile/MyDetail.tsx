import { Box, Typography, InputBase, CardMedia, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGetMyCourses } from "../../../Core/Services/api/UserPanel";
import { useGetSearchCard } from "../../../Core/Services/api/courses";

export type CourseDetails = {
  classRoomName: string; // "ClassRoom 2"
  cost: string; // "500000.00"
  courseGroupId: number; // 20315
  courseId: string; // "c370355d-2f31-ef11-b6c9-9b4d470c6650"
  courseTitle: string; // "دوره جامع  UI/UX"
  describe: string; // "{\"time\":1720643269373,\"blocks\":[],\"version\":\"2.29.1\"}"
  fullName: string; // "حامد-نظری"
  groupName: string; // "classRoom 1"
  isActive: boolean; // true
  isExpire: boolean; // false
  isdelete: boolean; // false
  lastUpdate: string; // "2024-11-07T17:27:54.757"
  levelName: string; // "متوسط"
  paymentStatus: string; // "پرداخت نشده"
  statusName: string; // "شروع ثبت نام"
  studentId: number; // 40341
  teacherId: number; // 20208
  termName: string; // "تابستان 1403"
  tumbImageAddress: string; // URL of the image
  typeName: string; // "آنلاین"
};

interface Searched {
  SearchValue: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyDetail: React.FC<Searched> = ({ SearchValue, handleSearchChange }) => {
  const token = localStorage.getItem("authToken");
  const [debouncedSearchValue, setDebouncedSearchValue] =
    useState<string>(SearchValue);

    useEffect(()=>{
setDebouncedSearchValue(SearchValue)
    },[SearchValue])

    const { data } = useGetMyCourses(token || "", debouncedSearchValue) as {
      data: {
        listOfMyCourses: CourseDetails[];
      };
    };
    

  const [date, setDate] = useState<Date | null>(new Date());
  const theme = useTheme();

  const handleChange = (newDate: Date | null) => {
    setDate(newDate);
  };

  return (
    <Box sx={{ direction: "rtl", padding: "16px" }}>
      {/* هدر */}
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #ccc",
          marginBottom: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: theme.palette.mode === "dark" ? "#fff" : "#333",
          }}
        >
          دوره‌های من
        </Typography>
      </Box>

      {/* جستجو و فیلتر تاریخ */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* جستجو */}
        <Box
          sx={{
            flex: 1,
            borderRadius: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              marginBottom: "8px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon
              sx={{ width: "20px", height: "20px", marginRight: "4px" }}
            />
            جستجو دوره
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "38px",
              padding: "4px",
            }}
          >
            <SearchIcon sx={{ color: "#aaa", marginLeft: "8px" }} />
            <InputBase
              value={SearchValue}
              onChange={handleSearchChange}
              placeholder="جستجو کنید..."
              sx={{
                flex: 1,
                marginLeft: "8px",
                padding: "8px",
                borderRadius: "38px",
              }}
            />
          </Box>
        </Box>

        {/* تاریخ */}
        <Box
          sx={{
            flex: 1,
            borderRadius: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              marginBottom: "8px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DateRangeIcon
              sx={{ width: "20px", height: "20px", marginRight: "4px" }}
            />
            تاریخ دوره
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "8px",
              padding: "8px",
              position: "relative",
            }}
          >
            <DatePicker
              selected={date}
              onChange={handleChange}
              dateFormat="yyyy/MM/dd"
              isClearable
              placeholderText="تاریخ را انتخاب کنید"
              customInput={
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <DateRangeIcon
                    sx={{ position: "absolute", left: "10px", color: "#aaa" }}
                  />
                  <InputBase
                    value={date ? date.toLocaleDateString("fa-IR") : ""}
                    readOnly
                    sx={{
                      flex: 1,
                      paddingLeft: "36px",
                      marginLeft: "8px",
                      borderRadius: "8px",
                      outline: "none",
                      border: "none",
                    }}
                  />
                </Box>
              }
            />
          </Box>
        </Box>
      </Box>

      {/* لیست دوره‌ها */}
      <Box sx={{ width: "100%", flexDirection: "column", gap: "20px" }}>
        {/* هدر جدول */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#555",
            borderRadius: "20px",
            display: "grid",
            gridTemplateColumns: "100px 1fr 1fr 1fr 1fr",
            alignItems: "center",
            padding: "10px 20px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            color: "white",
            gap: "20px",
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
        </Box>

        {/* ردیف‌ها */}
        {data?.listOfMyCourses?.length > 0 ? (
          data.listOfMyCourses.map((course, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#424242" : "#f8f8f8",
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
                borderRadius: "20px",
                display: "grid",
                gridTemplateColumns: "100px 1fr 1fr 1fr 1fr",
                alignItems: "center",
                padding: "10px 20px",
                gap: "20px",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0px 4px 12px rgba(255, 255, 255, 0.1)"
                    : "0px 4px 12px rgba(0, 0, 0, 0.05)",
                marginBottom: "20px",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#616161" : "#e8e8e8",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "80px", height: "60px", borderRadius: "10px" }}
                image={
                  !course.tumbImageAddress
                    ? "../src/assets/image/mts/courses_details.jpg.png"
                    : course.tumbImageAddress
                }
                // alt={course.fullName}
              />
              <Typography textAlign="center">{course.courseTitle}</Typography>
              <Typography textAlign="center">{course.fullName}</Typography>
              <Typography textAlign="center">{course.lastUpdate}</Typography>
              <Typography textAlign="center">{course.statusName}</Typography>
            </Box>
          ))
        ) : (
          <Typography textAlign="center" color="textSecondary">
            هیچ دوره‌ای یافت نشد.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default MyDetail;
