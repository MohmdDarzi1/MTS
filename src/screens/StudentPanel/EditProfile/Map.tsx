import React from 'react';
import { Box } from '@mui/material';

const Map = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc',
      }}
    >
      <img
        src="https://via.placeholder.com/800x400?text=Your+Map+Here"
        alt="Static Map"
        style={{ width: '100%', height: '100%', borderRadius: '10px' }}
      />
    </Box>
  );
}

export default Map;
