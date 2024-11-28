import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import GoogleApi from "./GoogleApi";

  
const Contactus = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "150px", // تغییر ارتفاع به minHeight
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#f6eff9",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            fontFamily: "yekanbold",
          }}
        >
          تماس با ما
        </Typography>
        <Typography
          sx={{
            width: "400px",
            height: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          صفحه اصلی{" "}
          <KeyboardArrowLeftIcon sx={{ width: "20px", height: "20px" }} />
          <Typography sx={{ color: "#5751E1" }}> تماس با ما</Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          //   height: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            width: "1440px",
            height: "100%",
            // border: "1px solid red",
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            flexDirection: "row",
            direction: "ltr",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              width: "930px",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                textAlign: "right",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#333",
              }}
            >
              برای ما پیام ارسال کنید
            </Typography>
            <Typography
              sx={{
                textAlign: "right",
                fontSize: "16px",
                marginBottom: "20px",
                color: "#666",
              }}
            >
              آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند
              *
            </Typography>

            <TextField
              sx={{ width: "100%", marginBottom: "20px", direction: "rtl" }}
              multiline
              rows={6}
              placeholder="پیام خود را وارد کنید"
              variant="outlined"
            />

            <Box sx={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
              <TextField
                placeholder="نام"
                sx={{ width: "30%", direction: "rtl" }}
                variant="outlined"
              />
              <TextField
                placeholder="پست الکترونیکی"
                sx={{ width: "30%", direction: "rtl" }}
                variant="outlined"
              />
              <TextField
                placeholder="سایت اینترنتی"
                sx={{ width: "30%", direction: "rtl" }}
                variant="outlined"
              />
            </Box>

            <Button
              sx={{
                width: "150px",
                height: "45px",
                backgroundColor: "#5751E1",
                color: "#fff",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#4740D4",
                },
              }}
            >
              ارسال
            </Button>
          </Box>

          <Stack
            sx={{
              width: "450px",
              height: "534px",
            //   border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
          <Box
  sx={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row-reverse",
    border: "1px solid #e0e0e0",
    borderRadius: "16px",
    width: "450px",
    height: "157px",
    // padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  }}
>
  <Box
    sx={{
      width: "70px",
      height: "70px",
      backgroundColor: "#5751E1",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    }}
  >
    <AddLocationAltIcon sx={{ color: "#fff", fontSize: "36px" }} />
  </Box>

  <Box sx={{ flexDirection: "column", width: "200px", textAlign: "right" }}>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "8px",
      }}
    >
      نشانی
    </Typography>
    <Typography sx={{ fontSize: "14px", color: "#555" }}>
      آوامیلیگ درایو، کنزینگتون لندن، انگلستان
    </Typography>
  </Box>
</Box>
<Box
  sx={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row-reverse",
    border: "1px solid #e0e0e0",
    borderRadius: "16px",
    width: "450px",
    height: "157px",
    // padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  }}
>
  <Box
    sx={{
      width: "70px",
      height: "70px",
      backgroundColor: "#5751E1",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    }}
  >
    <AddLocationAltIcon sx={{ color: "#fff", fontSize: "36px" }} />
  </Box>

  <Box sx={{ flexDirection: "column", width: "200px", textAlign: "right" }}>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "8px",
      }}
    >
    ایمیل
    </Typography>
    <Typography sx={{ fontSize: "14px", color: "#555" }}>
    info@gmail.com
    info@gmail.com
    </Typography>
  </Box>
</Box>

<Box
  sx={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row-reverse",
    border: "1px solid #e0e0e0",
    borderRadius: "16px",
    width: "450px",
    height: "157px",
    // padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  }}
>
  <Box
    sx={{
      width: "70px",
      height: "70px",
      backgroundColor: "#5751E1",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    }}
  >
    <AddLocationAltIcon sx={{ color: "#fff", fontSize: "36px" }} />
  </Box>

  <Box sx={{ flexDirection: "column", width: "200px", textAlign: "right" }}>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "8px",
      }}
    >
    تلفن
    </Typography>
    <a href="tel:09036251034"
    
     style={{ fontSize: "16px", color: "#555" }}
     >
    +98 9036251034
    </a>
  </Box>
</Box>


          </Stack>
        </Stack>
        <Stack sx={{width:"100%",height:"550px",display:"flex",justifyContent:"center",alignItems:"center"}}>
<GoogleApi/>
        </Stack>

      </Box>
    </>
  );
};

export default Contactus;
