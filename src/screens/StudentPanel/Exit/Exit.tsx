import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Exit = () => {
  const navigate = useNavigate()
  const handleExit = () => {
    console.log('خروج');
    navigate("/");
  localStorage.removeItem("authToken")
  };

  const handleCancel = () => {
    console.log('لغو خروج');
  };

  return (
    <Box
      sx={{
        width: '450px',
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        padding: '40px',
        borderRadius: '25px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        margin: '100px auto',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '150px',
          height: '150px',
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: '20px',
          color: '#343a40',
          fontWeight: 'bold',
          zIndex: 1,
          position: 'relative',
        }}
      >
        آیا مطمئن هستید که می‌خواهید خارج شوید؟
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginBottom: '30px',
          color: '#6c757d',
          zIndex: 1,
          position: 'relative',
        }}
      >
        اگر از حساب خود خارج شوید، تغییرات ذخیره نمی‌شود.
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center" sx={{ zIndex: 1, position: 'relative' }}>
        <Button
        // onClick={navigate("/")}
          variant="contained"
          
          sx={{
        
            padding: '12px 30px',
            borderRadius: '50px',
            background: 'linear-gradient(45deg, #ff6b6b, #ff8787)',
            boxShadow: '0px 8px 15px rgba(255, 107, 107, 0.3)',
            transition: 'all 0.3s ease',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              background: 'linear-gradient(45deg, #ff8787, #ff6b6b)',
              boxShadow: '0px 12px 20px rgba(255, 107, 107, 0.4)',
              transform: 'translateY(-3px)',
            },
          }}
          onClick={handleExit}
        >
          خروج
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: '12px 30px',
            borderRadius: '50px',
            borderColor: '#6c757d',
            color: '#6c757d',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            '&:hover': {
              borderColor: '#495057',
              color: '#495057',
              backgroundColor: '#e9ecef',
              transform: 'translateY(-3px)',
            },
          }}
          onClick={handleCancel}
        >
          لغو
        </Button>
      </Stack>
    </Box>
  );
};

export default Exit;
