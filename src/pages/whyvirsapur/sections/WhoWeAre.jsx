import React from 'react'
import { Grid, Card, CardContent, CardMedia, Typography, Box, useMediaQuery } from '@mui/material'
import WhoWeAreImage1 from '../../../assets/why-virsapur/WhoWeAreImage1.jpg'
import WhoWeAreImage2 from '../../../assets/why-virsapur/WhoWeAreImage2.jpg'

const WhoWeAre = () => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');

    return (
        <Grid container sx={{ justifyContent: 'center' }}>
            <Grid container size={12} sx={{justifyContent: 'center'}}><h1 style={{letterSpacing: '4px', margin: '90px 0px', fontSize: !isMobileScreen ? '60px' : '35px', fontWeight: '100', textAlign: 'center'}}>WHO WE ARE</h1></Grid>
            <Grid container sx={{ padding: '0px 20px 70px 20px', display: 'flex', justifyContent: 'center', maxWidth: '1200px', alignItems: 'center' }} spacing={6} >
                <Grid container sx={{justifyContent: 'center',}} spacing={{xs: 2, sm: 2, md: 6}}>
                    <Grid container size={{xs: 12, sm: 6}} sx={{justifyContent: 'center'}}>
                        <Card
                        sx={{
                            maxWidth: 320,
                            borderRadius: "24px",
                            backgroundColor: "#2D7FB8",
                            color: "#fff",
                            overflow: "hidden",
                            padding: 3,
                            minHeight: '400px'
                        }}
                    >
                        {/* Image */}
                        <Box
                            sx={{
                                // borderRadius: "16px",
                                overflow: "hidden",
                                mb: 2,
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={WhoWeAreImage1}
                                alt="Cultural Celebration"
                            />
                        </Box>

                        <Box
                            sx={{
                                width: "100%",
                                height: "2px",
                                backgroundColor: "#000",
                                mb: 1.5,
                            }}
                        />

                        <CardContent sx={{ padding: 0, }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                    color: 'black',
                                    fontFamily: '"Times New Roman", Times, serif'
                                }}
                            >
                                Origin Story
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    lineHeight: 1.6,
                                    color: "black",
                                    paddingTop: '10px'
                                }}
                            >
                                Our journey began with a vision to celebrate{" "}
                                <strong>cultural diversity.</strong>
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid container size={{xs: 12, sm: 6}} sx={{justifyContent: 'center'}}>
                        <Card
                        sx={{
                            maxWidth: 320,
                            borderRadius: "24px",
                            backgroundColor: "#9697a9",
                            color: "#fff",
                            overflow: "hidden",
                            padding: 3,
                            minHeight: '400px'
                        }}
                    >
                        {/* Image */}
                        <Box
                            sx={{
                                // borderRadius: "16px",
                                overflow: "hidden",
                                mb: 2,
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={WhoWeAreImage2}
                                alt="Cultural Celebration"
                            />
                        </Box>

                        <Box
                            sx={{
                                width: "100%",
                                height: "2px",
                                backgroundColor: "#000",
                                mb: 1.5,
                            }}
                        />

                        <CardContent sx={{ padding: 0, }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                    color: 'black',
                                    fontFamily: '"Times New Roman", Times, serif'
                                }}
                            >
                                Founding Purpose
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    lineHeight: 1.6,
                                    color: "black",
                                    paddingTop: '10px'
                                }}
                            >
                                We are dedicated to <strong>empowering communities</strong> through heritage preservation.
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WhoWeAre
