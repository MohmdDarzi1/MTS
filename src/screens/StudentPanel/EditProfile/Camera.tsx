import React, { useState } from "react";
import {
  Box,
  CardMedia,
  IconButton,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useDeleteImage, useUserProfile } from "../../../Core/Services/api/UserPanel";

type CameraProps = {
  userProfileData: {
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
  previewImage: string | null;
  openConfirmDialog: boolean;
  setOpenConfirmDialog: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
};

const Camera: React.FC<CameraProps> = ({
  userProfileData,
  previewImage,
  openConfirmDialog,
  setOpenConfirmDialog,
  handleSubmit,
}) => {
  const token = localStorage.getItem("authToken");
  const { mutateAsync: deleteProfileImage, isPending } = useDeleteImage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const last10Images = userProfileData?.userImage?.slice(-8) || [];

  const handleImageClick = (image: string) => {
    setSelectedImage(image); // Set the image for preview
    setOpenConfirmDialog(true); // Show confirmation dialog
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string); // Set the selected image for preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfrim = () => {
    if (selectedImage) {
      handleSubmit(); // Trigger the submit logic
      setOpenConfirmDialog(false); // Close the confirmation dialog
    }
  };

  const handleDelete = async (imageId: string) => {
    if (token && imageId) {
      try {
        // فراخوانی تابع deleteProfileImage برای حذف تصویر
        await deleteProfileImage({ token, DeleteEntityId: imageId });

        // پاک کردن تصویر از localStorage و به‌روزرسانی پیش‌نمایش تصویر
        localStorage.removeItem("profileImage");
        
        // حذف تصویر از آرایه داده‌ها
        userProfileData.userImage = userProfileData.userImage.filter(
          (img) => img.id !== imageId
        );

        console.log("Profile image deleted successfully.");
      } catch (error) {
        // مدیریت خطا در صورت وجود
        console.error("Error deleting profile image:", error);
      }
    } else {
      console.error("No token or image ID available.");
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          // height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {last10Images.map((image, index) => (
            <Grid item xs={3} key={index}>
              <Box
                sx={{
                  width: "100%",
                  height: "235px",
                  border: "1px solid #ccc",
                  borderRadius: "20px",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: index % 2 === 0 ? "#427EFC" : "#FFE75C",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={image.puctureAddress}
                  sx={{
                    width: "235px",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Box>
              <Button
                onClick={() => handleDelete(image.id)}
                sx={{
                  width: "100%",
                  marginTop: "50px",
                  backgroundColor: "#f44336", // Red color
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#d32f2f", // Darker red on hover
                  },
                  borderRadius: "20px",
                  fontWeight: "bold",
                  padding: "10px",
                  textTransform: "none",
                }}
              >
                حذف تصویر
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* File Input for Image Upload */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <IconButton
          onClick={() => document.getElementById("file-input")?.click()} // Trigger file input click
          sx={{
            backgroundColor: "#427EFC",
            color: "#fff",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
          aria-label="Add a photo"
        >
          <AddPhotoAlternateIcon />
        </IconButton>
        <Button sx={{ marginTop: "10px", color: "#555" }}>
          اضافه  کردن عکس
        </Button>

        {/* Hidden File Input */}
        <input
          type="file"
          id="file-input"
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </Box>

      {/* Preview of the selected image */}
      {selectedImage && (
        <Box sx={{ marginTop: "20px" }}>
          <img
            src={selectedImage}
            alt="Preview"
            style={{ width: "200px", height: "200px", borderRadius: "10px" }}
          />
        </Box>
      )}

      {/* Confirmation Dialog */}
      <Dialog open={openConfirmDialog} onClose={() => setOpenConfirmDialog(false)}>
        <DialogTitle>تأیید آپلود</DialogTitle>
        <DialogContent>
          <DialogContentText>
            آیا از اضافه کردن این تصویر مطمئن هستید؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmDialog(false)} color="secondary">
            لغو
          </Button>
          <Button onClick={handleConfrim} color="primary">
            تأیید
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Camera;
