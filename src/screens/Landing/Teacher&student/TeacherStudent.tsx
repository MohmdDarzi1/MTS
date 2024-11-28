import {
  Box,
  Button,
  CardMedia,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { openSignUpModal } from "../../../redux/slice/SignUp";
import { RootState } from "../../../redux/Store/Store";
import SignUp from "../../../Components/Layout/LoginPages/SignUp/SignUp";

const TeacherStudent = () => {
  const dispatch = useDispatch();
  const isSignUpModalOpen = useSelector(
    (state: RootState) => state.signUp.isOpen
  );
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";
  const handleSignUp = () => {
    dispatch(openSignUpModal());
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "450px",
        backgroundColor: isLightMode
          ? "#282568"
          : theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          width: "690px",
          height: "260px",
          backgroundColor: isLightMode
            ? "#fff"
            : theme.palette.background.paper, // Light or dark background
          color: isLightMode ? "#000" : "#fff", // Text color based on mode
          borderRadius: "20px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: isLightMode
            ? "0px 4px 15px rgba(0, 0, 0, 0.2)"
            : "0px 4px 15px rgba(255, 255, 255, 0.2)", // Adjust shadow based on theme
        }}
      >
        <CardMedia
          image="src/assets/image/mts/instructor_two01.png.png"
          sx={{
            width: "187px",
            height: "227px",
            zIndex: 2,
            borderRadius: "10px",
            marginTop: "35px",
          }}
        />

        <Box
          sx={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "right",
            paddingRight: "20px",
          }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
            مربی شوید
          </Typography>
          <Typography sx={{ fontSize: "16px", marginTop: "10px" }}>
            برای مثال بی اهمیت، کدام یک از ما متعهد می شویم ورزش بدنی بله این
            اتفاق در اینجا می افتد.
          </Typography>

          <Box
            sx={{
              width: "170px",
              height: "50px",
              marginTop: "5px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              borderRadius: "30px",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <Button
              sx={{
                width: "170px",
                height: "50px",
                backgroundColor: "#5751E1",
                borderRadius: "30px",
                color: "white",
                fontSize: "20px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#4745c8",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              درخواست
              <KeyboardBackspaceIcon
                sx={{ width: "40px", height: "30px", marginLeft: "5px" }}
              />
            </Button>
          </Box>
        </Box>

        <CardMedia
          image="src/assets/image/mts/Vector(3).png"
          sx={{
            width: "278px",
            height: "163px",
            position: "absolute",
            bottom: "0px",
            right: "-1px",
            zIndex: 1,
          }}
        />
      </Box>
      {/* Second Box */}
      <Box
        sx={{
          width: "690px",
          height: "260px",
          backgroundColor: isLightMode
            ? "#fff"
            : theme.palette.background.paper,
          color: isLightMode ? "#000" : "#fff",
          borderRadius: "20px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: isLightMode
            ? "0px 4px 15px rgba(0, 0, 0, 0.2)"
            : "0px 4px 15px rgba(255, 255, 255, 0.2)",
        }}
      >
        <CardMedia
          image="src/assets/image/mts/instructor_two02.png.png"
          sx={{
            width: "187px",
            height: "227px",
            zIndex: 2,
            borderRadius: "10px",
            marginTop: "35px",
            marginRight: "15px",
          }}
        />

        <Box
          sx={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "right",
            paddingRight: "20px",
          }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
            دانشجو شوید
          </Typography>
          <Typography sx={{ fontSize: "16px", marginTop: "10px" }}>
            به میلیون ها نفر از سراسر جهان بپیوندید با هم یاد می گیرند یادگیری
            آنلاین.
          </Typography>

          <Box
            sx={{
              width: "170px",
              height: "50px",
              marginTop: "5px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              borderRadius: "30px",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <Button
              onClick={handleSignUp}
              sx={{
                width: "170px",
                height: "50px",
                backgroundColor: "#5751E1",
                borderRadius: "30px",
                color: "white",
                fontSize: "20px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#4745c8",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              درخواست
              <KeyboardBackspaceIcon
                sx={{ width: "40px", height: "30px", marginLeft: "5px" }}
              />
            </Button>
          </Box>
        </Box>

        <CardMedia
          image="src/assets/image/mts/Vector(3).png"
          sx={{
            width: "278px",
            height: "163px",
            position: "absolute",
            bottom: "0px",
            right: "-1px",
            zIndex: 1,
          }}
        />
      </Box>{" "}
      {isSignUpModalOpen && (
        <Modal open={isSignUpModalOpen}>
          <SignUp />
        </Modal>
      )}
    </Box>
  );
};

export default TeacherStudent;
