import React from 'react'
import {Stack} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Stack 
      justifyContent="space-around"
      direction="row"
      px="20px"
      sx={{
        gap: {
          sm: '122px', xs: '40px'
        },
        mt: {
          sm: '32px', xs: '20px'
        },
        justifyContent: 'none',
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{width: '48px', height: '48px', margin: '0 20px'}}/>
      </Link>
      <Stack direction="row" spacing={2} alignItems="flex-end" fontSize="24px">
        <Link 
          to="/" 
          style={{
            textDecoration: 'none', 
            color: '#3a1212', 
            borderBottom: isHomePage ? '3px solid #ff2625' : 'none'
          }}
        >
          Home
        </Link>
        <a 
          href="#exercises" 
          style={{
            textDecoration: 'none', 
            color: '#3a1212'
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar
