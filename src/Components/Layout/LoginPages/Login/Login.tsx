import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store/Store";
import { openLoginModal, closeLoginModal } from "../../../../redux/slice/Login";
import { CardMedia, Checkbox, TextField } from "@mui/material";

import LoginPages from "../../../Common/LoginPages";
import SearchBox from "./SearchBox";
import { closeSignUpModal, openSignUpModal } from "../../../../redux/slice/SignUp";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1205px",
  height: "545px",
  bgcolor: "#f9f9f9",
  borderRadius: "12px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  p: 4,
  backgroundColor: "#aba8f0",

  textAlign: "center",
};

const closeButtonStyle = {
  position: "absolute",
  top: 8,
  right: 8,
};

export default function LoginModal() {
  const dispatch = useDispatch();
  const isLoginModalOpen = useSelector(
    (state: RootState) => state.login.isOpen
  );
  const isSignUpModalOpen = useSelector((state: RootState) => state.signUp.isOpen);
  const handleOpen = () => {
    dispatch(openLoginModal());
  };

  const handleClose = () => {
    dispatch(closeLoginModal());
  };

  const handleOpenSignUpModal = () => {
    dispatch(openSignUpModal());
  };

  const handleCloseSignUpModal = () => {
    dispatch(closeSignUpModal());
  };

  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <Modal
        open={isLoginModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          sx: {
            backdropFilter: "blur(8px)", // افکت blur برای پس‌زمینه
            backgroundColor: "rgba(0, 0, 0, 0.5)", // تنظیم رنگ و شفافیت پس‌زمینه
          },
        }}
      >
        <Box sx={style}>
          <IconButton onClick={handleClose} sx={closeButtonStyle}>
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                width: "450px",
                height: "auto",
                // border: "1px solid #ccc",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                gap: "15px",
              }}
            >
         <SearchBox/>
              <Box
                sx={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ display: "flex", alignItems: "center", color: "#555" }}
                >
                  <Checkbox {...label} defaultChecked />
                  مرا به خاطر بسپار
                </Typography>
                <Button
                  sx={{
                    color: "#007BFF",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  فراموشی رمز عبور
                </Button>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "10px",
                  color: "#555",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>
                  حساب کاربری ندارید؟
                  <Button
                  onClick={handleOpenSignUpModal}
                    component="span"
                    sx={{
                      color: "#007BFF",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    ثبت نام کنید
                  </Button>
                </Typography>
              </Box>
            </Box>

       <LoginPages/>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
