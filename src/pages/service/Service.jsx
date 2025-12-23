import React from 'react'
import { useParams } from 'react-router';
import { servicesData } from '../../data';
import Navbar from '../../Components/Navbar';
import Grid from '@mui/material/Grid';

const Service = () => {
    const { servicePath } = useParams();
    const serviceData = servicesData.find(service => service.path === `/service/${servicePath}`)
    
  return (
    <>
      <Navbar/>
      <Grid container sx={{paddingTop: '120px', justifyContent: 'center'}}>
        <Grid container sx={{ justifyContent: 'center', maxWidth: '1200px', width: '100%'}}>
          <Grid item sx={{width: '100%',}}>
            <img src={serviceData.image} style={{width: '100%'}} alt="" />
            <h1>{serviceData.title}</h1>
            <p>{serviceData.description}</p>
        </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Service
