import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "../../../../redux/slice/SignModal"; 
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { openLoginModal, closeLoginModal } from '../../../../redux/slice/Login';
import { RootState } from '../../../../redux/Store/Store';
import LoginModal from '../Login/Login';
import { closeSignUpModal, openSignUpModal } from '../../../../redux/slice/SignUp';
import SignUp from '../SignUp/SignUp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#f9f9f9',
  borderRadius: '12px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  p: 3,
  textAlign: 'center',
};

const greenButtonStyle = {
  mt: 3,
  bgcolor: '#4caf50',
  color: '#fff',
  '&:hover': {
    bgcolor: '#388e3c',
  },
  borderRadius: '25px',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const redButtonStyle = {
  mt: 2,
  bgcolor: '#f44336',
  color: '#fff',
  '&:hover': {
    bgcolor: '#d32f2f',
  },
  borderRadius: '25px', 
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const closeButtonStyle = {
  position: 'absolute',
  top: 10,
  right: 450,
  color: '#666',
};
export default function BasicModal() {
  const dispatch = useDispatch();
  const isSignModalOpen = useSelector((state: RootState) => state.signModal.isOpen);
  const isLoginModalOpen = useSelector((state: RootState) => state.login.isOpen);
  const isSignUpModalOpen = useSelector((state: RootState) => state.signUp.isOpen);
  
  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleLoginModal = () => {
    dispatch(openLoginModal());
  };

  const handleCloseLoginModal = () => {
    dispatch(closeLoginModal());
  };

  const handleOpenSignUpModal = () => {
    dispatch(openSignUpModal());
  };

  const handleCloseSignUpModal = () => {
    dispatch(closeSignUpModal());
  };

  return (
    <>
      <Modal
        open={isSignModalOpen} // کنترل نمایش مودال با وضعیت
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(8px)', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          },
        }}
      >
        <Box sx={style}>
          <IconButton onClick={handleClose} sx={closeButtonStyle}>
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 'bold' }}>
            ورود یا ثبت‌نام
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
            لطفا یکی از گزینه‌های زیر را انتخاب کنید
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Button onClick={handleLoginModal} fullWidth sx={greenButtonStyle}>ورود به حساب کاربری</Button>
          <Button onClick={handleOpenSignUpModal} fullWidth sx={redButtonStyle} style={{ marginTop: '15px' }}>ثبت‌نام</Button>
        </Box>
      </Modal>

      {/* مودال ورود به حساب کاربری */}
      {isLoginModalOpen && (
        <Modal open={isLoginModalOpen} onClose={handleCloseLoginModal}>
          <LoginModal />
        </Modal>
      )}

      {/* مودال ثبت‌نام */}
      {isSignUpModalOpen && (
        <Modal open={isSignUpModalOpen} onClose={handleCloseSignUpModal}>
          <SignUp />
        </Modal>
      )}
    </>
  );
}
