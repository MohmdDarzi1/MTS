import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../../../Components/Common/ButtonComponent";
import Slider from "./Slider";

const Category = () => {
  return (
    <>
      <Box
        sx={{
          // width: "100%",
          // height: "485px",
          // border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "187px", height: "31px", marginTop: "40px" }}>
          <Button
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#EFEEFE",
              // color: "white",
              borderRadius: "30px",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            دسته بندی های پرطرفدار
          </Button>
        </Box>
        <Box sx={{ width: "404px", height: "43px" }}>
          <Typography
            sx={{
              fontFamily: "yekanbold",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            دسته بندی های برتر
          </Typography>
        </Box>
        <Box sx={{ width: "437px", height: "54px" }}>
            <Typography
              sx={{
                fontFamily: "iransans",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است
            </Typography>
          </Box>
          <Slider/>
      </Box>
    </>
  );
};

export default Category;
