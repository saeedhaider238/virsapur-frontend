import React from 'react'
import Grid from '@mui/material/Grid';
import LandingSectionBackground from '../../../assets/backgrounds/LandingSectionBackground.mp4'

const Hero = () => {
  return (
    <Grid container sx={{overflow: 'hidden', height: '100vh', position: 'relative'}}>
          <Grid item sx={{overflow: 'hidden', display: 'flex', justifyContent: 'center', position: 'absolute', zIndex: '-1', width: '100%', height: '100%'}}>
            <video src={LandingSectionBackground} autoPlay loop muted style={{width: '100%', minWidth: '1400px', objectFit: 'cover'}}></video>
          </Grid>
          <Grid sx={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', }}>
            <h1 className='times-roman' style={{letterSpacing: '4px', fontWeight: '100', fontSize: '80px'}}>VIRSAPUR</h1>
          </Grid>
    </Grid>
  )
}

export default Hero
