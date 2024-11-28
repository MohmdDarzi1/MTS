import { Box } from '@mui/material'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'
const containerStyle = {
    width: '100%',
    height: '400px',
  };
  
  const center = {
    lat: 35.6892,
    lng: 51.3890, // مختصات تهران
  };
const GoogleApi = () => {
  return (
    <>
            <Box
          sx={{ width: "70%", height: "555px", border: "1px solid green" }}
        >
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
        </Box>
    </>
  )
}

export default GoogleApi