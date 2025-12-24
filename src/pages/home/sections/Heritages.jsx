import React, { useRef } from 'react'
import { Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import { heritageData } from '../../../data';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import Slider from "react-slick";

const Heritage = () => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');
    const screenWidth = window.innerWidth
    const slidesToShowOnScreen = useRef(screenWidth < 460 ? 1 : screenWidth < 800 ? 2 : 3)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShowOnScreen.current,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <style>{
            `.heritageCarrouselContainer .slick-slide > div {
                background-color: #1979b8;
                overflow: hidden;
                margin-right: 5px;
                // height: 450px;
            }
            .heritageCarrouselContainer .slick-track {
                display: flex !important;
                gap: 30px !important;
            }
            .slick-arrow:before{
                color: black !important;
            }
            `}</style>

            <Grid container sx={{ backgroundColor: '#fffdf7', marginTop: '100px', justifyContent: 'center', paddingBottom: '70px', }}>
                <Grid style={{ justifyContent: 'center', padding: '0px'}} size={12} ><h1 style={{ letterSpacing: '4px', fontSize: !isMobileScreen ? '80px' : '45px', fontWeight: '100', textAlign: 'center', marginTop: '70px' }}>Heritage of Our Land</h1></Grid>

                <Grid container sx={{width: '100%', overflow: 'hidden', justifyContent: 'center',}}>
                    <Grid className='heritageCarrouselContainer' sx={{width: '80%'}}>
                    <Slider key={`${isMobileScreen}`} {...settings}>
                        {[...heritageData, ...heritageData].map((slide, index) => (
                            <div key={index} style={{ padding: "10px", }}>
                                <div style={{ padding: '50px 50px 0px 50px' }}> 
                                    <img
                                        src={slide.image}
                                        alt={slide.name}
                                        style={{ width: "100%", display: 'block' }}
                                    />
                                </div>
                                <h3 style={{ textAlign: 'center', padding: '0px 10px' }}>{slide.name}</h3>
                                <p style={{ padding: '0px 10px' }}>
                                    {slide.description.slice(0, 100)}
                                    {slide.description.length > 100 ? '...' : ''}
                                </p>
                                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                    <Button
                                        size='small'
                                        variant="outlined"
                                        color="primary"
                                        component={RouterLink}
                                        to={slide.path || '#'}
                                        sx={{
                                            borderRadius: '0px', padding: '10px 20px', color: 'black',
                                            borderColor: 'black',
                                            marginBottom: '20px',
                                            '&:hover': {
                                                borderColor: 'black',
                                                backgroundColor: 'rgba(0,0,0,0.05)'
                                            },
                                        }}
                                    >
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default Heritage
