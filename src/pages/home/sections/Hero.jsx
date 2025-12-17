import React, { useEffect, useState, useRef } from 'react'
import Grid from '@mui/material/Grid';
import LandingSectionBackground from '../../../assets/backgrounds/LandingSectionBackground.mp4'
import { useMediaQuery } from '@mui/material';
import landingSectionBackgroundPoster from '../../../assets/backgrounds/landingSectionBackgroundPoster.jpg'
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from 'framer-motion/client';

const Hero = () => {
  const isMobileScreen = useMediaQuery('(max-width: 470px)')
  const scrollValue = useRef(0);
  const heroRef = useRef(null)
  const { scrollY } = useScroll(); 
  const [vh, setVh] = useState(window.innerHeight);
  const y1 = useTransform(scrollY, [0, vh], [0, -1 * vh]); 
  return (
    <motion.div style={{ y: y1}}>
      <Grid sx={{ position: 'absolute', zIndex: 1, right: 0, width: '100%' }} ref={heroRef}>
        <Grid container sx={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
          <Grid item sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', position: 'absolute', zIndex: '-1', width: '100%', height: '100%' }}>
            <video src={LandingSectionBackground} autoPlay loop muted style={{ width: '100%', minWidth: '1400px', objectFit: 'cover' }} poster={landingSectionBackgroundPoster} ></video>
          </Grid>
          <Grid sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', }}>
            <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isMobileScreen ? '80px' : '55px' }}>VIRSAPUR</h1>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Hero
