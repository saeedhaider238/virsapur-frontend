import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import OurMissionAndVisionImage from '../../../assets/why-virsapur/OurMissionAndVisionImage.jpg'

const MissionAndVision = () => {
    const isSmallScreen = useMediaQuery('(max-width: 470px)');
    const isMobileScreen = useMediaQuery('(max-width: 470px)');

    return (
        <>
            <Grid container sx={{ backgroundColor: '#ecf0f1', justifyContent: 'center', marginTop: '100px' }}>
                <Grid sx={{ maxWidth: '1200px' }} size={12}>
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Grid sx={{ width: '100%' }}>
                            <h1 style={{ letterSpacing: '4px', margin: '90px 0px', fontSize: !isMobileScreen ? '60px' : '35px', fontWeight: '100', textAlign: 'left', padding: '0px 20px' }}>OUR MISSION AND VISION</h1>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid container sx={{ maxWidth: '1200px' }} size={12} spacing={3}>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ padding: '0px 20px' }}>
                        <p style={{ fontSize: !isSmallScreen ? '21px' : '15px' }}>
                            <b>Our Mission  </b>To bridge the gap between historical scholarship and public curiosity through immersive heritage walks and digital storytelling. Virsapur is dedicated to documenting under-explored sites, archiving oral histories, and empowering local communities to reclaim their narratives. By transforming "decaying objects" into "dynamic lessons," we strive to inspire a new generation of heritage guardians.
                        </p>
                        
                        <p style={{ fontSize: !isSmallScreen ? '21px' : '15px' }}>
                            <b>Virsapur (Pvt.) Ltd.</b> promotes and preserves <b>Pakistan’s cultural heritage</b> through storytelling,
                            education, and immersive experiences, fostering <b>pride and global</b> appreciation Conducting
                            Research, and working towards preservation and restoration of heritage sites.
                        </p>
                    </Grid>

                    <Grid container size={{ xs: 12, sm: 12, md: 6 }} sx={{ justifyContent: 'center', padding: '0px 20px', overflow: 'hidden' }}>
                        <img src={OurMissionAndVisionImage} style={{ width: '100%' }} alt="" />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default MissionAndVision
