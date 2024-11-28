import { Accordion, Box, Button, CardMedia, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const QuestionsAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "12px",
  marginBottom: "10px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem", color: "#7E57C2" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#333" : "#F3E5F5", // Dark mode support
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    fontWeight: "bold",
    color: theme.palette.mode === "dark" ? "#FFF" : "#6A1B9A", // Dark mode text color
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#FAFAFA", // Dark mode background
  color: theme.palette.mode === "dark" ? "#FFF" : "#424242", // Dark mode text color
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>();
  const [clicked, setClicked] = useState<boolean>(false);
  const theme = useTheme();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleTypographyClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Box
        sx={{
          width: "95%",
          // height: "700px",
          border: "1px solid transparent",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#E9E2F9", // Dark mode support
          padding: "40px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            width: "600px",
            // height: "700px",
            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#FFF", // Dark mode background
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component={"img"}
            image="src/assets/image/mts/faq_img.png.png"
            sx={{
              width: "100%",
              maxWidth: "300px",
              padding: "30px",
              borderRadius: "8px",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "900px",
            // height: "650px",
            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#FFF", // Dark mode background
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            padding: "30px",
            overflowY: "auto",
          }}
        >
          <Box sx={{ width: "187px", height: "31px", marginTop: "40px" }}>
            <Button
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#EFEEFE",
                borderRadius: "30px",
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              دسته بندی های پرطرفدار
            </Button>
          </Box>

          <Box sx={{ width: "404px", marginTop: "20px" }}>
            <Typography
              sx={{
                fontFamily: "yekanbold",
                fontSize: "40px",
                fontWeight: "bold",
                color: theme.palette.mode === "dark" ? "#FFD700" : "#4A148C", // Dark mode title color
              }}
            >
              شروع به تمرین از مربیان حرفه‌ای جهان
            </Typography>
          </Box>

          <Box sx={{ width: "400px", height: "54px", marginTop: "10px" }}>
            <Typography
              sx={{
                fontFamily: "iransans",
                fontSize: "16px",
                color: theme.palette.mode === "dark" ? "#BBBBBB" : "#616161", // Dark mode text color
              }}
            >
              امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است
            </Typography>
          </Box>

          {/* Accordion Section */}
          <QuestionsAccordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography
                onClick={handleTypographyClick}
                sx={{
                  color: clicked ? "blue" : theme.palette.mode === "dark" ? "#FFD700" : "#6A1B9A", // Dark mode text color
                  cursor: "pointer",
                  fontFamily: "yekanbold",
                }}
              >
                نامبر وان می خواهد به شما چه چیز{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "iransans" }}>
                صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند
                در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از
                نوع و درهم گرفت.
              </Typography>
            </AccordionDetails>
          </QuestionsAccordion>
          <QuestionsAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography
                onClick={handleTypographyClick}
                sx={{
                  color: clicked ? "blue" : theme.palette.mode === "dark" ? "#FFD700" : "#6A1B9A", // Dark mode text color
                  cursor: "pointer",
                  fontFamily: "yekanbold",
                }}
              >
                نامبر وان می خواهد به شما چه چیز{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "iransans" }}>
                صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند
                در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از
                نوع و درهم گرفت.
              </Typography>
            </AccordionDetails>
          </QuestionsAccordion>
          <QuestionsAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography
                onClick={handleTypographyClick}
                sx={{
                  color: clicked ? "blue" : theme.palette.mode === "dark" ? "#FFD700" : "#6A1B9A", // Dark mode text color
                  cursor: "pointer",
                  fontFamily: "yekanbold",
                }}
              >
                نامبر وان می خواهد به شما چه چیز{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "iransans" }}>
                صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند
                در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از
                نوع و درهم گرفت.
              </Typography>
            </AccordionDetails>
          </QuestionsAccordion>

          {/* Other accordions omitted for brevity */}
        </Box>
      </Box>
    </>
  );
}
