import React, { useRef, useState } from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import Slider from 'react-slick';
import { feedbackData } from '../../../data';
import { useTransform, motion } from 'framer-motion';

const Feedback = ({ scrollY }) => {
  const isMobileScreen = useMediaQuery('(max-width: 470px)');
  const screenWidth = window.innerWidth
  const slidesToShowOnScreen = useRef(screenWidth < 460 ? 1 : screenWidth < 600 ? 2 : screenWidth < 1024 ? 3 : 4)
  const [vh, setVh] = useState(window.innerHeight);
  const y = useTransform(scrollY, [17 * vh, 19 * vh], [0, -1 * vh]);

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
            .slide-card .overlay{
              position: absolute;
              opacity: 0;
              transition: opacity 0.6s ease;
              background-color: rgba(0,0,0,0.6);
              color: white;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            .slide-card .overlay:hover{
              opacity: 1;
            }
        `}</style>

      <motion.div style={{ y, position: 'relative', zIndex: 22, backgroundColor: 'white', width: '100%' }}>
        <Grid container sx={{ marginTop: '0vh', justifyContent: 'center', zIndex: 0, width: '100%', backgroundColor: 'white', paddingBottom: '90px', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Grid container sx={{ justifyContent: 'center' }} size={12}><h1 style={{ letterSpacing: '4px', margin: '70px 0px', fontSize: !isMobileScreen ? '80px' : '45px', fontWeight: '100', textAlign: 'center' }}>FEEDBACK</h1></Grid>

          <Grid sx={{ overflow: 'hidden', }} size={12} className='feedbackCarrouselContainer' >
            <Slider key={`${isMobileScreen}`} {...settings}>
              {[...feedbackData, ...feedbackData].map((feedback, index) => (
                <div key={index} style={{ padding: "0px", position: 'relative', }} className='slide-card'>

                  <div className="overlay">
                    <h3>{feedback.name}</h3>
                    <p>{feedback.review}</p>
                  </div>

                  <img src={feedback.image} alt={feedback.title} style={{ width: "100%", borderRadius: "10px" }} />
                </div>
              ))}
            </Slider>
          </Grid>

        </Grid>
      </motion.div>
    </>
  )
}

export default Feedback
