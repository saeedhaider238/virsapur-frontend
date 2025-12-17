import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import historicalPlace from '../../../assets/monuments/historicalPlace.png'
import { useMediaQuery } from '@mui/material';

const AboutUs = () => {
  const isSmallScreen = useMediaQuery('(max-width: 470px)');
  
  return (
    <Grid container sx={{ minHeight: '100vh', padding: '70px 20px 70px 20px', display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', alignItems: 'center' }} spacing={6} >
        <Grid item size={{xs: 12, sm: 12, md: 6,lg: 6, xl: 6}} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isSmallScreen ? '80px' : '45px', margin: '10px'}}>ABOUT US</h1>
            <p style={{fontSize: !isSmallScreen ? '25px' : '15px'}}><b>Virsapur</b> is a cultural enterprise dedicated to making Pakistan’s history, heritage, and diverse cultural identity accessible to all. Through research-driven programs, heritage tours, workshops, and digital storytelling, Virsapur reconnects communities with their cultural roots and creates meaningful learning experiences for people of all ages. We work at the intersection of heritage preservation, education, and cultural engagement, ensuring that Pakistan’s past becomes a source of pride, knowledge, and empowerment for the future.</p>
        </Grid>
        <Grid item size={{xs: 12, sm: 12, md: 6,lg: 6, xl: 6}} sx={{display: 'flex', justifyContent: 'center'}}><img src={historicalPlace} style={{width: '100%'}} alt="" /></Grid>
    </Grid> 
  )
}

export default AboutUs
