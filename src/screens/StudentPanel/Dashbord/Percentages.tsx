import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

interface PercentagesProps {
  totalFields: number;
  filledFields: number;
}

const Percentages: React.FC<PercentagesProps> = ({ totalFields, filledFields }) => {
  const completionPercentage = (filledFields / totalFields) * 100;

  return (
    <Box
      sx={{
        width: "275px",
        height: "287px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        تکمیل حساب کاربری
      </Typography>

      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={completionPercentage}
          size={100}
          thickness={4}
          sx={{ color: completionPercentage === 100 ? "green" : "#3f51b5" }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="green">
            {`${Math.round(completionPercentage)}%`}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          marginTop: "10px",
          color: completionPercentage === 100 ? "green" : "gray",
        }}
      >
        {completionPercentage === 100
          ? "حساب شما کامل است"
          : "درصد تکمیل اطلاعات حساب"}
      </Typography>
    </Box>
  );
};

export default Percentages;
