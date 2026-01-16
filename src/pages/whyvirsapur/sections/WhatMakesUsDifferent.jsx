import React, { useState, useRef, useLayoutEffect } from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import { GoDotFill } from "react-icons/go";
import { useTransform, motion } from 'framer-motion';

const WhatMakesUsDifferent = ({ scrollY }) => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');
    const sectionRef = useRef(null);
    const [vh, setVh] = useState(window.innerHeight);
    const [sectionHeight, setSectionHeight] = useState(0);

    useLayoutEffect(() => {
        if (sectionRef.current) {
            // console.log(sectionRef.current.offsetHeight)
            setSectionHeight(sectionRef.current.offsetHeight);
        }
    }, []);

    const y = useTransform(scrollY, [1.9 * vh, 2.4 * vh], [0, -1.2 * sectionHeight]);

    return (
        <>
            <motion.div style={{y, position: "relative", zIndex: 16}}>
                <Grid sx={{ paddingTop: '50vh', position: 'relative' }}>
                    <Grid sx={{position: 'absolute', width: '100%', backgroundColor: 'white', minHeight: '100vh'}} ref={sectionRef}>
                        <Grid container sx={{ justifyContent: 'center' }}>
                        <Grid container size={12} sx={{ justifyContent: 'center' }}><h1 style={{ letterSpacing: '4px', margin: '90px 0px', fontSize: !isMobileScreen ? '60px' : '35px', fontWeight: '100', textAlign: 'center' }}>WHAT MAKES US DIFFERENT</h1></Grid>
                    </Grid>

                    <Grid container sx={{ justifyContent: 'center', paddingBottom: '70px' }}>
                        <Grid container sx={{ maxWidth: '1200px', justifyContent: 'center', marginTop: !isMobileScreen ? '200px' : '20px', marginBottom: !isMobileScreen ? '200px' : '70px' }} size={12} spacing={3}>
                            <Grid container size={{ xs: 12, sm: 2, md: 2 }} sx={{ padding: '0px 20px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} spacing={0} ><GoDotFill style={{ fontSize: '60px' }} /> Youth-led cultural initiative</Grid>
                            <Grid container size={{ xs: 12, sm: 2, md: 2 }} sx={{ padding: '0px 20px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} spacing={0} ><GoDotFill style={{ fontSize: '60px' }} /> Research + fieldwork-driven</Grid>
                            <Grid container size={{ xs: 12, sm: 2, md: 2 }} sx={{ padding: '0px 20px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} spacing={0} ><GoDotFill style={{ fontSize: '60px' }} /> Community partnerships</Grid>
                            <Grid container size={{ xs: 12, sm: 2, md: 2 }} sx={{ padding: '0px 20px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} spacing={0} ><GoDotFill style={{ fontSize: '60px' }} />Cultural projects implemented</Grid>
                            <Grid container size={{ xs: 12, sm: 2, md: 2 }} sx={{ padding: '0px 20px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} spacing={0} ><GoDotFill style={{ fontSize: '60px' }} />Inclusivity and cultural pride</Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </motion.div>
        </>
    )
}

export default WhatMakesUsDifferent