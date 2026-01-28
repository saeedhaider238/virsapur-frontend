import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { Grid, Typography, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { bookingDetails } from '../../data';


const Checkout = () => {
  const { bookingPath } = useParams();
  const navigate = useNavigate();

  // Find booking based on URL path
  const booking = bookingDetails.find(b => b.path === `/checkout/${bookingPath}`);

  if (!booking) return <Typography>Booking not found!</Typography>;

  const [selectedDate, setSelectedDate] = React.useState(booking.dates[0]);

  const handleCheckout = () => {
    alert(`Booking ${booking.title} on ${selectedDate} added to checkout!`);
    // Later, integrate backend or navigate to payment page
    // navigate('/payment');
  };

  return (
    <>
      

      <Grid container justifyContent="center" sx={{ mt: 8, px: 2 }}>
        <Grid
          container
          sx={{
            maxWidth: '1200px',
            width: '100%',
            gap: 4,
          }}
          alignItems="center"
        >
          {/* Image & Details */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: 1 }} // swap order on small screens if needed
          >
            <img
              src={booking.image}
              alt={booking.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
                display: 'block',
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            {/* Title */}
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {booking.title}
            </Typography>

            <Typography variant="body1">
              Price: <strong>{booking.title}</strong>
            </Typography>

            {/* Price & Participants */}
            <Typography variant="body1">
              Price: <strong>{booking.price}</strong>
            </Typography>
            <Typography variant="body1">
              Participants: <strong>{booking.participants}</strong>
            </Typography>

            {/* Date Selection */}
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Select Date:
            </Typography>
            <RadioGroup
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              {booking.dates.map((date, index) => (
                <FormControlLabel
                  key={index}
                  value={date}
                  control={<Radio />}
                  label={date}
                />
              ))}
            </RadioGroup>

            {/* Checkout Button */}
            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: 'black', borderRadius: '25px' }}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Checkout;