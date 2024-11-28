import { Email, Phone, PhoneIphone, PhotoLibrary } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  CardMedia,
  Icon,
  IconButton,
  Tab,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
import Camera from "./Camera";
import Map from "./Map";
import {
  useAddProfileImage,
  useDeleteImage,
  useUserProfile,
} from "../../../Core/Services/api/UserPanel";
import StuName from "../StuName";

type StudentData = {
  id: string;
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

const Profile: React.FC<StudentProps> = ({ data }) => {
  const token = localStorage.getItem("authToken"); // گرفتن توکن از localStorage
  // const { mutateAsync: deleteProfileImage, isPending } = useDeleteImage();
  const [value, setValue] = React.useState<string>("1");
  const [file, setFile] = useState<File | null>(null);
  const { mutateAsync } = useAddProfileImage();

  const [previewImage, setPreviewImage] = useState<string | null>(
    localStorage.getItem("profileImage") || null
  );
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setPreviewImage(savedImage);
    }
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setPreviewImage(base64Image);
        localStorage.setItem("profileImage", base64Image); // ذخیره تصویر در localStorage

        // ارسال رویداد سفارشی برای اطلاع‌رسانی تغییر
        const event = new CustomEvent("profileImageChange", {
          detail: { image: base64Image },
        });
        window.dispatchEvent(event); // ارسال رویداد
      };
      reader.readAsDataURL(selectedFile);
    }
  };


  const handleSubmit = async () => {
    const token = localStorage.getItem("authToken"); // این قسمت به token نیاز دارد
    if (file && token) {
      try {
        const result = await mutateAsync({ formFile: file, token });
        console.log("Profile image uploaded successfully:", result);

        // ذخیره تصویر به صورت Base64 در localStorage پس از آپلود موفق
        if (previewImage) {
          localStorage.setItem("profileImage", previewImage);
        }

        setFile(null);
      } catch (error) {
        console.error("Error uploading profile image:", error);
      }
    } else {
      console.error("No file selected or no token available.");
    }
  };
  return (
    <>
      <Box sx={{ direction: "rtl" }}>
        <Box
          sx={{
            width: "100%",
            height: "130px",
            backgroundColor: "#E1C461",
            borderTopRightRadius: "16px",
            borderTopLeftRadius: "16px",
          }}
        ></Box>

        <Box sx={{ width: "100%", textAlign: "center" }}>
          <CardMedia
            sx={{
              position: "relative",
              bottom: "80px",
              width: "128px",
              height: "128px",
              borderRadius: "100px",
              marginRight: "100px",
              border: "5px solid white",
            }}
            image={
              previewImage ||
              (data.userImage.length > 0
                ? data.userImage[0]?.puctureAddress
                : "/path/to/default-image.png") ||
              ""
            }
            // image={previewImage || data.userImage[0]?.puctureAddress || ""}
            component="img"
            alt="Profile Image"
          />

          <label htmlFor="file-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="file-upload"
            />
            <IconButton
              component="span"
              sx={{
                position: "relative",
                top: "-130px",
                left: "480px",
                color: "#757575",
              }}
            >
              <PhotoLibrary sx={{ fontSize: 30, color: "#E1C461" }} />
            </IconButton>
          </label>

          {file && (
            <IconButton
              onClick={handleSubmit}
              sx={{
                position: "relative",
                top: "-130px",
                left: "640px",
                color: "#757575",
              }}
            >
              ثبت
            </IconButton>
          )}
          {/* <Button onClick={handleDelete} disabled={isPending} >حذف عکس 
          {isPending ? "deleteing...": "deleted"}
          </Button> */}
        </Box>
      </Box>
      <Box sx={{ direction: "rtl" }}>
        <Box
          sx={{
            width: "100%",
            height: "100px",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <Typography sx={{ lineHeight: "45px", fontSize: "32px" }}>
            {data?.fName} {data?.lName}
          </Typography>
          <Typography
            sx={{ padding: "0 12px", fontSize: "20px", color: "#777" }}
          >
            (دانشجو)
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100px",
            border: "1px solid #ccc",
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            padding: "10px",
          }}
        >
          {/* ایمیل */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Icon sx={{ color: "#4a90e2" }}>
              <Email />
            </Icon>
            <Typography>{data?.email}</Typography>
          </Box>

          {/* تلفن همراه */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Icon sx={{ color: "#4a90e2" }}>
              <PhoneIphone />
            </Icon>
            <Typography>{data?.phoneNumber}</Typography>
          </Box>

          {/* تلفن ثابت */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Icon sx={{ color: "#4a90e2" }}>
              <Phone />
            </Icon>
            <Typography>0372235050</Typography>
          </Box>

          <Box sx={{ marginRight: "150px" }}>
            <Typography>درباره من:</Typography>
            <Typography>
              {data?.userAbout?.slice(0, 50) ||
                "توضیح کوتاهی درباره خودتان بنویسید..."}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* تب ها */}
      <Box sx={{ width: "100%", typography: "body1", direction: "rtl" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="tabs example">
              <Tab label="اطلاعات شخصی" value="1" />
              <Tab label="عکس پروفایل" value="2" />
              <Tab label=" آدرس سکونت" value="3" />
              <Tab label="لینک ها" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              <EditProfile />
            </Typography>
          </TabPanel>
          <TabPanel value="2">
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              <Camera
                // deleteProfileImage={data}
                userProfileData={data}
                previewImage={previewImage}
                openConfirmDialog={openConfirmDialog}
                setOpenConfirmDialog={setOpenConfirmDialog}
                handleSubmit={handleSubmit}
              />
            </Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              <Map />
            </Typography>
          </TabPanel>
          <TabPanel value="4">
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              نظرات کاربران در اینجا نمایش داده می‌شود.
            </Typography>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Profile;
