import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Scrool from "../../../Components/Common/Scrool";
import { useGetLanding } from "../../../Core/Services/api/Landing";

const LandingData = () => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  // دریافت اطلاعات از useGetLanding
  const { data, isLoading, error } = useGetLanding();

  console.log("Landing Data:", data);
  console.log("Loading Status:", isLoading);
  console.log("Error:", error);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          border: "1px solid #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "250px",
            border: "1px solid #ccc",
            backgroundColor: isLightMode ? "#282568" : theme.palette.background.paper,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "40px",
            gap: "50px",
          }}
        >
          {isLoading ? (
            <Typography sx={{ color: "#fff" }}>در حال بارگذاری...</Typography>
          ) : error ? (
            <Typography sx={{ color: "#fff" }}>خطا در دریافت داده</Typography>
          ) : data && data ? ( // چک کردن اینکه data و data.data وجود دارند
            <>
              <Box
                sx={{
                  fontSize: "60px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {data?.courseCount || 0} {/* اگر courseCount موجود نبود، صفر نمایش دهد */}
                <Typography>تعداد دوره‌ها</Typography>
              </Box>
              <Box
                sx={{
                  fontSize: "60px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {data?.teacherCount || 0}
                <Typography>تعداد اساتید</Typography>
              </Box>
              <Box
                sx={{
                  fontSize: "60px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {data?.studentCount || 0}
                <Typography>تعداد دانشجویان</Typography>
              </Box>
              <Box
                sx={{
                  fontSize: "60px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {data?.newsCount || 0}
                <Typography>تعداد اخبار</Typography>
              </Box>
            </>
          ) : (
            <Typography sx={{ color: "#fff" }}>داده‌ای برای نمایش وجود ندارد</Typography>
          )}
        </Box>
        <Scrool />
      </Box>
    </>
  );
};

export default LandingData;
