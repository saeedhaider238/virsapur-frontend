import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar';
import Hero from './sections/Hero'
import { useScroll } from 'framer-motion';
import { Grid } from '@mui/material';
import Workshop from './sections/Workshop';

const Workshops = () => {
  const { scrollY } = useScroll(); 

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 


  return (
    <>
      <Navbar scrollY={scrollY}/>
      <Hero scrollY={scrollY}/>
      <Grid sx={{ paddingTop: '50vh', display: 'flex', justifyContent: 'center' }}>
        <Workshop />
      </Grid>

      {/* <div style={{height: '200vh'}}>

      </div> */}
    </>
  )
}

export default Workshops
