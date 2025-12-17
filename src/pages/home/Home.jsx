import React from 'react'
import Navbar from '../../Components/Navbar.jsx'
import Grid from '@mui/material/Grid';
import Hero from './sections/Hero.jsx'
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Grid sx={{ backgroundColor: 'red', paddingTop: '50vh'}}>
        <Grid sx={{height: '100vh', backgroundColor: 'green'}}>
          hello world
        </Grid>
      </Grid>
      <Grid sx={{height: '120vh', backgroundColor: 'yellow'}}>
        Hello World
      </Grid>
    </>
  )
}

export default Home