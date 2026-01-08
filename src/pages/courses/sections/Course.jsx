import React from 'react'
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import { coursesData } from '../../../data';
import { Link } from 'react-router';

const Course = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

  return (
    <Grid container sx={{ marginTop: '100px', justifyContent: 'center', paddingTop: '70px' }}>
            <Grid sx={{paddingBottom: '100px'}}>
                {coursesData.map((course, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <Grid container sx={{ maxWidth: '1200px', gap: '0', flexDirection: isEven ? 'row' : 'row-reverse', flexWrap: 'wrap-reverse' }} key={index}>
                            <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', ...(isSmallScreen && { paddingTop: '0px' }) }}>
                                <h3 style={{ marginBottom: isSmallScreen ? '25px' : '0px', fontSize: '25px', fontFamily: "Times New Roman", ...(isSmallScreen && { marginTop: '0px' }) }}>{course.title}</h3>
                                <p style={{ fontSize: '20px', ...(isSmallScreen && { marginTop: '0px' }), marginBottom: '0px' }}>{course.summary}</p>
                                <p style={{ fontSize: '20px', marginTop: '8px', marginBottom: '0px' }}>{course.duration}</p>
                                <p style={{ fontSize: '20px', marginTop: '8px', marginBottom: '0px' }}>{course.level}</p>
                                <p style={{ fontSize: '20px', marginTop: '8px', }}>{course.price}</p>
                                <Link to={course.path} style={{width: 'fit-content', borderRadius: '25px', backgroundColor: 'black', padding: '10px 20px', color: 'white', textDecoration: 'none', fontSize: '18px'}}>View Course</Link>
                            </Grid>

                            <Grid item size={{ xs: 12, md: 6 }}>
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    style={{ width: '100%', boxSizing: 'border-box', height: '100%', padding: isSmallScreen ? '20px' : '0px' }}
                                />
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
  )
}

export default Course
