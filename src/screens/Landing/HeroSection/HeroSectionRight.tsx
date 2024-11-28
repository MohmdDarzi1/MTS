import { Box, Button, CardMedia, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const HeroSectionRight = () => {
  return (
    <>
            <Box sx={{ width: "600px", height: "400px" }}>
          <CardMedia
            sx={{
              width: "10%",
              height: "10%",
              position: "relative",
              top: 60,
              right: 290,
              // left:"50px",
              zIndex: 1,
              backgroundSize: "cover",
              objectFit: "cover",
            }}
            component={"img"}
            alt="svg"
            image="src/assets/image/mts/Heading 3 → SVG.png"
          />
          <Box
            sx={{
              position: "relative",
              width: "491px",
              display: "flex",
              overflow: "hidden",
              marginTop: "50px",
            }}
          >
            <Typography
              sx={{
                // color: "#161439",
                position: "relative",
                zIndex: 2,
                fontSize: "40px",
                fontFamily: "yekan", // استفاده از fontFamily Poppins
                textAlign: "right",
              }}
            >
              هرگز از
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "200px",
                overflow: "hidden",
              }}
            >
              <CardMedia
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: -10,
                  zIndex: 1,
                }}
                component="img"
                image="src/assets/image/mts/Vector(1).png"
                alt="background image"
              />

              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "47%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  fontSize: "40px",
                  fontFamily: "yekanBold", // استفاده از fontFamily Poppins
                  color: "white",
                  textAlign: "center",
                }}
              >
                یادگیری
              </Typography>
            </Box>
          </Box>


          <Typography
            sx={{
              width: "491px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px",
              // color: "#161439",
              fontFamily: "yekanBold",
            }}
          >
            دست نکشید زندگی هرگز از آموزش دست نمی کشد
          </Typography>
          <Box sx={{width:"491px",height:"58px"}}>
            <Typography sx={{fontSize:"18px",color:"#6D6C80",fontFamily:"IranSans"}}>
            هر سفر آموزشی و یادگیری دنبال کردن منحصر به فرد است
            ما به شما کمک خواهیم کرد
            </Typography>
          </Box>

             <Box
      sx={{
        width: "217px",
        height: "50px",
        marginTop: "5px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // سایه ملایم و نرم
        borderRadius: "30px", // اضافه کردن گردی به باکس
        transition: "0.3s", // انتقال نرم هنگام hover
        "&:hover": {
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)", // سایه قوی‌تر هنگام hover
        },
      }}
    >
      <Button
        sx={{
          width: "217px",
          height: "50px",
          backgroundColor: "#5751E1",
          borderRadius: "30px",
          color: "white",
          fontSize: "15px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // سایه ملایم و نرم
          "&:hover": {
            backgroundColor: "#4745c8", // تغییر رنگ پس‌زمینه هنگام hover
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)", // سایه قوی‌تر هنگام hover
          },
        }}
      >
        رایگان آزمایش کنید
        <KeyboardBackspaceIcon sx={{ width: "40px", height: "30px", marginLeft: "5px" }} />
      </Button>
    </Box>
        </Box>
    </>
  )
}

export default HeroSectionRight