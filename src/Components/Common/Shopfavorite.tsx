import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Shopfavorite = () => {
  return (
    <Box
      sx={{
        width: "120px",
        // height: "60px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        gap:"20px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // سایه ملایم
        transition: "box-shadow 0.3s ease", // افکت انیمیشن
        "&:hover": {
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)", // سایه در حالت هوور
        },
      }}
    >
      {/* بخش سبد خرید */}
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#ffc107",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "bold",
            position: "absolute",
            top: "-8px",
            right: "-8px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // سایه عدد
          }}
        >
          1
        </Typography>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // سایه آیکون
            cursor: "pointer", // نشانگر دست
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f0f0f0", // رنگ پس‌زمینه در حالت هوور
            },
          }}
        >
          <ShoppingCartOutlinedIcon sx={{ color: "#1976d2" }} />
        </Box>
      </Box>

      {/* بخش علاقه‌مندی */}
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#ffc107",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "bold",
            position: "absolute",
            top: "-8px",
            right: "-8px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // سایه عدد
          }}
        >
          1
        </Typography>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // سایه آیکون
            cursor: "pointer", // نشانگر دست
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f0f0f0", // رنگ پس‌زمینه در حالت هوور
            },
          }}
        >
          {/* <FavoriteBorderOutlinedIcon sx={{ color: "#d32f2f" }} /> */}
          <Checkbox
                  icon={
                    <FavoriteBorder
                      sx={{
                        fontSize: {
                          lg: "22px",
                          md: "16px",
                          sm: "14px",
                          xs: "10px",
                        },
                      }}
                      color="error"
                    />
                  }
                  checkedIcon={
                    <Favorite
                      sx={{
                        fontSize: {
                          lg: "22px",
                          md: "16px",
                          sm: "14px",
                          xs: "10px",
                        },
                      }}
                      color="error"
                    //   checked={isFavorite}
                    />
                  }
                />
        </Box>
      </Box>
    </Box>
  );
};

export default Shopfavorite;
