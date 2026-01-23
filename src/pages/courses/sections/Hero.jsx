import React from 'react'
import Grid from '@mui/material/Grid';
import productsSectionBackground from '../../../assets/backgrounds/productsSectionBackground.mp4'
import { useMediaQuery } from '@mui/material';
import productsSectionBackgroundPoster from '../../../assets/backgrounds/productsSectionBackgroundPoster.jpg'

const Hero = () => {
  const isMobileScreen = useMediaQuery('(max-width: 470px)')
  
  return (
      <Grid sx={{ position: 'relative', backgroundImage: `url(${productsSectionBackgroundPoster})` }}>
        <Grid container sx={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
          <Grid item sx={{ overflow: 'hidden', display: 'flex', position: 'absolute', justifyContent: 'center', width: '100%', height: '100%' }}>
            <video src={productsSectionBackground} autoPlay loop muted style={{ width: '100%', minWidth: '1400px', objectFit: 'cover' }} poster={productsSectionBackgroundPoster} ></video>
          </Grid>
          <Grid sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', color: 'white', padding: !isMobileScreen ? '20px 40px' : '20px 20px', flexDirection: 'column', postion: 'relative', zIndex: '20' }}>
            <h1 style={{ letterSpacing: '0px', fontWeight: '100', fontSize: !isMobileScreen ? '80px' : '55px', marginBottom: '0px' }}>Courses</h1>
            <p style={{ letterSpacing: '0px', fontWeight: '500', fontSize: !isMobileScreen ? '30px' : '25px', marginTop: '0px', fontFamily: 'Montserrat', }}>Deep Dives Into Culture & Heritage</p>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Hero
