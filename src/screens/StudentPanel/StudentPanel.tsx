import { Box, Stack, styled, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import EditProfile from "./EditProfile/Profile";
import MyProfile from "./MyProfile/MyDetail";
import ReserveDetails from "./ReserveDetails/ReserveDetails";
import Exit from "./Exit/Exit";
import RessetPasswordmy from "./RessetPasswordmy/RessetPasswordmy";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Dashbord from "./Dashbord/Dashbord";
import Payment from "./Payments/Payment";
import Useraccounts from "./User accounts/User accounts";
import StuName from "./StuName";
import MyDetail from "./MyProfile/MyDetail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PaymentIcon from "@mui/icons-material/Payment";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import Profile from "./EditProfile/Profile";
import { useTheme } from "@mui/material/styles"; // اضافه کردن useTheme
import Profile from "./EditProfile/Profile";
import { useUserProfile } from "../../Core/Services/api/UserPanel";

const StudentPanel = () => {
  const token = localStorage.getItem("authToken");
  const [value, setValue] = React.useState("1");
  const theme = useTheme(); // گرفتن تم فعلی
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const { data } = useUserProfile(token || "");
  console.log(data, "daadaaa");
  const StyledTab = styled(Tab)(({ theme }) => ({
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.light,
      color: "#fff",
      borderRadius: "8px",
      transition: "all 0.3s ease",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      transition: "background-color 0.3s ease",
      color: "#fff",
    },
    marginBottom: "10px",
    padding: "12px 16px",
    fontSize: "1rem",
    fontWeight: "bold",
  }));

  const ExitTab = styled(StyledTab)(({ theme }) => ({
    color: "#ff0000", // رنگ قرمز برای خروج
    "&.Mui-selected": {
      backgroundColor: "#ffcccc", // پس‌زمینه قرمز روشن هنگام انتخاب
    },
  }));

  const ContentContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "90%",
    borderRadius: "15px",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 6px 12px rgba(0, 0, 0, 0.7)"
        : "0 6px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#fff", // رنگ پس‌زمینه در دارک مود و لایت مود
    padding: "24px",
    marginBottom: "20px",
  }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        width: "100%",
        marginTop: "30px",
        direction: "ltr",
        backgroundColor: theme.palette.mode === "dark" ? "#303030" : "#f9f9f9", // تنظیم پس‌زمینه کل صفحه
        minHeight: "100vh", // برای پر کردن کل صفحه
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          width: "80%",
          display: "flex",
          gap: "20px",
          // border: "1px solid",
          borderColor: theme.palette.mode === "dark" ? "#444" : "#ccc", // تنظیم رنگ مرزها در دارک مود
          padding: "30px",
          borderRadius: "10px",
          backgroundColor:
            theme.palette.mode === "dark" ? "#424242" : "#f9f9f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        {data ? (
          <StuName data={{ ...data, currentPictureAddress: "" }} />
        ) : (
          <Typography>Loading...</Typography>
        )}
        <Box
          sx={{
            width: "100%",
            // border: "1px solid",
            borderColor: theme.palette.mode === "dark" ? "#444" : "#ccc",
            backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <ContentContainer>
            <TabContext value={value}>
              <Stack
                sx={{
                  flexDirection: "row",
                  height: "100%",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <TabPanel value="1">
                    <Dashbord data={data} />
                  </TabPanel>
                  <TabPanel value="2">
                    <Profile data={data} />
                  </TabPanel>
                  <TabPanel value="3">
                    <MyDetail SearchValue={searchValue} handleSearchChange={handleSearchChange}/>
                  </TabPanel>
                  <TabPanel value="4">
                    <RessetPasswordmy />
                  </TabPanel>
                  <TabPanel value="5">
                    <ReserveDetails />
                  </TabPanel>
                  <TabPanel value="6">
                    <Payment />
                  </TabPanel>
                  <TabPanel value="7">
                    <Useraccounts />
                  </TabPanel>
                  <TabPanel value="8">
                    <Exit />
                  </TabPanel>
                </Box>
              </Stack>
            </TabContext>
          </ContentContainer>
        </Box>
      </Box>

      <Box
        sx={{
          direction: "rtl",
          width: "276px",
          height: "auto",
          // border: "1px solid",
          borderColor: theme.palette.mode === "dark" ? "#444" : "#ccc",
          backgroundColor:
            theme.palette.mode === "dark" ? "#303030" : "#f4f4f4",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <TabContext value={value}>
          <TabList
            component="div"
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              marginTop: "16px",
              flexGrow: 1,
              "& .MuiTab-root": {
                justifyContent: "flex-start",
                textAlign: "left",
                padding: "12px",
                fontSize: "1rem",
                color: theme.palette.mode === "dark" ? "#fff" : "#000", // تنظیم رنگ تب‌ها
              },
            }}
            textColor="primary"
            indicatorColor="primary"
          >
            <StyledTab
              icon={<DashboardIcon />}
              iconPosition="start"
              label="داشبرد"
              value="1"
            />
            <StyledTab
              icon={<AccountCircleIcon />}
              iconPosition="start"
              label=" پروفایل"
              value="2"
            />
            <StyledTab
              icon={<BookIcon />}
              iconPosition="start"
              label="دوره های من"
              value="3"
            />
            <StyledTab
              icon={<LockIcon />}
              iconPosition="start"
              label="تغییر رمز عبور"
              value="4"
            />
            <StyledTab
              icon={<BookIcon />}
              iconPosition="start"
              label="رزرو دوره ها"
              value="5"
            />
            <StyledTab
              icon={<PaymentIcon />}
              iconPosition="start"
              label="پرداخت"
              value="6"
            />
          </TabList>
          <Box sx={{ marginTop: "auto" }}>
            <TabList
              component="div"
              orientation="vertical"
              value={value}
              onChange={handleChange}
              sx={{ marginTop: "16px" }}
            >
              <StyledTab
                icon={<AccountBoxIcon />}
                iconPosition="start"
                label="حساب های کاربری"
                value="7"
              />
              <ExitTab
                icon={<ExitToAppIcon />}
                iconPosition="start"
                label="خروج از حساب"
                value="8"
              />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default StudentPanel;
