import React, { useRef } from 'react'
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { servicesData } from '../../../data';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router'; 

const Services = () => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');
    const screenWidth = window.innerWidth
    const slidesToShowOnScreen = useRef(screenWidth < 460 ? 1 : screenWidth < 600 ? 2 : screenWidth < 1024 ? 3 : 4)
    
    const settings = {
    dots: true,           
    infinite: true,       
    speed: 500,           
    slidesToShow: slidesToShowOnScreen.current,      
    slidesToScroll: 1,    
    autoplay: true,     
    autoplaySpeed: 2000,  
    initialSlide: 0,
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
            `.servicesCarrouselContainer .slick-slide > div {
                background-color: #1979b8;
                overflow: hidden;
                border-radius: 20px;
                margin-right: 4px;
            }
            .servicesCarrouselContainer .slick-track {
                display: flex !important;
                gap: 20px !important;
            }
            `}</style>
        <Grid container sx={{ marginTop: '100px', paddingBottom: '70px', justifyContent: 'center',}}>
            <Grid container sx={{ justifyContent: 'center' }} size={12} ><h1 style={{ letterSpacing: '4px', margin: '70px 0px', fontSize: !isMobileScreen ? '80px' : '45px', fontWeight: '100', textAlign: 'center'}}>OUR SERVICES</h1></Grid>
            <Grid sx={{overflow: 'hidden'}} className='servicesCarrouselContainer' >
                <Slider key={`${isMobileScreen}`} {...settings}>
                    {[...servicesData, ...servicesData].map((slide, index) => (
                        <div key={index} style={{ padding: "10px",}}>
                            <img src={slide.image} alt={slide.title} style={{ width: "100%", borderRadius: "10px" }} />
                            <h3 style={{textAlign: 'center', padding: '0px 10px', height: '40px'}}>{slide.title}</h3>
                            <p style={{padding: '0px 10px'}}>
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
        </>
    )
}

export default Services
