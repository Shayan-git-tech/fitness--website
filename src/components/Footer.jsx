import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" py="20px">
      <Stack gap="20px" alignItems="center">
        <img src={Logo} alt="logo" style={{ width: '200px', height: '40px' }} />
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="10px" textAlign="center" pb="40px">Made with ❤️ by SHAYAN</Typography>
      </Stack>
      
    </Box>
  )
}

export default Footer
