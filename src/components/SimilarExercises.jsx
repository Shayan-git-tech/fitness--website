import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:"100px", xs: "0"}, p: "20px" , gap: "10px"}}>
      <Typography variant='h3' mb="50px">Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{p: "2", position: 'relative', justifyContent: "center", mb: "20px"}}>
        {targetMuscleExercises ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}
      </Stack>
      <Typography variant='h3' mb="50px">Exercises that uses the same equipment</Typography>
      <Stack width="100%" direction='row' sx={{p: "2px", position: 'relative', justifyContent: "center"}}>
        {equipmentExercises ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
