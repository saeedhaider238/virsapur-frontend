import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Grid from '@mui/material/Grid';
import historicalPlace from '../../../assets/monuments/historicalPlace.png'
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
// import { motion, useTransform } from "framer-motion";
import { useTransform, motion } from "framer-motion";

const AboutUs = ({scrollY}) => {
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const isMobileScreen = useMediaQuery('(max-width: 470px)');
  const [vh, setVh] = useState(window.innerHeight);

  const sectionRef = useRef(null);
      const [sectionHeight, setSectionHeight] = useState(0);
  
  useLayoutEffect(() => {
    if (sectionRef.current) {
      // console.log(sectionRef.current.offsetHeight)
      setSectionHeight(sectionRef.current.offsetHeight);
    }
  }, []);
  
  const y = useTransform(scrollY, [2*vh, 4*vh], [0, isMobileScreen ? -1.2*sectionHeight : isSmallScreen ? -2.6*sectionHeight : -1.2*sectionHeight]); 

  return (
    <motion.div style={{ y, zIndex: 25, position: 'fixed', top: 0, left: 0, width: '100%' }} ref={sectionRef}>
    <Grid container sx={{justifyContent: 'center', width: '100%', backgroundColor: 'white', }}>
      <Grid container sx={{ minHeight: '100vh', padding: '150px 20px 0px 20px', display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', alignItems: 'center' }} spacing={6} >
      <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isSmallScreen ? '80px' : '45px', margin: '10px' }}>ABOUT US</h1>
        <p style={{ fontSize: !isSmallScreen ? '25px' : '15px' }}><b>Virsapur</b> is a cultural enterprise dedicated to making Pakistan’s history, heritage, and diverse cultural identity accessible to all. Through research-driven programs, heritage tours, workshops, and digital storytelling, Virsapur reconnects communities with their cultural roots and creates meaningful learning experiences for people of all ages. We work at the intersection of heritage preservation, education, and cultural engagement, ensuring that Pakistan’s past becomes a source of pride, knowledge, and empowerment for the future.</p>
      </Grid>
      <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={historicalPlace}
            alt=""
            sx={{
              width: '100%',
              height: 'auto',
              transition: 'transform 0.6s ease',
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
    </Grid>
    </motion.div>
  )
}

export default AboutUs
