import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const RightBox = () => {
  return (
    <>
      <Box
  sx={{
    width: "310px",
    height: "auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "17px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  }}
>
  <Typography
    sx={{
      width: "100%",
      textAlign: "right",
      paddingRight: "15px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#5751E1",
      marginBottom: "10px",
    }}
  >
    تماس سریع
  </Typography>
  <Typography
    sx={{
      width: "100%",
      textAlign: "right",
      paddingRight: "15px",
      fontSize: "14px",
      color: "#666",
      marginBottom: "20px",
    }}
  >
    از طریق تماس با ما راحت باشید
    اگر ترجیح می‌دهید توییتر یا فیس‌بوک!
  </Typography>
  <TextField
    fullWidth
    placeholder="نام"
    sx={{ marginBottom: "15px", backgroundColor: "#f9f9f9",direction:"rtl" }}
  />
  <TextField
    fullWidth
    placeholder="پست الکترونیکی"
    sx={{ marginBottom: "15px", backgroundColor: "#f9f9f9",direction:"rtl" }}
  />
  <TextField
    fullWidth
    placeholder="موضوع"
    sx={{ marginBottom: "15px", backgroundColor: "#f9f9f9",direction:"rtl" }}
  />
  <TextField
    fullWidth
    placeholder="تلفن"
    sx={{ marginBottom: "15px", backgroundColor: "#f9f9f9",direction:"rtl" }}
  />
  <TextField
  
    fullWidth
    placeholder="پیام"
    multiline
    rows={4}
    sx={{ marginBottom: "15px", backgroundColor: "#f9f9f9" ,direction:"rtl"}}
  />
  <Button
    fullWidth
    variant="contained"
    sx={{
      backgroundColor: "#5751E1",
      color: "#fff",
      padding: "10px",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#3c3ea1",
      },
    }}
  >
    ارسال
  </Button>
</Box>

    </>
  )
}

export default RightBox