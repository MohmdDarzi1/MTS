import { Box, Button, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Taghvim from "./Taghvim";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const CommentDashbord = () => {
  return (
    <>
              <Box
            sx={{
              width: "100%",
              height: "50px",
              // borderBottom: "1px solid #ccc",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center", // هم‌راستاسازی عمودی متن و دکمه
              padding: "0 16px", // فاصله داخلی
            }}
          >
            <Typography>نظرات شما</Typography>
            <Button sx={{ color: "#E1C461", display: "flex", alignItems: "center" }}>
              مشاهده همه
              <KeyboardArrowLeftIcon />
            </Button>
          </Box>
              <Box
            sx={{
              display: "flex",
              justifyContent: "space-between", // فضای خالی بین دو باکس
              padding: "16px", // فاصله داخلی برای نظرات
            }}
          >
            <Box sx={{ width: "48%", height: "auto", padding: "8px" }}>
              {/* محتوای نظر اول */}
              <Typography> دوره ها</Typography>
              <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardMedia
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%", // گرد کردن تصویر
            overflow: "hidden",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // سایه برای تصویر
          }}
          image="src/assets/image/mts/comment01.png.png"
          alt="Profile Picture"
        />
        <Box
          sx={{
            marginLeft: "16px", // فاصله بین تصویر و نام
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            // variant="h" // تغییر اندازه فونت برای نام
            sx={{ fontWeight: "bold", color: "#333",marginRight:"10px" }} // رنگ و ضخامت متن
          >
             شما
          </Typography>
          <Typography
            variant="body2" // اندازه متن کوچک‌تر برای نوع کاربر
            sx={{ color: "#777",marginRight:"15px" }} // رنگ متن
          >
            27 اردیبهشت 1403
          </Typography>
        </Box>
      </Box>
      <Typography sx={{fontSize:"12px",textAlign:"center"}}>دوره خوبی بود استادا  </Typography>
      <Typography  sx={{fontSize:"12px",color:"#777",textAlign:"left"}}>خوب بود دیگه نظری ندارم </Typography>
      <Box sx={{ display: "flex", gap: "10px",justifyContent:"center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                // backgroundColor: theme.palette.grey[400], // تغییر رنگ
                borderRadius: "50px",
              }}
            >
              <ThumbDownOffAltIcon sx={{ fontSize: "16px" }} />
              <Typography sx={{ fontSize: "14px" }}>15</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                // backgroundColor: theme.palette.grey[400], // تغییر رنگ
                borderRadius: "50px",
              }}
            >
              <ThumbUpOffAltIcon sx={{ fontSize: "16px" }} />
              <Typography sx={{ fontSize: "14px" }}>15</Typography>
            </Box>
          </Box>
          <CardMedia 
        sx={{width:"10px",height:"50px",position:"relative",right:"20px",bottom:"50px"}}
        image="src/assets/image/mts/Rectangle 58.png"
        />
          <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          position:"relative",
          bottom:"50px"
        }}
      >
        <CardMedia
          sx={{
            marginRight:"35px",
            width: "50px",
            height: "50px",
            borderRadius: "50%", // گرد کردن تصویر
            overflow: "hidden",
        
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // سایه برای تصویر
          }}
          image="src/assets/image/mts/comment01.png.png"
          alt="Profile Picture"
        />

        <Box
          sx={{
            marginLeft: "16px", // فاصله بین تصویر و نام
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // marginBottom
          }}
        >
          
          <Typography
            // variant="h" // تغییر اندازه فونت برای نام
            sx={{ fontWeight: "bold", color: "#777",marginRight:"10px",fontSize:"11px" }} // رنگ و ضخامت متن
          >
             شما
          </Typography>
          <Typography
            variant="body2" // اندازه متن کوچک‌تر برای نوع کاربر
            sx={{ color: "#777",marginRight:"15px",fontSize:"10px" }} // رنگ متن
          >
            20 اردیبهشت 1403
          </Typography>
        </Box>

      </Box>
            </Box>
            <Box sx={{ width: "48%", height: "auto", padding: "8px" }}>
              {/* محتوای نظر اول */}
              <Typography> دوره ها</Typography>
              <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardMedia
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%", // گرد کردن تصویر
            overflow: "hidden",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // سایه برای تصویر
          }}
          image="src/assets/image/mts/comment01.png.png"
          alt="Profile Picture"
        />
        <Box
          sx={{
            marginLeft: "16px", // فاصله بین تصویر و نام
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            // variant="h" // تغییر اندازه فونت برای نام
            sx={{ fontWeight: "bold", color: "#333",marginRight:"10px" }} // رنگ و ضخامت متن
          >
             شما
          </Typography>
          <Typography
            variant="body2" // اندازه متن کوچک‌تر برای نوع کاربر
            sx={{ color: "#777",marginRight:"15px" }} // رنگ متن
          >
            27 اردیبهشت 1403
          </Typography>
        </Box>
      </Box>
      <Typography sx={{fontSize:"12px",textAlign:"center"}}>دوره خوبی بود استادا  </Typography>
      <Typography  sx={{fontSize:"12px",color:"#777",textAlign:"left"}}>خوب بود دیگه نظری ندارم </Typography>
      <Box sx={{ display: "flex", gap: "10px",justifyContent:"center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                // backgroundColor: theme.palette.grey[400], // تغییر رنگ
                borderRadius: "50px",
              }}
            >
              <ThumbDownOffAltIcon sx={{ fontSize: "16px" }} />
              <Typography sx={{ fontSize: "14px" }}>15</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                // backgroundColor: theme.palette.grey[400], // تغییر رنگ
                borderRadius: "50px",
              }}
            >
              <ThumbUpOffAltIcon sx={{ fontSize: "16px" }} />
              <Typography sx={{ fontSize: "14px" }}>15</Typography>
            </Box>
          </Box>
          <CardMedia 
        sx={{width:"10px",height:"50px",position:"relative",right:"20px",bottom:"50px"}}
        image="src/assets/image/mts/Rectangle 58.png"
        />
          <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          position:"relative",
          bottom:"50px"
        }}
      >
        <CardMedia
          sx={{
            marginRight:"35px",
            width: "50px",
            height: "50px",
            borderRadius: "50%", // گرد کردن تصویر
            overflow: "hidden",
        
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // سایه برای تصویر
          }}
          image="src/assets/image/mts/comment01.png.png"
          alt="Profile Picture"
        />

        <Box
          sx={{
            marginLeft: "16px", // فاصله بین تصویر و نام
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // marginBottom
          }}
        >
          
          <Typography
            // variant="h" // تغییر اندازه فونت برای نام
            sx={{ fontWeight: "bold", color: "#777",marginRight:"10px",fontSize:"11px" }} // رنگ و ضخامت متن
          >
             شما
          </Typography>
          <Typography
            variant="body2" // اندازه متن کوچک‌تر برای نوع کاربر
            sx={{ color: "#777",marginRight:"15px",fontSize:"10px" }} // رنگ متن
          >
            20 اردیبهشت 1403
          </Typography>
        </Box>

      </Box>
            </Box>
          </Box>
    </>
  )
}

export default CommentDashbord