import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const LoginPages = () => {
  return (
    <>
         <Box
              sx={{
                width: "750px",
                // height: "550px",
                // border: "1px solid #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "300px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  // border: "1px solid red",
                  textAlign: "left",
                  display:"flex",justifyContent:"left",
                }}
              >
  <Box
  sx={{
    width: "120px",
    height: "50px",
    backgroundColor: "#D2D2D2",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
  }}
>
  {/* حالت لایت مود */}
  <Box
    sx={{
      width: "50px",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      backgroundColor: "#fff",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      position: "absolute",
      left: 0, // زمانی که حالت دارک مود نیست
    }}
  >
    <LightModeIcon sx={{ width: "30px", height: "30px", color: "#FFD700" }} />
  </Box>

  {/* حالت دارک مود */}
  <Box
    sx={{
      width: "50px",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      backgroundColor: "#333",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      position: "absolute",
      right: 0, // زمانی که حالت لایت مود نیست
    }}
  >
    <DarkModeIcon sx={{ width: "30px", height: "30px", color: "#FFA500" }} />
  </Box>
</Box>


                <HomeIcon
              
                  sx={{ width: "50px", height: "50px", color: "#5751E1" }}
                />
              </Box>
              <Box sx={{ width: "100%", height: "183px" }}>
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
                      color: "#161439",
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
                    // width: "491px",
                    textAlign: "right",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "45px",
                    color: "#161439",
                    fontFamily: "yekanBold",
                  }}
                >
                  دست نکشید زندگی هرگز از آموزش دست نمی کشد
                </Typography>

                <Box sx={{ width: "100%", height: "420px", direction: "ltr" }}>
                  <CardMedia
                    sx={{ width: "306px", height: "280px" }}
                    image="src/assets/image/mts/Group 24.png"
                  />
                </Box>
              </Box>
            </Box>
    </>
  )
}

export default LoginPages