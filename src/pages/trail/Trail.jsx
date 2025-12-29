import React from 'react'
import Navbar from '../../Components/Navbar'
import { Grid, Button } from '@mui/material'
import { trailsData } from '../../data'
import { useParams } from 'react-router'
import Monument from '../../assets/trail/monument.png'

const Trial = () => {
  const { trailPath } = useParams();
  const trailData = trailsData.find(trail => trail.path === `/trail/${trailPath}`)
  console.log(trailData)

  return (
    <>
      <Navbar />
      <Grid container sx={{ paddingTop: '140px', justifyContent: 'center', alignItems: 'center'  }} >
        <Grid container sx={{maxWidth: '1200px', width: '100%', height: '80vh'}}>
          <Grid container size={{ xs: 12, sm: 12, md: 4 }} sx={{flexDirection: 'column', justifyContent: 'center', padding: '20px'}}>
            <h1>{trailData.name}</h1>
            <p>{trailData.shortDescription}</p>
          </Grid>
          <Grid container sx={{ backgroundColor: '#1979b8', padding: '20px',}} size={{ xs: 12, sm: 12, md: 8 }} spacing={2}>
            <Grid container size={{ xs: 12, sm: 6, md: 4 }} sx={{position: 'relative', backgroundImage: `url(${Monument})`, height: '358px', backgroundSize: 'cover',       
    backgroundPosition: 'center', borderRadius: '20px', overflow: 'hidden', alignItems: 'flex-end', padding: '20px', color: 'white', fontSize: '25px' }}>
              {trailData.pricing}
            </Grid>
            <Grid container size={{ xs: 12, sm: 6, md: 4 }} sx={{position: 'relative', backgroundImage: `url(${Monument})`, height: '358px', backgroundSize: 'cover',       
    backgroundPosition: 'center', borderRadius: '20px', overflow: 'hidden', alignItems: 'flex-end', padding: '20px', color: 'white', fontSize: '25px' }}>
              Partners With
            </Grid>
            <Grid container size={{ xs: 12, sm: 6, md: 4 }} sx={{position: 'relative', backgroundImage: `url(${Monument})`, height: '358px', backgroundSize: 'cover',     
    backgroundPosition: 'center', borderRadius: '20px', overflow: 'hidden', alignItems: 'flex-end', padding: '20px', color: 'white', fontSize: '25px' }}>
              Map view showing trail route
            </Grid>
            <Grid container xs={12} lg={12} sx={{height: 'object-fit', width: '100%', alignSelf: 'flex-end', justifyContent: 'flex-end'}}>
              <Button variant="contained" sx={{backgroundColor: 'white', color: 'black', borderRadius: '20px'}}>BOOK NOW</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Trial
