import React from 'react'
import { Grid } from '@mui/material'
import { useParams } from 'react-router';
import { heritageData as heritagesData } from '../../data';
import Navbar from '../../Components/Navbar';

const Heritage = () => {
    const { heritagePath } = useParams();
    const heritageData = heritagesData.find(heritage => heritage.path === `/heritage/${heritagePath}`)

    return (
        <>
            <Navbar />
            <Grid container sx={{ paddingTop: '0px', justifyContent: 'center' }}>
                <Grid container sx={{ justifyContent: 'center', maxWidth: '1200px', width: '100%' }}>
                    <Grid item sx={{ width: '100%', }}>
                        <img src={heritageData.image} style={{ width: '100%' }} alt="" />
                        <h1>{heritageData.name}</h1>
                        <p>{heritageData.description}</p>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Heritage
