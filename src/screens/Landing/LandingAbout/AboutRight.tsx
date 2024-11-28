import { Box, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'

const AboutRight = () => {
  const theme = useTheme();
  return (
    <>
       <Box sx={{ width: "590px", height: "600px", flexDirection: "column" }}>
          <Box sx={{ width: "103px", height: "78px", marginRight: "300px" }}>
            <Typography
              sx={{
                // transform: "translate(-50%, -50%)",
                // transform:"translate(-30%)",
                transform: "rotate(+10deg)",
                height: "19px",
                color: "primary.main",
                position: "relative",
                top: "35px",
                right: "20px",
                fontFamily: "yekanbold",
                fontSize: "10px",
              }}
            >
              I LOVE CLASS
            </Typography>
            <CardMedia
              component={"img"}
              image="src/assets/image/png/Vector(1).png"
            />
          </Box>

          <CardMedia
            component={"img"}
            image="src/assets/image/mts/Section → about_img.png.png"
          />

          <Box sx={{ width: "223px", height: "113px", 
          // ,backgroundColor:"white"
          backgroundColor: theme.palette.background.paper
            ,border:"1px solid #B2BBCC",borderRadius:"20px"}}>
            <Typography
              sx={{
                width: "182px",
                hei: "28px",
                textAlign: "center",
                fontFamily: "yekanbold",
                margin: "auto",
              }}
            >
              بیش از 36 هزار دانشجوی ثبت نام شده
            </Typography>
            <CardMedia
              component={"img"}
              image="src/assets/image/mts/student_grp.png.png"
            />
          </Box>
        </Box>

    </>
  )
}

export default AboutRight