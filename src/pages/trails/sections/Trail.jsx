import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { useMediaQuery, Button } from '@mui/material';
import { trailsData } from '../../../data';
import { Link } from 'react-router';

const AboutUs = () => {
  const isSmallScreen = useMediaQuery('(max-width: 470px)');

  return (
    <Grid container sx={{ minHeight: '100vh', padding: '150px 20px 150px 20px', display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', alignItems: 'center' }} spacing={6} >
      <Grid container sx={{ marginTop: '0px', justifyContent: 'center', paddingTop: '70px' }}>
            <Grid>
                {trailsData.map((trail, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <Grid container sx={{ maxWidth: '1200px', gap: '0', flexDirection: isEven ? 'row' : 'row-reverse', flexWrap: 'wrap-reverse' }} key={index}>
                            <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', ...(isSmallScreen && { paddingTop: '0px' }) }}>
                                <h3 style={{ marginBottom: isSmallScreen ? '25px' : '0px', fontSize: '25px', fontFamily: "Times New Roman"}}>{trail.name}</h3>
                                <p style={{ fontSize: '20px', ...(isSmallScreen && { marginTop: '0px' }) }}>{trail.shortDescription}</p>
                                <Button variant="contained" component={Link} to={trail.path} sx={{width: 'fit-content', borderRadius: '25px', backgroundColor: 'black'}}>view trail</Button>
                            </Grid>

                            <Grid item size={{ xs: 12, md: 6 }}>
                                <img
                                    src={trail.image}
                                    alt={trail.name}
                                    style={{ width: '100%', boxSizing: 'border-box', height: '100%', padding: isSmallScreen ? '20px' : '0px' }}
                                />
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    </Grid>
  )
}

export default AboutUs
