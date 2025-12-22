import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar.jsx'
import Grid from '@mui/material/Grid';
import Hero from './sections/Hero.jsx'
import AboutUs from './sections/AboutUs.jsx';
import { useScroll } from 'framer-motion';
import Founders from './sections/Founders.jsx';
import Services from './sections/Services.jsx';

const Home = () => {
  const { scrollY } = useScroll(); 

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []); 

  return (
    <>
      <Navbar scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <Grid sx={{paddingTop: '50vh', display: 'flex', justifyContent: 'center'}}>
        <AboutUs/>
      </Grid>
      <Founders/>
      <Services />

      <Grid sx={{height: '120vh'}}>
        {/* Hello World */}
      </Grid>
    </>
  )
}

export default Home