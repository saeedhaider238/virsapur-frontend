import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import { workshopData } from '../../../data';

const ShowcasingWorkshopsImpacts = () => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');
    const Workshop = workshopData[0]

    return (
        <Grid container sx={{ padding: '0px 20px', mt: '100px' }}>
            <Grid container size={12} sx={{  marginBottom: '50px', fontSize: '30px', flexDirection: 'column' }}><h1 style={{margin: '0px',fontWeight: 100}}>BLOG</h1><h1 style={{margin: '0px',fontWeight: 100}}>CATEGORIES</h1></Grid>

            <Grid size={12} container spacing={4}>
                {Workshop.impacts.map((value, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Grid>
                            <img src={value.image} alt="" style={{ width: '100%', borderTopRightRadius: '80px' }} />
                        </Grid>
                        <Grid container sx={{ justifyContent: 'center', flexDirection: 'column' }}>
                            <p style={{ fontSize: '23px', margin: '0px' }}>{value.title}</p>
                            <ul style={{ margin: '5px' }}>
                                {value?.values.map((achievement, index) => (
                                    <li>{achievement}</li>
                                ))}
                            </ul>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default ShowcasingWorkshopsImpacts
