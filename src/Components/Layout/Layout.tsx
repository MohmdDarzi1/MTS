import React, { ReactNode } from "react";
import Header from "./Header/Header";
import { Box, styled } from "@mui/material";
import { Stack } from "@mui/system";

const StyledStack = styled(Stack)({
  direction: "rtl",
  flexDirection: "column",
  alignItems: "stretch", // Align items to fill the width
  justifyContent: "flex-start",
  width: "100vw", // Use full viewport width
  // height: "100vh", // Full height for the layout
  overflow: "hidden", // Prevent overflow
  backgroundColor: "white",
//   marginRight:"150px"
});

interface LayoutProps {
  children: ReactNode; // Define the type for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledStack
      bgcolor={"primary.background"}
      color={"text.primary"}
    >
      <Header />
      <Box sx={{ flexGrow: 1 }}> {/* Allow children to grow and fill available space */}
        {children}
      </Box>
    </StyledStack>
  );
};

export default Layout;
