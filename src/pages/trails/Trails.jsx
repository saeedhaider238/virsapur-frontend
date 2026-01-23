import React from 'react'
import Navbar from '../../Components/Navbar'
import { Grid } from '@mui/material';
import { useScroll } from 'framer-motion';
import Hero from './sections/Hero'
import Trail from './sections/Trail'

const Trails = () => {
    const { scrollY } = useScroll(); 

    return (
        <>
            <Navbar scrollY={scrollY} />
            <Hero scrollY={scrollY} />
            <Grid sx={{ paddingTop: '0vh', display: 'flex', justifyContent: 'center' }}>
                <Trail />
            </Grid>
        </>
    )
}

export default Trails
