import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  useTheme,
  Modal,
  Typography,
  List,
  CardMedia,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useGetSearchCard } from "../../Core/Services/api/courses";

interface SearchBoxProps {
  localSearchValue: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  localSearchValue,
  handleSearchChange,
}) => {
  const theme = useTheme();
  const { data } = useGetSearchCard(localSearchValue);

  // مدیریت باز و بسته شدن مودال
  const [isModalOpen, setIsModalOpen] = useState(false);

  // موقعیت مودال
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  // تنظیم رفرنس برای مودال
  const modalRef = useRef<HTMLDivElement>(null);

  // متغیر برای پیگیری وضعیت کشیدن
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleModalOpen = () => {
    if (localSearchValue.trim()) {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // شروع کشیدن مودال
  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - modalPosition.x, y: e.clientY - modalPosition.y });
  };

  // کشیدن مودال
  const handleDragging = (e: MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setModalPosition({ x: newX, y: newY });
  };

  // تمام کردن کشیدن مودال
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // اضافه کردن event listeners برای کشیدن
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragging);
      window.addEventListener("mouseup", handleDragEnd);
    } else {
      window.removeEventListener("mousemove", handleDragging);
      window.removeEventListener("mouseup", handleDragEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleDragging);
      window.removeEventListener("mouseup", handleDragEnd);
    };
  }, [isDragging]);

  return (
    <>
      {/* جعبه جستجو */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          direction: "ltr",
        }}
      >
        <TextField
          value={localSearchValue}
          onChange={handleSearchChange}
          onBlur={handleModalOpen} // باز کردن مودال وقتی فیلد از فوکوس خارج شد
          placeholder={"چی میخوای یاد بگیری؟؟"}
          variant="outlined"
          sx={{
            fontSize: "20px",
            borderRadius: "28px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "70%",
            height: "55px",
            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
            "& .MuiInputBase-input::placeholder": {
              textAlign: "right",
              fontSize: "12px",
              color: theme.palette.mode === "dark" ? "#ccc" : "#666",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "28px",
              "& fieldset": {
                borderColor: theme.palette.divider,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.text.primary,
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976D2",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon
                  sx={{ color: theme.palette.primary.main }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* مودال برای نمایش نتایج جستجو */}
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          ref={modalRef}
          sx={{
            position: "absolute",
            top: modalPosition.y || "50%",  // در ابتدا مودال در وسط صفحه باشد
            left: modalPosition.x || "50%",  // در ابتدا مودال در وسط صفحه باشد
            transform: "translate(-50%, -50%)",  // برای قرار دادن دقیق مودال در وسط
            width: "70%",
            backgroundColor: theme.palette.background.paper,
            boxShadow: 24,
            borderRadius: "12px",
            padding: "20px",
            maxHeight: "80vh", // حداکثر ارتفاع مودال
            overflowY: "auto", // فعال‌سازی اسکرول عمودی
            cursor: isDragging ? "grabbing" : "grab", // تغییر حالت موس هنگام کشیدن
          }}
          onMouseDown={handleDragStart} // شروع کشیدن
        >
          <Typography
            variant="h6"
            sx={{
              marginBottom: "20px",
              textAlign: "center",
              color: theme.palette.text.primary,
            }}
          >
            نتایج جستجو
          </Typography>

          {/* نمایش نتایج */}
          {data && data.courseFilterDtos.length > 0 ? (
            <List>
              {data.courseFilterDtos.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    overflowX: "auto",
                    width: "100%",
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#424242" : "#f8f8f8",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    borderRadius: "20px",
                    display: "grid",
                    gridTemplateColumns: "100px 1fr 1fr 1fr 1fr",
                    alignItems: "center",
                    padding: "10px 20px",
                    gap: "20px",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0px 4px 12px rgba(255, 255, 255, 0.1)"
                        : "0px 4px 12px rgba(0, 0, 0, 0.05)",
                    marginBottom: "20px",
                    "&:hover": {
                      backgroundColor:
                        theme.palette.mode === "dark" ? "#616161" : "#e8e8e8",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: "80px", height: "60px", borderRadius: "10px" }}
                    image={item.tumbImageAddress || "src/assets/image/ostad.jpg"}
                  />
                  <Typography textAlign="center">{item.title}</Typography>
                  <Typography textAlign="center">{item.teacherName}</Typography>
                  <Typography textAlign="center">{item.lastUpdate}</Typography>
                  <Typography textAlign="center">{item.statusName}</Typography>
                </Box>
              ))}
            </List>
          ) : (
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              موردی یافت نشد.
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default SearchBox;
