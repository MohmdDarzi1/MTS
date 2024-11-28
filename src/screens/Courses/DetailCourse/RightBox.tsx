import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  CourseDetails,
  useCourseReserveAdd,
} from "../../../Core/Services/api/courses";
import paymentImage from "/src/assets/image/mts/payment.png.png";
// import moment from "moment-jalaali";
import moment from "moment";
import "moment-jalaali";
import { toast } from "react-toastify";
// import { useCourseReserve } from "../../../Core/Services/api/UserPanel";

interface DetailBoxProps {
  data: CourseDetails;
}
type ReserveData = {
  courseId: string;
  token: string;
};
const RightBox: React.FC<DetailBoxProps> = ({ data }) => {
  const token = localStorage.getItem("authToken");

  const { mutate } = useCourseReserveAdd();
  const handleReserve = () => {
    mutate(
      {
        courseId: data.courseId,
        command: "someCommand", // مقدار مناسب برای command را وارد کنید
        token: token || "",
      },
      {
        onSuccess: () => {
          toast.success("رزرو دوره با موفقیت انجام شد! 🎉");
        },

        onError: (error: any) => {
          toast.info("قبلا دوره  رزرو شد", error);
        },
      }
    );
  };

  const endtime = data
    ? moment(data.endTime).locale("fa").format("YYYY/MM/DD")
    : "";
  // const {data:CourseReserve}=useCourseReserve(token|| "")
  return (
    <>
      <Box
        sx={{
          width: "80%",
          height: "100px",
          backgroundColor: "#5751E1",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ color: "#888", textDecoration: "line-through" }}>
            هزینه این دوره 320000
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>
            {data?.cost} تومان
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        {" "}
        <Box
          sx={{
            width: "90%",
            height: "500px",
            // border: "1px solid #ccc",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ fontFamily: "yekanbold", fontSize: "20px" }}>
            دوره شامل:
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "36px",
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid #555",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ display: "flex" }}>
              <SignalCellularAltIcon />
              مرحله
            </Typography>
            <Typography sx={{ color: "#333" }}>
              {data.courseLevelName}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "36px",
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid #555",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ display: "flex" }}>
              <SignalCellularAltIcon />
              مدت زمان
            </Typography>
            <Typography sx={{ color: "#333" }}>
              {data.courseStatusName}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "36px",
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid #555",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ display: "flex" }}>
              <SignalCellularAltIcon />
              تاریخ پایان
            </Typography>
            <Typography sx={{ color: "#333" }}>{endtime}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "36px",
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid #555",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ display: "flex" }}>
              <SignalCellularAltIcon />
              آزمون
            </Typography>
            <Typography sx={{ color: "#333" }}>
              {data.courseGroupCount}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "36px",
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid #555",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ display: "flex" }}>
              <SignalCellularAltIcon />
              گواهینامه
            </Typography>
            <Typography sx={{ color: "#333" }}>{data.techs}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "36px",
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid #555",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ display: "flex" }}>
              <SignalCellularAltIcon />
              فارغ تحصیلی
            </Typography>
            <Typography sx={{ color: "#333" }}>
              +{data.currentRegistrants}
            </Typography>
          </Box>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "100px",
                border: "1px solid #555",
                borderRadius: "30px",
                marginTop: "20px",
              }}
            >
              <Typography
                textAlign={"right"}
                sx={{ margin: "10px", fontSize: "20px" }}
              >
                پرداخت امن:
                <CardMedia
                  sx={{ width: "100%", height: "30px" }}
                  image={paymentImage}
                />
              </Typography>
            </Box>
            <Box
              sx={{
                width: "80%",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "30px",
              }}
            >
              <Button
                onClick={handleReserve}
                sx={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#FFC224",
                  borderRadius: "30px",
                  color: "black",
                  fontSize: "20px",
                  fontFamily: "yekanbold",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // سایه زیبا
                  transition: "all 0.3s ease", // انیمیشن هنگام هاور
                  "&:hover": {
                    backgroundColor: "#FFA500", // تغییر رنگ در حالت هاور
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", // سایه قوی‌تر در حالت هاور
                    transform: "translateY(-3px)", // بالا آمدن دکمه در حالت هاور
                  },
                }}
              >
                ثبت نام در دوره
                <KeyboardBackspaceIcon
                  sx={{ fontSize: "28px", marginLeft: "10px" }}
                />{" "}
                {/* فاصله بین آیکون و متن */}
              </Button>
            </Box>
          </Box>
        </Box>{" "}
      </Box>
    </>
  );
};

export default RightBox;
