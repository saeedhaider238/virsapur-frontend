import React from 'react';
import { Grid, useMediaQuery, Typography, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router';
import WorkshopImpact1 from '../../../assets/Workshop-Impacts/workshop-impact-1.jpg';

const ShowcasingWorkshopsImpacts = ({ workshopData }) => {
  const isMobileScreen = useMediaQuery('(max-width: 470px)');
  const navigate = useNavigate();

  /* ===== EXISTING CATEGORIES (UNCHANGED) ===== */
  const categories = [
    {
      image: WorkshopImpact1,
      title: 'Trails',
      price: '$20',
      participants: '40',
    },
    {
      image: WorkshopImpact1,
      title: 'Workshops',
      price: '$50',
      participants: '40',
    },
    {
      image: WorkshopImpact1,
      title: 'Special Experiences',
      price: '$80',
      participants: '50',
    },
  ];

  /* ===== NEW BOOKING DETAIL DATA ===== */
  const bookingDetails = [
    {
      id: 1,
      title: 'Trails Experience',
      image: WorkshopImpact1,
      price: '$20',
      participants: 40,
      dates: ['12 Aug 2025', '18 Aug 2025'],
      path: '/checkout/trails',
    },
    {
      id: 2,
      title: 'Workshop Session',
      image: WorkshopImpact1,
      price: '$50',
      participants: 30,
      dates: ['15 Aug 2025', '22 Aug 2025'],
      path: '/checkout/workshop',
    },
    {
      id: 3,
      title: 'Special Experience',
      image: WorkshopImpact1,
      price: '$80',
      participants: 20,
      dates: ['20 Aug 2025'],
      path: '/checkout/special',
    },
  ];

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      {/* ================= EXISTING SECTION ================= */}
      <Grid
        container
        sx={{
          padding: '0px 20px',
          mt: '100px',
          fontSize: '40px',
          marginBottom: '100px',
          maxWidth: '1200px',
        }}
      >
        <Grid
          container
          size={12}
          sx={{ justifyContent: 'center', marginBottom: '50px', textAlign: 'center' }}
        >
          <h1
            style={{
              color: 'white',
              backgroundColor: 'black',
              boxSizing: 'border-box',
              padding: '20px 40px',
              fontSize: !isMobileScreen ? '70px' : '45px',
              borderRadius: '60px',
            }}
          >
            Bookings
          </h1>
        </Grid>

        <Grid size={12} container spacing={4}>
          {categories.map((value, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Grid>
                <img
                  src={value.image}
                  alt=""
                  style={{ width: '100%', borderTopRightRadius: '80px' }}
                />
              </Grid>
              <Grid
                container
                sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
              >
                <p style={{ fontSize: '23px', margin: '0px' }}>{value.title}</p>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* ================= NEW BOOKING DETAILS SECTION ================= */}
      <Grid container justifyContent="center" sx={{ maxWidth: '1200px', px: 0,py:5 }}>
        {bookingDetails.map((item, index) => {
          const isImageLeft = index % 2 !== 0;

          return (
            <Grid
              container
              key={item.id}
              spacing={0}
              alignItems="center"
              sx={{ mb: 0 ,py:0 }}
            >
              {/* Image */}
              <Grid
                item
                size={{ xs: 12, sm: 4, md: 6 }}
                order={{ xs: 1, md: isImageLeft ? 1 : 2 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                
                  }}
                />
              </Grid>

              {/* Content */}
              <Grid
                item
                size={{ xs: 12, sm: 8, md: 6 }}
                order={{ xs: 2, md: isImageLeft ? 2 : 1 }}
                sx={{ display: 'flex', flexDirection:"column", alignItems: 'start' ,px:4 ,py:2 }}
              >
                <Grid sx={{ maxWidth: '420px' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ mb: 1 }}>
                    <strong>Title:</strong> {item.title}
                  </Typography>

                  <Typography sx={{ mb: 1 }}>
                    <strong>Price:</strong> {item.price}
                  </Typography>

                  <Typography sx={{ mb: 1 }}>
                    <strong>Participants:</strong> {item.participants}
                  </Typography>

                  <Typography sx={{ mt: 2, mb: 1 }}>
                    <strong>Select Date:</strong>
                  </Typography>

                  <RadioGroup defaultValue={item.dates[0]}>
                    {item.dates.map((date, i) => (
                      <FormControlLabel
                        key={i}
                        value={date}
                        control={<Radio />}
                        label={date}
                      />
                    ))}
                  </RadioGroup>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      borderRadius: '30px',
                      backgroundColor: 'black',
                    }}
                    onClick={() => navigate(item.path)}
                  >
                    Add to cart/Booking
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ShowcasingWorkshopsImpacts;

