import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'

const ShowcasingWorkshopsImpacts = ({workshopData}) => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');

  return (
    <Grid container sx={{padding: '0px 20px'}}>
        <Grid container size={12} sx={{ justifyContent: 'center', marginBottom: '50px', textAlign: 'center'}}><h1>Showcasing workshops’ impact:</h1></Grid>

        <Grid size={12} container spacing={4}>
            {workshopData.impacts.map((value, index) => (
                <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
                    <Grid>
                        <img src={value.image} alt="" style={{width: '100%',borderTopRightRadius: '80px'}} />
                    </Grid>
                    <Grid container sx={{justifyContent: 'center', flexDirection: 'column'}}>
                        <p style={{fontSize: '23px', margin: '0px'}}>{value.title}</p>
                        <ul style={{margin: '5px'}}>
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
