import React from 'react'
import Grid from '@mui/material/Grid';
import ProductsSectionBackground from '../../../assets/backgrounds/productsSectionBackground.mp4'
import productsSectionBackgroundPoster from '../../../assets/backgrounds/productsSectionBackgroundPoster.jpg'
import { useMediaQuery } from '@mui/material';

const ProjectsTitle = () => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)')

  return (
    <Grid container sx={{marginTop: '100px', height: '100vh', position: 'relative'}}>
        <Grid item sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', position: 'absolute', zIndex: '-1', width: '100%', height: '100%' }}>
            <video src={ProductsSectionBackground} autoPlay loop muted style={{ width: '100%', minWidth: '1400px', objectFit: 'cover' }} poster={productsSectionBackgroundPoster} ></video>
        </Grid>
        <Grid sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', }}>
            <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isMobileScreen ? '80px' : '55px', textAlign: 'center' }}>OUR PROJECTS</h1>
        </Grid>
    </Grid>
  )
}

export default ProjectsTitle
