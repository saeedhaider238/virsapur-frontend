import React from 'react'
import Navbar from '../../Components/Navbar.jsx'
import Grid from '@mui/material/Grid';
import Hero from './sections/Hero.jsx'
import AboutUs from './sections/AboutUs.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Grid sx={{ backgroundColor: 'red', paddingTop: '50vh'}}>
        <Grid sx={{height: '100vh', backgroundColor: 'green', paddingTop: '30px'}}>
          hello world
        </Grid>
      </Grid> */}
      <Grid sx={{paddingTop: '50vh', display: 'flex', justifyContent: 'center'}}>
        <AboutUs/>
        {/* <Grid container sx={{height: '100vh', paddingTop: '70px'}}>
          <Grid item></Grid>
          <Grid item><img src={historicalPlace} alt="" /></Grid>
        </Grid> */}
      </Grid>
      <Grid sx={{height: '120vh', backgroundColor: 'yellow'}}>
        Hello World
      </Grid>
    </>
  )
}

export default Home