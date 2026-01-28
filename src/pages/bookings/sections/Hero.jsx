import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import HeroImage from '../../../assets/bookings/hero-image.jpg'

const Hero = () => {
  const isMobileScreen = useMediaQuery('(max-width: 470px)')

  return (
    <Grid container justifyContent='center'>
      <Grid container sx={{ paddingTop: '140px', maxWidth: '1200px' }}>
        <Grid container size={{ xs: 12, sm: 12, md: 6 }} sx={{ flexDirection: 'column', justifyContent: "center", padding: '20px' }}>
          <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isMobileScreen ? '80px' : '55px', marginBottom: '0px' }}>Workshops</h1>
          <p style={{ letterSpacing: '0px', fontWeight: '500', fontSize: !isMobileScreen ? '30px' : '25px', marginTop: '0px', fontFamily: 'Montserrat', }}>Experience Culture, Learn Traditions</p>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <img src={HeroImage} alt="" style={{ width: '100%', height: '100%', boxSizing: 'border-box', borderLeft: '8px solid black', objectFit: 'fill' }} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Hero
