import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  cloescompletedModal,
  opencompletedModal,
} from "../../../../../redux/slice/completed";
import { RootState } from "../../../../../redux/Store/Store";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoginPages from "../../../../Common/LoginPages";
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
  

export default function Completed() {
  const iscompleted = useSelector((state: RootState) => state.completed.isOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(opencompletedModal());
  };

  const handleClose = () => {
    dispatch(cloescompletedModal());
  };

  return (
    <div>
      <Modal
        open={iscompleted}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "426px",
    height: "100px",
    // border: "1px solid #ccc",
  }}
>
  <Box
    sx={{
      width: "190px",
      height: "60px",
      backgroundColor: "#5751E1",
      borderRadius: "100px",
      textAlign: "center",
    }}
  >
    <Typography sx={{padding:"15px"}}>1</Typography>
  </Box>

  {/* خط جداکننده */}
  <Box
    sx={{
        width: "100%", // عرض خط
        height: "5px", // ارتفاع خط
        backgroundColor: "#5751E1", // رنگ خط
    }}
  />

  <Box
    sx={{
      width: "190px",
      height: "60px",
      backgroundColor: "#5751E1",
      borderRadius: "100px",
      textAlign: "center",
    }}
  >
     <Typography sx={{padding:"15px"}}>2</Typography>
  </Box>

  {/* خط جداکننده */}
  <Box
    sx={{
      width: "100%", // عرض خط
      height: "5px", // ارتفاع خط
      backgroundColor: "#5751E1", // رنگ خط
    }}
  />

  <Box
    sx={{
      width: "190px",
      height: "60px",
      backgroundColor: "#FFC224",
      borderRadius: "100px",
      textAlign: "center",
    }}
  >
      <Typography sx={{padding:"15px"}}>3</Typography>

  </Box>

</Box>

            </Box>

            <LoginPages />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
