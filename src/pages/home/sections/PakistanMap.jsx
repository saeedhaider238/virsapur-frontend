import React, {useState} from 'react'
import { Grid } from '@mui/material'
import { useTransform, motion, useInView } from 'framer-motion';

const PakistanMap = ({scrollY}) => {
  const [vh, setVh] = useState(window.innerHeight);
  const y = useTransform(scrollY, [13*vh, 15*vh], [0, -1 * vh]); 

  return (
    <motion.div style={{y, zIndex: 20, position: 'fixed', top: 0, left: 0, width: '100%'}}>
      <Grid sx={{position: 'absolute', paddingTop: '0vh', zIndex: 16, width: '100%'}}>
        <Grid container sx={{height: '100vh', justifyContent: 'center', alignItems: 'center', position:'absolute', zIndex: 16, backgroundColor: '#FAF9F6',  width: '100%', }}>
        <h1>Pakistan map's space</h1>
      </Grid>
      </Grid>
    </motion.div>
  )
}

export default PakistanMap
