import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import BodyPartImage from "../assets/icons/body-part.png"
import TargetImage from "../assets/icons/target.png"
import EquipmentImage from "../assets/icons/equipment.png"
const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
    <img src={gifUrl} alt={name} className="detail-image" loading='lazy'/>
    <Stack sx={{gap: {lg: '35px', xs: '20px'}, padding: '20px'}}>
        <Typography variant="h3" textTransform="capitalize">{name}</Typography>
        <Typography variant="h6">
            Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        <Stack direction="row" gap="24px" sx={{flexWrap: 'wrap', justifyContent: 'center'}}>
            <Stack gap="24px" alignItems="center">
                <Button sx={{background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                    <img src={BodyPartImage} alt={bodyPart} style={{width: '50px', height: '50px'}}/>
                </Button>
                <Typography variant="h6" textTransform="capitalize">{bodyPart}</Typography>
            </Stack>
            <Stack gap="24px" alignItems="center">
                <Button sx={{background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                    <img src={TargetImage} alt={target} style={{width: '50px', height: '50px'}}/>
                </Button>
                <Typography variant="h6" textTransform="capitalize">{target}</Typography>
            </Stack>
            <Stack gap="24px" alignItems="center">
                <Button sx={{background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                    <img src={EquipmentImage} alt={equipment} style={{width: '50px', height: '50px'}}/>
                </Button>
                <Typography variant="h6" textTransform="capitalize">{equipment}</Typography>
            </Stack>

        </Stack>
      </Stack>
    </Stack>
  )
}

export default Detail
