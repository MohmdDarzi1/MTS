import { Box, styled, Typography, useTheme } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontFamily: "yekanBold",
  borderRadius: '8px',
  padding: '10px 16px',
  transition: 'all 0.3s ease-in-out', // انیمیشن تغییرات
  '&.active': {
    fontWeight: 'bold',
    backgroundColor: theme.palette.action.hover, 
    color: theme.palette.primary.main, // رنگ لینک فعال
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // سایه برای لینک فعال
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected, // پس‌زمینه در hover
    color: theme.palette.primary.main,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // سایه در hover
  },
}));

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme(); // دسترسی به تم برای تشخیص حالت دارک یا لایت

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: { xl: "0px", lg: "48px", md: "30px", sm: "20px", xs: "10px" },
        alignItems: "center",
        height: "50px", // ارتفاع بیشتر برای راحتی کلیک
        backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff", // رنگ پس‌زمینه بر اساس حالت تم
        padding: "0 20px", // فضای داخلی
        borderBottom: `2px solid ${theme.palette.divider}`, // خط پایین برای تفکیک
        boxShadow: theme.palette.mode === "dark" ? "0px 4px 10px rgba(0, 0, 0, 0.3)" : "0px 4px 10px rgba(0, 0, 0, 0.05)", // سایه ناوبار
      }}
    >
      <StyledNavLink to="/courses">
        <Typography sx={{width:"100px"}} variant="body1">دوره ها</Typography>
      </StyledNavLink>

      {location.pathname === "/" ? (
        <StyledNavLink 
          to="#landingTeachers"
          sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}
        >
          <Typography sx={{width:"100px"}} variant="body1">ایونت ها</Typography>
        </StyledNavLink>
      ) : (
        <StyledNavLink
          onClick={(e) => {
            e.preventDefault();
            navigate("/Teachers");
          }}
          to="/Teachers"
        >
          <Typography variant="body1">اساتید</Typography>
        </StyledNavLink>
      )}

      <StyledNavLink to="/Contactus" sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" }, color: 'inherit', textDecoration: 'none' }}>
        <Typography sx={{width:"100px"}} variant="body1">ارتباط با ما</Typography>
      </StyledNavLink>

      <StyledNavLink sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }} to="/studentPanel">
        <Typography variant="body1">صفحه دانشجو</Typography>
      </StyledNavLink>

      <StyledNavLink sx={{ display: { lg: "none", md: "none", sm: "none", xs: "block" } }} to="/articles">
        <Typography variant="body1">وبلاگ</Typography>
      </StyledNavLink>

      <StyledNavLink sx={{ display: { lg: "none", md: "none", sm: "none", xs: "block" } }} to="/">
        <Typography variant="body1">صفحه اصلی</Typography>
      </StyledNavLink>
    </Box>
  );
};

export default Navbar;
