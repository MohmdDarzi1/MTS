import { Box, Pagination, PaginationItem, Stack } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CoursePageProps {
  currentPage: number;
  totalCount: number; 
  itemsPerPage: number;
  onPageChange: (newPage: number) => void; 
}

const CoursePage: React.FC<CoursePageProps> = ({ currentPage, totalCount, onPageChange,itemsPerPage }) => {
  // const pageCount = Math.ceil(totalCount / 10); 

  const pageCount = Math.ceil(totalCount / itemsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <Box sx={{ width: "100%", height: "200px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#0000" }}>
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </Box>
  );
};

export default CoursePage;
