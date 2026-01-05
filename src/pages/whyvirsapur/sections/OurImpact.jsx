import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
// import OurMissionAndVisionImage from '../../../assets/why-virsapur/OurMissionAndVisionImage.jpg'
import OurImpactImage from '../../../assets/why-virsapur/OurImpact.jpg'

const OurImpact = () => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');

    return (
        <>
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
                            <li style={{fontSize: !isMobileScreen ? '30px' : '18px', fontWeight: 500, fontFamily: 'Montserrat',}}>1000+ people engaged</li>
                            <li style={{fontSize: !isMobileScreen ? '30px' : '18px', fontWeight: 500, fontFamily: 'Montserrat',}}>50+ workshops delivered</li>
                            <li style={{fontSize: !isMobileScreen ? '30px' : '18px', fontWeight: 500, fontFamily: 'Montserrat',}}>20 key sites documented</li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default OurImpact
