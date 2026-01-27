import React, { useRef, useState } from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import Slider from 'react-slick';
import { collaboratorsData } from '../../../data';
import { useTransform, motion } from 'framer-motion';

const Collaborators = ({scrollY}) => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');
    const isVerySmallScreen = useMediaQuery('(max-width: 360px)')
    const screenWidth = window.innerWidth
    const slidesToShowOnScreen = useRef(screenWidth < 460 ? 1 : screenWidth < 600 ? 2 : screenWidth < 1024 ? 3 : 4)
    const [vh, setVh] = useState(window.innerHeight);
    const y = useTransform(scrollY, [19 * vh, 21 * vh], [0, -1 * vh]);

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

            <motion.div style={{y, position: 'relative', zIndex: 21, width: '100%',}}>
                <Grid sx={{position: 'relative', }}>
                    <Grid container sx={{ justifyContent: 'center',  width: '100%', backgroundColor: 'white', flexDirection: 'column'}}>
                <Grid container sx={{ justifyContent: 'center', overflow: 'hidden', }} size={12} ><h1 style={{
                    letterSpacing: !isMobileScreen ? '4px' : '0px', fontSize: !isMobileScreen ? '75px' : '40px', margin: '70px 0px', fontWeight: '100', textAlign: 'center', overflowWrap: 'break-word', wordBreak: 'break-word',
                    whiteSpace: 'normal',
                }}>COLLABORATORS</h1></Grid>

                <Grid sx={{ overflow: 'hidden'}} className='feedbackCarrouselContainer' size={12} >
                    <Slider key={`${isMobileScreen}`} {...settings}>
                        {[...collaboratorsData, ...collaboratorsData].map((feedback, index) => (
                            <div key={index} style={{ padding: "0px", position: 'relative', }} className='slide-card'>
                                <img src={feedback.image} alt={feedback.title} style={{ width: "100%",height:"300px", borderRadius: "10px" }} />
                            </div>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
                </Grid>
            </motion.div>
        </>
    )
}

export default Collaborators
