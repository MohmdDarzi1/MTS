import { Box, CardMedia, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

type StudentData = {
  currentPictureAddress: string | null;
  profileCompletionPercentage: number;
  userImage: Array<{
    id: string;
    userProfileId: number;
    pictureName: string;
    puctureAddress: string;
    insertDate: string;
  }>;
  email: string;
  phoneNumber: string;
  lName: string | null;
  fName: string | null;
  userAbout: string | null;
  linkdinProfile: string | null;
  telegramLink: string | null;
  receiveMessageEvent: boolean;
  homeAddress: string | null;
  nationalCode: string | null;
  gender: boolean;
  birthDay: string;
  latitude: number | null;
  longitude: number | null;
};

type StudentProps = {
  data: StudentData;
};

const StuName: React.FC<StudentProps> = ({ data }) => {
  const theme = useTheme();
  const [profileImage, setProfileImage] = useState<string | null>(
    localStorage.getItem("profileImage") || null
  );

  useEffect(() => {
    // گوش دادن به تغییرات تصویر پروفایل
    const handleProfileImageChange = (event: CustomEvent) => {
      setProfileImage(event.detail.image); // مقدار جدید را تنظیم کن
    };

    window.addEventListener("profileImageChange", handleProfileImageChange as EventListener);
    return () => {
      window.removeEventListener("profileImageChange", handleProfileImageChange as EventListener);
    };
  }, []);


  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        borderRadius: "8px",
        backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        direction: "rtl",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Profile image */}
        <CardMedia
          component="img"
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
          image={profileImage || "/path/to/default-image.jpg"} // استفاده از تصویر جدید یا تصویر پیش‌فرض
          alt="Profile Picture"
          // image={data.userImage[0].puctureAddress || ""}
        />

        {/* Student Information */}
        <Box
          sx={{
            marginLeft: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
              marginRight: "10px",
            }}
          >
            {data.fName || "نام نامشخص"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.mode === "dark" ? "#fff" : "#777",
              marginRight: "15px",
            }}
          >
            دانشجو
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StuName;
