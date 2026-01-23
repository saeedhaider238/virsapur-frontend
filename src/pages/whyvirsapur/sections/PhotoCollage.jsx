import React from 'react'
import { Grid, useMediaQuery } from '@mui/material';
import SnowFlake from '../../../Components/SnowFlake';
import GalleryImage1 from '../../../assets/why-virsapur/galleryImage1.jpg'

const PhotoCollage = ({color='black'}) => {
  const isSmallScreen = useMediaQuery('(max-width: 470px)');
  const isMediumScreen = useMediaQuery('(max-width: 900px)');

  return (
    <>
      <style>
        {`
          @keyframes starAnimation {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-95%);
            }
            100% {
              transform: translateY(0px); 
            }
          }
        `}
      </style>

      <Grid container sx={{justifyContent: 'center', overflow: 'hidden', paddingTop: '100px', marginBottom: '100px',}}>
        <Grid container sx={{maxWidth: '1200px', width: '100%', justifyContent: isMediumScreen ? 'center' : 'start', padding: '0px 20px', display: 'flex', alignItems: 'center'}}>
          {!isMediumScreen && <Grid sx={{margin: '0px 0px', overflow: 'hidden', height: '550px', backgroundColor: '#9697a9', }}>
            <Grid sx={{padding: '0px 10px', animation: 'starAnimation 100s ease-in-out infinite'}} className='slider'>
              {Array.from({ length: 100 }).map((_, i) => (
                <SnowFlake
                  key={i}
                  color={i % 2 === 0 ? 'black' : 'white'}
                />
              ))}
            </Grid>
          </Grid>}
          <Grid container size={11} spacing={2} >
            <Grid container size={{xs: 12, sm: 12, md: 4}} sx={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}} spacing={0}>
              <h1 style={{ letterSpacing: '0px', fontWeight: '900', fontSize: !isSmallScreen ? '55px' : '35px', margin: '0px', width: '100%', padding: '0px 20px' }}>PHOTO </h1>
              <h1 style={{ letterSpacing: '0px', fontWeight: '900', fontSize: !isSmallScreen ? '55px' : '35px', margin: '0px', width: '100%', padding: '0px 20px' }}>COLLAGE</h1>
            </Grid>
            <Grid container size={{xs: 12, sm: 12, md: 8}} spacing={2}>
              <Grid size={{xs: 12, sm: 12, md: 4}}> <img src={GalleryImage1} style={{width: '100%'}} alt="" /> </Grid>
              <Grid size={{xs: 12, sm: 12, md: 4}}> <img src={GalleryImage1} style={{width: '100%'}} alt="" /> </Grid>
              <Grid size={{xs: 12, sm: 12, md: 4}}> <img src={GalleryImage1} style={{width: '100%'}} alt="" /> </Grid>
              <Grid size={{xs: 12, sm: 12, md: 4}}> <img src={GalleryImage1} style={{width: '100%'}} alt="" /> </Grid>
              <Grid size={{xs: 12, sm: 12, md: 4}}> <img src={GalleryImage1} style={{width: '100%'}} alt="" /> </Grid>
              <Grid size={{xs: 12, sm: 12, md: 4}}> <img src={GalleryImage1} style={{width: '100%'}} alt="" /> </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <SnowFlake /> */}
    </>
  )
}

export default PhotoCollage
