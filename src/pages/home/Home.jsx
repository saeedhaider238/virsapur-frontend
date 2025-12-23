import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar.jsx'
import Grid from '@mui/material/Grid';
import Hero from './sections/Hero.jsx'
import AboutUs from './sections/AboutUs.jsx';
import { useScroll } from 'framer-motion';
import Founders from './sections/Founders.jsx';
import Services from './sections/Services.jsx';
import ProjectsTitle from './sections/projectsTitle.jsx';
import Projects from './sections/Projects.jsx';
import PakistanMap from './sections/PakistanMap.jsx';
import Heritage from './sections/Heritages.jsx';

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
      <ProjectsTitle />
      <Projects />
      <PakistanMap />
      <Heritage />

      <Grid sx={{height: '120vh'}}>
        {/* Hello World */}
      </Grid>
    </>
  )
}

export default Home