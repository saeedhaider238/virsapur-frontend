import React, {useState} from 'react'
import { Grid } from '@mui/material'
import { useTransform, motion, useInView } from 'framer-motion';

const PakistanMap = ({scrollY}) => {
  const [vh, setVh] = useState(window.innerHeight);
  const y = useTransform(scrollY, [13*vh, 15*vh], [0, -1 * vh]); 

  return (
      <Grid sx={{position: 'relative', paddingTop: '0vh', owidth: '100%', zIndex: 24}}>
        <Grid container sx={{height: '100vh', justifyContent: 'center', alignItems: 'center', zIndex: 16, backgroundColor: '#FAF9F6',  width: '100%', }}>
        <h1>Pakistan map's space</h1>
      </Grid>
      </Grid>
  )
}

export default PakistanMap
