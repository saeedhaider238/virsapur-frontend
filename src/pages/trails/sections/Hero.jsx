import React from 'react'
import Grid from '@mui/material/Grid';
import LandingSectionBackground from '../../../assets/backgrounds/landingSectionBackground.mp4'
import { useMediaQuery } from '@mui/material';
import landingSectionBackgroundPoster from '../../../assets/backgrounds/landingSectionBackgroundPoster.jpg'

const Hero = ({scrollY}) => {
  const isMobileScreen = useMediaQuery('(max-width: 470px)')
  
  return (
      <Grid sx={{ backgroundImage: `url(${landingSectionBackgroundPoster})` }} >
        <Grid container sx={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
          <Grid item sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', position: 'absolute', zIndex: '-1', width: '100%', height: '100%' }}>
            <video src={LandingSectionBackground} autoPlay loop muted style={{ width: '100%', minWidth: '1400px', objectFit: 'cover' }} poster={landingSectionBackgroundPoster} ></video>
          </Grid>
          <Grid sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', color: 'white', padding: !isMobileScreen ? '20px 40px' : '20px 20px', flexDirection: 'column' }}>
            <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isMobileScreen ? '80px' : '55px', marginBottom: '0px' }}>TRAILS</h1>
            <p style={{ letterSpacing: '0px', fontWeight: '500', fontSize: !isMobileScreen ? '30px' : '25px', marginTop: '0px', fontFamily: 'Montserrat', }}>Walk Through History. Experience Culture.</p>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Hero
