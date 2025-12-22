import React from 'react'
import Grid from '@mui/material/Grid';
import servicesSectionBackground from '../../../assets/backgrounds/servicesSectionBackground.png'
import { useMediaQuery } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { servicesData } from '../../../data';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router'; 

const Services = () => {
    const isMobileScreen = useMediaQuery('(max-width: 470px)');

    const settings = {
    dots: true,           
    infinite: true,       
    speed: 500,           
    slidesToShow: 4,      
    slidesToScroll: 1,    
    autoplay: true,     
    autoplaySpeed: 2000,  
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
            `.slick-slide > div {
                background-color: #1979b8;
                overflow: hidden;
                border-radius: 20px;
                margin-right: 4px;
                height: 440px;
            }
            .slick-track {
                display: flex !important;
                gap: 20px !important;
            }
            `}</style>
        <Grid container sx={{ marginTop: '100px', paddingBottom: '70px', justifyContent: 'center', backgroundImage: `url(${servicesSectionBackground})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <Grid container sx={{ justifyContent: 'center' }} size={12} ><h1 style={{ letterSpacing: '4px', margin: '70px 0px', fontSize: !isMobileScreen ? '80px' : '45px', fontWeight: '100', textAlign: 'center'}}>OUR SERVICES</h1></Grid>
            <Grid sx={{ maxWidth: '1200px', overflow: 'hidden'}} >
                <Slider {...settings}>
                    {[...servicesData, ...servicesData].map((slide, index) => (
                        <div key={index} style={{ padding: "10px",}}>
                            <img src={slide.image} alt={slide.title} style={{ width: "100%", borderRadius: "10px" }} />
                            <h3 style={{textAlign: 'center', padding: '0px 10px', fontFamily: "'Telegraph Sans', sans-serif"}}>{slide.title}</h3>
                            <p style={{padding: '0px 10px', fontFamily: "sans-serif"}}>
                                {slide.description.split(' ').slice(0, 20).join(' ')}
                                {slide.description.split(' ').length > 20 ? '...' : ''}
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
