import React from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { workshopData, blogCategories } from '../../../data';

const ShowcasingWorkshopsImpacts = () => {
  const isMobileScreen = useMediaQuery('(max-width: 470px)');
  const Workshop = workshopData[0];
  const Blogdata = blogCategories;

  return (
    <Grid container sx={{justifyContent: 'center', backgroundColor:"#fff7f5"}}>
      <Grid container sx={{ padding: '40px 20px', mt: '0px', maxWidth: '1200px'}}>
      
      {/* Section Header */}
      <Grid
        container
        xs={12}
        sx={{
          marginBottom: '50px',
          flexDirection: 'column',
          textAlign: 'start', //  all text start from start
        }}
      >
        <Typography variant="h2" sx={{ margin: 0, fontWeight: 100 }}>
          BLOG
        </Typography>
        <Typography variant="h2" sx={{ margin: 0, fontWeight: 100 }}>
          CATEGORIES
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          To make things easier, we've gathered your favourites here
        </Typography>
      </Grid>

      {/* Blog Grid */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 10, mb:50 }}>
        {Blogdata.map((item, index) => (
          <Grid
            item
            key={index}
            size={{xs: 12, sm: 4, md: 2.4}}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                borderTopRightRadius: '20px',
              }}
            />
            <Typography variant="subtitle1" sx={{ textAlign: 'center', mt: 1 }}>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
    </Grid>
  );
};

export default ShowcasingWorkshopsImpacts;

