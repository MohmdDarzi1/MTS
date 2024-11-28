import { Box, Button, styled, useTheme } from '@mui/material';
import React, { useState } from 'react';
import LogoBox from './LogoBox/LogoBox';
import { Stack } from '@mui/system';
import Navbar from './Navbar/Navbar';
import TopBox from './Search&Accordion/TopBox';
import ButtonComponent from '../../Common/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../../redux/slice/SignModal';
import BasicModal from '../LoginPages/Sign&Login/SignModal';
import { RootState } from "../../../redux/Store/Store";
import { selectDarkMode, toggleDarkMode } from '../../../redux/slice/darkmodeSlice';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const StyledStack = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    position: "relative",
    zIndex: "4",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff', // رنگ پس‌زمینه بر اساس دارک یا لایت مود
    color: theme.palette.mode === 'dark' ? '#fff' : '#000', // رنگ متن بر اساس دارک یا لایت مود
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "30px",
    backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#f9f9f9', // رنگ پس‌زمینه داخلی
}));

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectDarkMode);
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light"; 

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const isModalOpen = useSelector((state: RootState) => state.signModal.isOpen);

  const [searchValue, setSearchValue] = useState(""); 
  const [selectValue, setSelectValue] = useState(1);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSelectChange = (value: number) => {
    setSelectValue(value);
  };

  return (
    <>
      <StyledStack>
        <StyledBox sx={{ width: { lg: "95%", md: "800px", sm: "600px", xs: "300px" } }}>
          <ButtonComponent onClick={handleOpenModal}> </ButtonComponent>

          {isModalOpen && <BasicModal />}

          <Button
            onClick={handleToggle}
            sx={{
              width: "60px",
              height: "60px",
              backgroundColor: mode === "dark" ? "#424242" : "#FFD700",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.3s ease-in-out",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: mode === "dark" ? "#333333" : "#FFC300",
                boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            {mode === "dark" ? (
              <Brightness7Icon sx={{ fontSize: "30px" }} />
            ) : (
              <Brightness4Icon sx={{ fontSize: "30px" }} />
            )}
          </Button>
          
          <TopBox 
            searchValue={searchValue} 
            onSearchChange={handleSearchChange} 
            selectValue={selectValue} 
            onSelectChange={handleSelectChange} 
          />
          
          <Navbar />
          <LogoBox />
        </StyledBox>
      </StyledStack>
    </>
  );
};

export default Header;
