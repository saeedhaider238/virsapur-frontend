import React from 'react'
import { useParams } from 'react-router'
import { coursesData } from '../../data'
import Navbar from '../../Components/Navbar'
import { Grid, useMediaQuery } from '@mui/material'
import LearningProgress from './sections/LearningProgress'

const Course = () => {
  const isSmallScreen = useMediaQuery('(max-width: 470px)');
    const {coursePath} = useParams()
    const course = coursesData.find(course => course.path === `/course/${coursePath}`)
  return (
    <>
      <Navbar />
      <Grid container sx={{padding: '130px 0px 30px 0px', backgroundColor: '#9697a9', justifyContent: 'center' }}>
        <Grid sx={{maxWidth: '1200px', width: '100%', padding: '0px 20px'}} size={12}>
            <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isSmallScreen ? '60px' : '35px', margin: '0px' }}>COURSE DETAILS </h1>
        </Grid>
      </Grid>

      <Grid container sx={{ width: '100%', padding: '0px 20px', justifyContent: 'center', marginTop: '30px' }} size={12}>
        <Grid container sx={{maxWidth: '1200px'}}>
          <Grid size={{xs: 12, sm: 6}}>
            <img src={course.image} style={{width: '100%'}} alt="" />
          </Grid>
          <Grid container size={{xs: 12, sm: 6}} sx={{padding: '20px', flexDirection: 'column', justifyContent: 'center'}}>
            <h1 style={{margin: '0px'}}>{course.title}</h1>
            <p style={{marginTop: '5px', marginBottom: '0px'}}>{course.summary}</p>
            <p style={{marginTop: '5px', marginBottom: '0px'}}>{course.level}</p>
            <p style={{marginTop: '5px', marginBottom: '0px'}}>{course.price}</p>
            <p></p>
          </Grid>
        </Grid>
        <LearningProgress />
      </Grid>
    </>
  )
}

export default Course
