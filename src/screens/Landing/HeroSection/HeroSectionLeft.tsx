import React from 'react'
import { Box, Button, CardMedia, Typography, useTheme } from '@mui/material'
const HeroSectionLeft = () => {
  const theme = useTheme()
  return (
    <>
     <Box
        sx={{
          width: "730px",
          height: "400px",
          position: "relative",
          backgroundImage: theme.palette.mode === "dark"
            ? "url('src/assets/image/mts/a2e54b1ec4d8d0fa89a57722637f835703eb0b89.png')"
            : "url('src/assets/image/mts/dark.png')", // تغییر تصویر بر اساس حالت
          backgroundSize: "cover",
          transform: theme.palette.mode === "dark" ? "scaleX(-1)" : "scaleX(1)", // برعکس کردن تصویر در حالت دارک
          objectFit: "contain",
        }}
      >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              marginTop: "50px",
              height: "350px",
              transform: theme.palette.mode === "dark" ? "scaleX(-1)" : "scaleX(1)",
              objectFit: "contain",
            }}
            image="src/assets/image/mts/landing.png"
            alt="landing image"
          />
          <CardMedia
            component="img"
            sx={{
              position: "relative",
              bottom: "161px",
              // right: "92px",
              // left:"130px",
              width: "17%",
              height: "150px",
              backgroundSize: "cover",
              objectFit: "cover",
              right: theme.palette.mode === "dark" ? "600px" : "0px",
            }}
            image="src/assets/image/mts/cbc5ef747303f58a2c2c582047245035bdc727ce.png"
            alt="second image"
          />
        </Box>
    </>
  )
}

export default HeroSectionLeft