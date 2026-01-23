import React, { useState } from 'react'
import { Grid } from '@mui/material'
import StarSymbol from '../../../assets/courses/StarSymbol.jpg'
import { useMediaQuery } from '@mui/material'
import { useTransform, motion } from 'framer-motion'

const LearningHub = ({ scrollY }) => {
    const isSmallScreen = useMediaQuery('(max-width: 470px)');
    const [vh, setVh] = useState(window.innerHeight);
    const y = useTransform(scrollY, [vh/2, vh], [0, -1 * vh]);

    return (
        // <motion.div style={{ position: 'relative', width: '100%', zIndex: 9,height: '0vh', y}}>
        //     <Grid container sx={{  width: '100%', position: 'absolute', justifyContent: 'center', backgroundColor:'#fffdf1', height: '100vh', alignItems: 'center' }}>
        //         <Grid sx={{maxWidth: '1200px'}}>
        //             <Grid container sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column',}} spacing={2}>
        //             <img src={StarSymbol} style={{ width: !isSmallScreen ? '150px' : '100px' }} alt="" />
        //             <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isSmallScreen ? '60px' : '35px', margin: '0px', textAlign: 'center' }}>Cultural Learning Hub</h1>
        //         </Grid>
        //         </Grid>
        //     </Grid>
        // </motion.div>
        <Grid container sx={{  width: '100%', position: 'relative', justifyContent: 'center', backgroundColor:'#fffdf1', height: '100vh', alignItems: 'center' }}>
            <Grid sx={{maxWidth: '1200px'}}>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column',}} spacing={2}>
                <img src={StarSymbol} style={{ width: !isSmallScreen ? '150px' : '100px' }} alt="" />
                <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isSmallScreen ? '60px' : '35px', margin: '0px', textAlign: 'center' }}>Cultural Learning Hub</h1>
            </Grid>
            </Grid>
        </Grid>
    )
}

export default LearningHub
