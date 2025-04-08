import React, {useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import "react-horizontal-scrolling-menu/dist/styles.css";

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([]);
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises bodyPart={bodyPart} setExercises={setExercises} setBodyPart={setBodyPart}/>
      <Exercises bodyPart={bodyPart} setExercises={setExercises} exercises={exercises}/>
    </Box>
  )
}

export default Home
