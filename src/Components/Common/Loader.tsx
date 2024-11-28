import React from "react";
import { Box, SvgIcon } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// تعریف انیمیشن برای انیمیشن خطی
const dashAnimation = keyframes`
  72.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

// تعریف استایل SVG
const StyledSvg = styled("svg")({
  width: "64px",
  height: "48px",
});

// خط پشتی (background line)
const StyledPolylineBack = styled("polyline")({
  fill: "none",
  stroke: "#ff4d5033",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

// خط جلویی (animated line)
const StyledPolylineFront = styled("polyline")({
  fill: "none",
  stroke: "#ff4d4f",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeDasharray: "48, 144",
  strokeDashoffset: 192,
  animation: `${dashAnimation} 1.4s linear infinite`,
});

const Loader = () => {
  return (
    <Box className="loading" display="flex" justifyContent="center" alignItems="center">
      <StyledSvg>
        <StyledPolylineBack points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" />
        <StyledPolylineFront points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" />
      </StyledSvg>
    </Box>
  );
};

export default Loader;
