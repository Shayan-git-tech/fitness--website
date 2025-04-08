import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '200px'
    }}
  >
    <CircularProgress 
      sx={{ 
        color: '#FF2625',
        width: '50px !important',
        height: '50px !important'
      }} 
    />
  </Box>
);

export default Loader; 