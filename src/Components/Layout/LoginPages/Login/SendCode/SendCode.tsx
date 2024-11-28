import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/Store/Store";
import { closeLoginCodeModal } from "../../../../../redux/slice/LoginSendCode";
import LoginPages from "../../../../Common/LoginPages";

import { IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchBox from "./SearchBox";
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
export default function SendCodeLogin() {
  const dispatch = useDispatch();
  const isSendCodeLogin = useSelector(
    (state: RootState) => state.LoginCode.isOpen
  );

  const handlecloesSendCodeLogin = () => {
    dispatch(closeLoginCodeModal());
  };

  return (
    <div>
      <Modal
        open={isSendCodeLogin}
        onClose={handlecloesSendCodeLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton onClick={handlecloesSendCodeLogin} sx={closeButtonStyle}>
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
                height: "450px",
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
          
            </Box>

            <LoginPages />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
