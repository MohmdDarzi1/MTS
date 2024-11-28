import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode } from "./redux/slice/darkmodeSlice";
import Courses from "./screens/Courses/Courses";
import './index.css';
import Landing from "./screens/Landing/Landing";
import DetailCourse from "./screens/Courses/DetailCourse/DetailCourse";
import Teachers from "./screens/Teachers/Teachers";
import MyTeacher from "./screens/Teachers/MyTeacher";
import Contactus from "./screens/TamasBaMa.tsx/Contactus";
import StudentPanel from "./screens/StudentPanel/StudentPanel";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { setToken } from "./redux/slice/token";

// اعلام گسترش‌های تم MUI
declare module '@mui/material/styles' {
  interface Palette {
    second?: string;
    slider?: string;
  }

  interface PaletteOptions {
    second?: string;
    slider?: string;
    background?: {
      default?: string;
      paper?: string;
    };
  }
}

const getThemeColors = (mode: "light" | "dark") => {
  if (mode === "light") {
    return {
      background: { default: "#F2FFF8", paper: "#fff" },
      secondaryMain: "#fff",
      textPrimary: "#000",
      textSecondary: "#555",
    };
  } else {
    return {
      background: { default: "#0D0007", paper: "#121212" },
      secondaryMain: "#121212",
      textPrimary: "#fff",
      textSecondary: "#bbb",
    };
  }
};


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // بارگیری توکن از localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      // ذخیره توکن در Redux
      dispatch(setToken(token));
    }
  }, [dispatch]);
  const mode = useSelector(selectDarkMode) as "light" | "dark"; // اطمینان از نوع
  const colors = getThemeColors(mode);

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#2196F3",
      },
      secondary: {
        main: colors.secondaryMain,
      },
      background: colors.background,
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
    },
    typography: {
      fontFamily: "iransans",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/detailCourse/:courseId" element={<DetailCourse />} />
          
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/myTeacher/:teacherId" element={<MyTeacher />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/studentPanel" element={<StudentPanel />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
