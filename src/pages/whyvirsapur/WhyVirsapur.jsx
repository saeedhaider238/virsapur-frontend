import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import VirsapurCommunity from './sections/VirsapurCommunity';
import MissionAndVision from './sections/MissionAndVision';
import { useScroll } from 'framer-motion';
import { Grid } from '@mui/material';

const WhyVirsapur = () => {
    const { scrollY } = useScroll();

    return (
        <>
            <Navbar scrollY={scrollY} />
            <Hero scrollY={scrollY} />
            <Grid sx={{ paddingTop: '50vh', display: 'flex', justifyContent: 'center' }}>
                <VirsapurCommunity />
            </Grid>
            <WhoWeAre />
            <MissionAndVision />
            
            <div style={{ height: '100vh', width: '100%' }}>
                
            </div>
        </>
    )
}

export default WhyVirsapur
