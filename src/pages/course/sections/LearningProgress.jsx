import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import { GoDotFill } from "react-icons/go";

const LearningProgress = () => {
    const isMobileScreen = useMediaQuery('(max-width: 900px)');

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop: '60px' }} size={12}>
                <Grid container size={12} sx={{ justifyContent: 'center' }}><h1 style={{ letterSpacing: '4px', margin: '90px 0px', fontSize: !isMobileScreen ? '60px' : '35px', fontWeight: '100', textAlign: 'center' }}>Learning Process</h1></Grid>
            </Grid>

            <Grid container sx={{ justifyContent: 'center', paddingBottom: '70px' }}>
                <Grid container sx={{ maxWidth: '1200px', justifyContent: 'center', marginTop: !isMobileScreen ? '200px' : '20px', marginBottom: !isMobileScreen ? '200px' : '70px' }} size={12} spacing={5}>
                    <Grid container size={{ xs: 12, sm: 12, md: 2.3 }} sx={{ padding: '0px 0px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} spacing={0} ><GoDotFill style={{fontSize: '60px'}} /> <h1 style={{margin: '0px', fontSize: '25px'}}>Introduction</h1> <p style={{marginTop: '5px'}}>Initial Exposure</p></Grid>
                    <Grid container size={{ xs: 12, sm: 12, md: 2.3 }} sx={{ padding: '0px 0px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} spacing={0} ><GoDotFill style={{fontSize: '60px'}} /> <h1 style={{margin: '0px', fontSize: '25px'}}>Introduction</h1> <p style={{marginTop: '5px'}}>Initial Exposure</p></Grid>
                    <Grid container size={{ xs: 12, sm: 12, md: 2.3 }} sx={{ padding: '0px 0px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} spacing={0} ><GoDotFill style={{fontSize: '60px'}} /> <h1 style={{margin: '0px', fontSize: '25px'}}>Introduction</h1> <p style={{marginTop: '5px'}}>Initial Exposure</p></Grid>
                    <Grid container size={{ xs: 12, sm: 12, md: 2.3 }} sx={{ padding: '0px 0px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} spacing={0} ><GoDotFill style={{fontSize: '60px'}} /> <h1 style={{margin: '0px', fontSize: '25px'}}>Introduction</h1> <p style={{marginTop: '5px'}}>Initial Exposure</p></Grid>
                    <Grid container size={{ xs: 12, sm: 12, md: 2.3 }} sx={{ padding: '0px 0px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}} spacing={0} ><GoDotFill style={{fontSize: '60px'}} /> <h1 style={{margin: '0px', fontSize: '25px'}}>Introduction</h1> <p style={{marginTop: '5px'}}>Initial Exposure</p></Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default LearningProgress