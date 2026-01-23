import React, { useState, useRef, useLayoutEffect } from 'react'
import { Grid, useMediaQuery } from '@mui/material'
// import OurMissionAndVisionImage from '../../../assets/why-virsapur/OurMissionAndVisionImage.jpg'
import OurImpactImage from '../../../assets/why-virsapur/OurImpact.jpg'
import { useTransform, motion } from 'framer-motion'

const OurImpact = ({ scrollY }) => {
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

    const y = useTransform(scrollY, [2.3 * vh, 2.8 * vh], [0, -1.2 * sectionHeight]);

    return (
        <>
            {/* <motion.div style={{y, position: 'relative', zIndex: 15}}> */}
                <Grid sx={{ position: 'relative',paddingTop: '0vh',  }}>
                    <Grid sx={{position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'white'}} ref={sectionRef}>
                        <Grid sx={{ }}>
                        <Grid container sx={{ backgroundColor: '#ecf0f1', justifyContent: 'center', marginTop: '100px', }}>
                            <Grid sx={{ maxWidth: '1200px' }} size={12}>
                                <Grid container sx={{ justifyContent: 'center' }}>
                                    <Grid sx={{ width: '100%' }}>
                                        <h1 style={{ letterSpacing: '4px', margin: '90px 0px', fontSize: !isMobileScreen ? '60px' : '35px', fontWeight: '100', textAlign: 'center', padding: '0px 20px' }}>OUR IMPACT</h1>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container sx={{ justifyContent: 'center', paddingBottom: '10px' }}>
                            <Grid container sx={{ maxWidth: '1200px' }} size={12} spacing={3}>
                                <Grid container size={{ xs: 12, sm: 12, md: 6 }} sx={{ justifyContent: 'center', padding: '0px 20px', overflow: 'hidden' }}>
                                    <img src={OurImpactImage} style={{ width: '100%' }} alt="" />
                                </Grid>

                                <Grid container size={{ xs: 12, sm: 12, md: 6 }} sx={{ padding: '0px 20px', alignItems: 'center' }}>
                                    <ul>
                                        <li style={{ fontSize: !isMobileScreen ? '30px' : '18px', fontWeight: 500, fontFamily: 'Montserrat', }}>1000+ people engaged</li>
                                        <li style={{ fontSize: !isMobileScreen ? '30px' : '18px', fontWeight: 500, fontFamily: 'Montserrat', }}>50+ workshops delivered</li>
                                        <li style={{ fontSize: !isMobileScreen ? '30px' : '18px', fontWeight: 500, fontFamily: 'Montserrat', }}>20 key sites documented</li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            {/* </motion.div> */}
        </>
    )
}

export default OurImpact
