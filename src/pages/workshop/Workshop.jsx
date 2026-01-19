import React from 'react'
import Navbar from '../../Components/Navbar'
import { Grid } from '@mui/material'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from 'react-router';
import { workshopData as workshopsData } from '../../data';
import LoginOrBook from './section/LoginOrBook';
import ShowcasingWorkshopsImpacts from './section/ShowcasingWorkshopsImpacts.jsx';

const Workshop = () => {
    const { workshopPath } = useParams();
    const workshopData = workshopsData.find(workshop => workshop.path === `/workshop/${workshopPath}`)

    return (
        <>
            <Navbar />
            <Grid container sx={{ paddingTop: '140px', justifyContent: 'center', alignItems: 'center' }} >
                <Grid container sx={{ maxWidth: '1200px', width: '100%', }}>
                    <Grid container size={{ xs: 12, sm: 12, md: 6 }} sx={{alignItems: 'center'}}>
                        <Grid sx={{ padding: '20px', }}>
                            <ImageGallery items={workshopData.galleryImages} lazyLoad={true} showPlayButton={false} />
                        </Grid>
                    </Grid>
                    <Grid container size={{ xs: 12, sm: 12, md: 6 }} sx={{flexDirection: 'column', justifyContent: 'start', padding: '0px 20px'}}> 
                        <h1 style={{marginBottom: '0px'}}>{workshopData.title}</h1>
                        <p>{workshopData.detailedDescription}</p>
                        <h3 style={{margin: '0px'}}>Learning Objectives: </h3>
                        <ul style={{margin: '0px'}}>
                            {workshopData.learningObjectives.map((value, index) => <li key={index}>{value}</li>)}
                        </ul>
                        <h3 style={{margin: '0px', marginTop: '16px'}}>Acitivities Included: </h3>
                        <ul style={{margin: '0px'}}>
                            {workshopData.learningObjectives.map((value, index) => <li key={index}>{value}</li>)}
                        </ul>
                        <h3 style={{margin: '0px', marginTop: '16px'}}>Upcoming Dates: </h3>
                        <ul style={{margin: '0px'}}>
                            {workshopData.upcomingDates.map((value, index) => <li key={index}>{value}</li>)}
                        </ul>
                    </Grid>

                    <Grid container size={12} sx={{ justifyContent: 'center', marginBottom: '100px'}}>
                        <Grid sx={{width: '100%'}}>
                            <LoginOrBook />
                        </Grid>
                    </Grid>

                    <Grid container size={12} sx={{ justifyContent: 'center', marginBottom: '100px'}}>
                        <Grid sx={{width: '100%'}}>
                            <ShowcasingWorkshopsImpacts workshopData={workshopData} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Workshop
