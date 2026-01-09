import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import { foundersData } from '../../../data';
import { useMediaQuery } from '@mui/material';
import { useTransform, motion } from "framer-motion";

const Founders = ({scrollY}) => {
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  const isMobileScreen = useMediaQuery('(max-width: 470px)');
  const [vh, setVh] = useState(window.innerHeight);
  const y = useTransform(scrollY, [vh, 2 * vh], [0, -2 * vh]);

  return (
    <>
    <motion.div style={{ y, backgroundColor: 'white', zIndex: 20 }}>
      <Grid container sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center', padding: `${isMobileScreen ? '120vh' : isSmallScreen ? '160vh' : '100vh'} 0px 0px 0px`, zIndex: 2, position: 'relative', backgroundColor: 'white'}}>
        <Grid sx={{position: 'absolute', backgroundColor: 'white', zIndex: 2,}}>
          <Grid container sx={{ justifyContent: 'center' }}><h1 style={{ letterSpacing: '4px', margin: '70px 0px', fontSize: !isMobileScreen ? '80px' : '45px', fontWeight: '100',  }}>FOUNDERS</h1></Grid>
          {foundersData.map((founder, index) => {
            const isEven = index % 2 === 0;
            return (
              <Grid container sx={{ backgroundColor: 'white', width: '99vw', justifyContent: 'center', zIndex: 2 }} key={index}>
                <Grid container sx={{maxWidth: '1200px', backgroundColor: 'white', gap: '0', flexDirection: isEven ? 'row' : 'row-reverse', flexWrap: 'wrap-reverse', zIndex: 2 }}>
                  <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', ...(isSmallScreen && { paddingTop: '0px' }), zIndex:2 }}>
                  <h3 style={{ marginBottom: '0px', fontSize: '25px' }}>{founder.name}</h3>
                  <h3 style={{ marginTop: '0px', fontSize: '25px' }}>{founder.designation}</h3>
                  <p style={{ fontSize: '20px', ...(isSmallScreen && { marginTop: '0px' }) }}>{founder.description}</p>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    style={{ width: '100%', boxSizing: 'border-box', height: '100%', padding: isSmallScreen ? '20px' : '0px' }}
                  />
                </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </motion.div>
    </>
  )
}

export default Founders
