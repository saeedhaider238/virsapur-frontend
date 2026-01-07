import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import ProductsSectionBackground from '../../../assets/backgrounds/productsSectionBackground.mp4'
import productsSectionBackgroundPoster from '../../../assets/backgrounds/productsSectionBackgroundPoster.jpg'
import { useMediaQuery } from '@mui/material';
import { useTransform, motion } from 'framer-motion';

const ProjectsTitle = ({scrollY}) => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)')
    const [vh, setVh] = useState(window.innerHeight);
    const y = useTransform(scrollY, [2.5*vh, 3.5*vh], [0, -1 * vh]); 

  return (
    <motion.div style={{ y, backgroundColor: 'white' }}>
      <Grid container sx={{ marginTop: '100px', height: '100vh', position: 'absolute', right: 0, width: '100%', zIndex: '4' }}>
        <Grid item sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', position: 'absolute', zIndex: '-1', width: '100%', height: '100%' }}>
          <video src={ProductsSectionBackground} autoPlay loop muted style={{ width: '100%', minWidth: '1400px', objectFit: 'cover' }} poster={productsSectionBackgroundPoster} ></video>
        </Grid>
        <Grid sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', }}>
          <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isMobileScreen ? '80px' : '55px', textAlign: 'center' }}>OUR PROJECTS</h1>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default ProjectsTitle
