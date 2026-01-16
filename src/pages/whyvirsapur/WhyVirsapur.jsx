import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import VirsapurCommunity from './sections/VirsapurCommunity';
import MissionAndVision from './sections/MissionAndVision';
import { useScroll } from 'framer-motion';
import { Grid } from '@mui/material';
import WhatMakesUsDifferent from './sections/WhatMakesUsDifferent';
import OurImpact from './sections/OurImpact';
import PhotoCollage from './sections/PhotoCollage';

const WhyVirsapur = () => {
    const { scrollY } = useScroll();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Navbar scrollY={scrollY} />
            <Hero scrollY={scrollY} />
            <Grid sx={{ paddingTop: '50vh', display: 'flex', justifyContent: 'center' }}>
                <VirsapurCommunity scrollY={scrollY} />
            </Grid>
            <WhoWeAre scrollY={scrollY} />
            <MissionAndVision scrollY={scrollY} />
            <WhatMakesUsDifferent scrollY={scrollY} />
            <OurImpact scrollY={scrollY} />
            <PhotoCollage />
        </>
    )
}

export default WhyVirsapur
