import { Box, Typography, useTheme } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
// import moment from 'moment-jalaali'; // باید moment-jalaali را به درستی import کنید
import { UserProfile } from '../../../Core/Services/api/UserPanel';
import moment from 'moment';

type ProfileData = {
  data: UserProfile | undefined;
};

const HelloMyName: React.FC<ProfileData> = ({ data }) => {
  const theme = useTheme();

  const [iranTime, setIranTime] = useState('');
  const [iranDate, setIranDate] = useState('');

  const updateIranTimeAndDate = () => {
    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000;
    const iranOffset = 3.5 * 60 * 60000;
    
    const iranTime = new Date(now.getTime() + utcOffset + iranOffset);
    
    const hours = iranTime.getHours().toString().padStart(2, '0');
    const minutes = iranTime.getMinutes().toString().padStart(2, '0');
    setIranTime(`${hours}:${minutes}`);

    const iranDate = moment(iranTime).format('jYYYY/jMM/jDD');
    setIranDate(iranDate);
  };

  useEffect(() => {
    updateIranTimeAndDate();
    const interval = setInterval(updateIranTimeAndDate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        direction: "rtl",
        width: "100%",
        height: "120px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        boxSizing: "border-box",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme.palette.mode === "dark" ? "#555" : "#f5f5f5",
      }}
    >
      <Box sx={{ flex: 1, textAlign: "right", paddingRight: "20px" }}>
        <Typography sx={{
          fontSize: "28px",
          fontWeight: "bold",
          color: theme.palette.mode === "dark" ? "#fff" : "#333",
        }}>
          سلام صبح بخیر {data?.fName} 😍 
        </Typography>
      </Box>

      <Box sx={{ minWidth: "150px", textAlign: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <AlarmOnIcon sx={{ marginRight: "5px", color: "#FF6F61" }} />
          <Typography sx={{
            fontWeight: "500",
            color: theme.palette.mode === "dark" ? "#fff" : "#333",
          }}>
            ساعت ایران
          </Typography>
        </Box>
        <Typography sx={{
          color: theme.palette.mode === "dark" ? "#fff" : "#666",
        }}>
          {iranTime}
        </Typography>
      </Box>

      <Box sx={{ minWidth: "150px", textAlign: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <AlarmOnIcon sx={{ marginRight: "5px", color: theme.palette.mode === "dark" ? "#fff" : "green" }} />
          <Typography sx={{
            fontWeight: "500",
            color: theme.palette.mode === "dark" ? "#fff" : "#333",
          }}>
            تاریخ ایران
          </Typography>
        </Box>
        <Typography sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#666" }}>
          {iranDate}
        </Typography>
      </Box>
    </Box>
  );
};

export default HelloMyName;
