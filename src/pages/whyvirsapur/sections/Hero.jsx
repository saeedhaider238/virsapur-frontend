import React, { useEffect, useState, useRef } from 'react'
import Grid from '@mui/material/Grid';
import productsSectionBackground from '../../../assets/backgrounds/landingSectionBackground.mp4'
import { useMediaQuery } from '@mui/material';
import productsSectionBackgroundPoster from '../../../assets/backgrounds/landingSectionBackgroundPoster.jpg'
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = ({scrollY}) => {
  const isMobileScreen = useMediaQuery('(max-width: 470px)')
  const heroRef = useRef(null)
  const [vh, setVh] = useState(window.innerHeight);
  const y1 = useTransform(scrollY, [0, vh], [0, -1 * vh]); 
  
  return (
    <motion.div style={{ y: y1, position: 'relative', zIndex: 20}}>
      <Grid sx={{ position: 'absolute', zIndex: 8, right: 0, width: '100%', backgroundImage: `url(${productsSectionBackgroundPoster})` }} ref={heroRef}>
        <Grid container sx={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
          <Grid item sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', position: 'absolute', zIndex: '-1', width: '100%', height: '100%' }}>
            <video src={productsSectionBackground} autoPlay loop muted style={{ width: '100%', minWidth: '1400px', objectFit: 'cover' }} poster={productsSectionBackgroundPoster} ></video>
          </Grid>
          <Grid sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', color: 'white', padding: !isMobileScreen ? '20px 40px' : '20px 20px', flexDirection: 'column' }}>
            <h1 style={{ letterSpacing: '2px', fontWeight: '100', fontSize: !isMobileScreen ? '80px' : '55px', marginBottom: '0px' }}>Why Virsapur?</h1>
            <p style={{ letterSpacing: '0px', fontWeight: '500', fontSize: !isMobileScreen ? '30px' : '25px', marginTop: '0px', fontFamily: 'Montserrat', }}>Preserving Culture. Empowering Communities.</p>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Hero
