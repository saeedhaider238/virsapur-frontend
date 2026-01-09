import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar.jsx'
import Grid from '@mui/material/Grid';
import Hero from './sections/Hero.jsx'
import AboutUs from './sections/AboutUs.jsx';
import { useScroll } from 'framer-motion';
import Founders from './sections/Founders.jsx';
import Services from './sections/Services.jsx';
import ProjectsTitle from './sections/ProjectsTitle.jsx';
import Projects from './sections/Projects.jsx';
import PakistanMap from './sections/PakistanMap.jsx';
import Heritage from './sections/Heritages.jsx';
import Feedback from './sections/Feedback.jsx';
import Collaborators from './sections/Collaborators.jsx';
import GetInTouch from './sections/GetInTouch.jsx';
import GetInTouch2 from './sections/GetInTouch2.jsx';
import GetInTouch3 from './sections/GetInTouch3.jsx';

const Home = () => {
  const { scrollY } = useScroll(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
      <Navbar scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <Grid sx={{paddingTop: '50vh', display: 'flex', justifyContent: 'center', flexDirection: 'column',}}>
        <AboutUs scrollY={scrollY}/>
        <Founders scrollY={scrollY}/>
      </Grid>
        <Services scrollY={scrollY} />
        <ProjectsTitle scrollY={scrollY} />
        <Projects scrollY={scrollY}/>
        <PakistanMap scrollY={scrollY} />
        <Heritage scrollY={scrollY} />
        <Feedback scrollY={scrollY}/>
        <Collaborators scrollY={scrollY} /> 
        <GetInTouch />

      {/* <Grid sx={{height: '120vh'}}>
      </Grid> */}
    </>
  )
}

export default Home