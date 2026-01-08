import React from 'react'
import { Grid } from '@mui/material'
import StarSymbol from '../../../assets/courses/StarSymbol.jpg'
import {useMediaQuery} from '@mui/material'

const LearningHub = () => {
    const isSmallScreen = useMediaQuery('(max-width: 470px)');

    return (
      <Grid container sx={{height: '90vh', maxWidth: '1200px', width: '100%'}}>
          <Grid container sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}} spacing={2}>
              <img src={StarSymbol} style={{width: !isSmallScreen ? '150px' : '100px'}} alt="" />
              <h1 style={{ letterSpacing: '4px', fontWeight: '100', fontSize: !isSmallScreen ? '60px' : '35px', margin: '0px', textAlign: 'center' }}>Cultural Learning Hub</h1>
          </Grid>
      </Grid>
    )
}

export default LearningHub
