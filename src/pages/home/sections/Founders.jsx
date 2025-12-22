import React from 'react'
import Grid from '@mui/material/Grid';
import authorSectionBackground from '../../../assets/backgrounds/founderSectionBackground.png'
import { foundersData } from '../../../data';
import { useMediaQuery } from '@mui/material';

const Founders = () => {
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  const isMobileScreen = useMediaQuery('(max-width: 470px)');

  return (
    <Grid container sx={{backgroundImage: `url(${authorSectionBackground})`, height: 'auto', backgroundSize: 'cover', backgroundPosition: 'center', justifyContent: 'center', alignItems: 'center', padding: '0px'}}>
      <Grid>
        <Grid container sx={{justifyContent: 'center'}}><h1 style={{letterSpacing: '4px', margin: '70px 0px', fontSize: !isMobileScreen ? '80px' : '45px', fontWeight: '100'}}>FOUNDERS</h1></Grid>
        {foundersData.map((founder, index) => {
        const isEven = index % 2 === 0;
        return (
          <Grid container sx={{maxWidth: '1200px', gap: '0', flexDirection: isEven ? 'row' : 'row-reverse', flexWrap: 'wrap-reverse'}} key={index}>
            <Grid item size={{xs: 12, md: 6}} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', fontFamily: "'TT Chocolates', sans-serif", ...(isSmallScreen && {paddingTop: '0px'})}}>
              <h3 style={{marginBottom: '0px', fontSize: '25px'}}>{founder.name}</h3>
              <h3 style={{marginTop: '0px', fontSize: '25px'}}>{founder.designation}</h3>
              <p style={{fontSize: '20px', ...(isSmallScreen && {marginTop: '0px'})}}>{founder.description}</p>
            </Grid>

            <Grid item size={{xs: 12, md: 6}}>
              <img 
                src={founder.image} 
                alt={founder.name} 
                style={{ width: '100%',boxSizing: 'border-box', height: '100%', padding: isSmallScreen ? '20px' : '0px'}} 
              />
            </Grid>
          </Grid>
        );
      })}
      </Grid>
    </Grid>
  )
}

export default Founders
