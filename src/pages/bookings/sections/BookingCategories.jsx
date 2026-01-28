import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import WorkshopImpact1 from '../../../assets/Workshop-Impacts/workshop-impact-1.jpg'

const ShowcasingWorkshopsImpacts = ({ workshopData }) => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');

    const categories = [
        {
            image: WorkshopImpact1,
            title: 'Trails',
        },
        {
            image: WorkshopImpact1,
            title: 'Workshops',
        },
        {
            image: WorkshopImpact1,
            title: 'Special Experiences',
        },
    ]

    return (
        <Grid container sx={{justifyContent: 'center'}}>
            <Grid container sx={{ padding: '0px 20px', mt: '100px', fontSize: '40px', marginBottom: '100px', maxWidth: '1200px'}}>
            <Grid container size={12} sx={{ justifyContent: 'center', marginBottom: '50px', textAlign: 'center', }}><h1 style={{color: 'white', backgroundColor: 'black', boxSizing: 'border-box', padding: '20px 40px', fontSize: !isMobileScreen ? '70px' : '45px', borderRadius: '60px'}}>Bookings</h1></Grid>

            <Grid size={12} container spacing={4}>
                {categories.map((value, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Grid>
                            <img src={value.image} alt="" style={{ width: '100%', borderTopRightRadius: '80px' }} />
                        </Grid>
                        <Grid container sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <p style={{ fontSize: '23px', margin: '0px' }}>{value.title}</p>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
        </Grid>
    )
}

export default ShowcasingWorkshopsImpacts
