import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// اضافه کردن props به TeacherName
interface TeacherNameProps {
  fullName: string;
  subject: string;
  email: string;
  phone: string;
  pictureAddress: string;
  description: string;
}

const TeacherName: React.FC<TeacherNameProps> = ({ fullName, subject, email, phone, pictureAddress, description }) => {
  console.log("fullName:", fullName);
  return (
    <Box
      sx={{
        width: "1000px",
        height: "368px",
        backgroundColor: "#282568",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          width: 250,
          height: 250,
          backgroundColor: "#fff",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          sx={{ width: "150px", height: "200px", marginTop: "20px" }}
          // image={pictureAddress} // استفاده از props image
          image={pictureAddress || "src/assets/image/teacher2.png"}
        />
      </Box>
      <Box sx={{ width: "668px", height: "268px", }}>
        <Typography sx={{ width: "100%", color: "#fff", fontSize: "26px" }}>
          {fullName} {/* استفاده از props fullName */}
          
        </Typography>
        <Typography sx={{ width: "100%", color: "#fff" }}>
          {subject} {/* استفاده از props subject */}
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            display: "flex",
            gap: "100px",
            padding: "10px",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "16px" }}>
            جیمیل: {email} {/* استفاده از props email */}
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "16px" }}>
            شماره تماس: {phone} {/* استفاده از props phone */}
          </Typography>
        </Box>
        <Typography sx={{ color: "#fff" }}>
          {description} {/* استفاده از props description */}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
          <InstagramIcon sx={{ color: "#E1306C" }} />
          <FacebookOutlinedIcon sx={{ color: "#1877F2" }} />
          <WhatsAppIcon sx={{ color: "#25D366" }} />
        </Box>
      </Box>
    </Box>
  )
}

export default TeacherName;
