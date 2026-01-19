import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import { useScroll } from 'framer-motion'
import Hero from './sections/Hero'
import { Grid } from '@mui/material'
import LearningHub from './sections/LearningHub'
import Course from './sections/Course'

const Courses = () => {
    const { scrollY } = useScroll(); 

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

  return (
    <>
        <Navbar scrollY={scrollY} />
        <Hero scrollY={scrollY} /> 
        <Grid sx={{ paddingTop: '60vh', display: 'flex', justifyContent: 'center', backgroundColor: '#fffdf1', }}>
            <LearningHub scrollY={ scrollY } />
        </Grid>
        <Course />
        {/* <Grid sx={{height: '100vh'}}>
      </Grid> */}
    </>
  )
}

export default Courses
