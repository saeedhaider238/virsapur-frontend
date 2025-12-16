import React from 'react'
import Navbar from '../../Components/Navbar.jsx'
import Grid from '@mui/material/Grid';
import Hero from './sections/Hero.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Grid sx={{height: '100vh'}}>
        Hello World
      </Grid>
    </>
  )
}

export default Home