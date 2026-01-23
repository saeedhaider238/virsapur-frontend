import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import VirsapurCommunityImage from '../../../assets/why-virsapur/VirsapurCommunityImage.jpg'
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTransform, motion } from 'framer-motion';

const VirsapurCommunity = ({scrollY}) => {
    const isSmallScreen = useMediaQuery('(max-width: 470px)');
    const [vh, setVh] = useState(window.innerHeight);
    const y = useTransform(scrollY, [vh/2, vh], [0, -1 * vh]); 
    
    return (
        // <motion.div style={{y, position: 'relative', zIndex: 19, width: '100%'}}>
            <Grid container sx={{ padding: '100px 20px 0px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap-reverse', position: 'relative', marginTop: '0vh'}} spacing={!isSmallScreen ? 6 : 0} >
                <Grid container sx={{width: '100%', justifyContent: 'center', position: 'relative', backgroundColor: 'white',  alignItems: 'center', padding: '0px 20px'}}>
                    <Grid container sx={{maxWidth: '1200px'}}>
                        <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            width: '100%',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={VirsapurCommunityImage}
                            alt=""
                            sx={{
                                width: '100%',
                                height: 'auto',
                                transition: 'transform 0.6s ease',
                                // '&:hover': {
                                //     transform: 'scale(1.2)',
                                // },
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '10px 10px 10px 20px' }} >
                    <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isSmallScreen ? '60px' : '35px', margin: '0px' }}>Virsapur </h1>
                    <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isSmallScreen ? '60px' : '35px', margin: '0px' }}>Community</h1>
                </Grid>
                    </Grid>
                </Grid>
            </Grid>
        // </motion.div>
    )
}

export default VirsapurCommunity
