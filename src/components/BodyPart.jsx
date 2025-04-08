import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      onClick={() => 
      {setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })}
      }
      sx={{
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        gap: '47px',
        cursor: 'pointer',
        textAlign: 'center',
        borderTop: bodyPart === item ? '4px solid #ff2625' : 'none',
        transition: '0.3s ease-in-out'
        }}
    >
      <img src={Icon} alt="dumbell" style={{ width: '40px', height: '40px' }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        textTransform="capitalize"
        color='#3a1212'
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
