import React, { useRef } from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import Slider from 'react-slick';
import { collaboratorsData } from '../../../data';

const Collaborators = () => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');
    const isVerySmallScreen = useMediaQuery('(max-width: 360px)')
    const screenWidth = window.innerWidth
    const slidesToShowOnScreen = useRef(screenWidth < 460 ? 1 : screenWidth < 600 ? 2 : screenWidth < 1024 ? 3 : 4)

    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: slidesToShowOnScreen.current,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 0,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
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
                `.feedbackCarrouselContainer .slick-slide > div {
                overflow: hidden;
                border-radius: 15px;
                border: 3px solid black;
            }
            .feedbackCarrouselContainer .slick-track {
                display: flex !important;
                gap: 1px !important;
            }
            .feedbackCarrouselContainer .slide-card{
              position: relative;
              display: block !important;
            }
        `}</style>

            <Grid container sx={{ marginTop: '100px', justifyContent: 'center', }}>
                <Grid container sx={{ justifyContent: 'center', overflow: 'hidden', }} size={12} ><h1 style={{
                    letterSpacing: !isMobileScreen ? '4px' : '0px', fontSize: !isMobileScreen ? '75px' : '40px', margin: '70px 0px', fontWeight: '100', textAlign: 'center', overflowWrap: 'break-word', wordBreak: 'break-word',
                    whiteSpace: 'normal',
                }}>COLLABORATORS</h1></Grid>

                <Grid sx={{ overflow: 'hidden'}} className='feedbackCarrouselContainer' >
                    <Slider key={`${isMobileScreen}`} {...settings}>
                        {[...collaboratorsData, ...collaboratorsData].map((feedback, index) => (
                            <div key={index} style={{ padding: "0px", position: 'relative', }} className='slide-card'>
                                <img src={feedback.image} alt={feedback.title} style={{ width: "100%", borderRadius: "10px" }} />
                            </div>
                        ))}
                    </Slider>
                </Grid>

            </Grid>
        </>
    )
}

export default Collaborators
