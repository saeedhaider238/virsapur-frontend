import React from 'react'
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import { projectsData } from '../../../data';

const Projects = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    return (
        <Grid container sx={{ marginTop: '100px', justifyContent: 'center', paddingTop: '65vh' }}>
            <Grid>
                {projectsData.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <Grid container sx={{ maxWidth: '1200px', gap: '0', flexDirection: isEven ? 'row' : 'row-reverse', flexWrap: 'wrap-reverse' }} key={index}>
                            <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', ...(isSmallScreen && { paddingTop: '0px' }) }}>
                                <h3 style={{ marginBottom: isSmallScreen ? '25px' : '0px', fontSize: '25px', fontFamily: "Times New Roman"}}>{project.name}</h3>
                                <p style={{ fontSize: '20px', ...(isSmallScreen && { marginTop: '0px' }) }}>{project.description}</p>
                            </Grid>

                            <Grid item size={{ xs: 12, md: 6 }}>
                                <img
                                    src={project.image}
                                    alt={project.name}
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

export default Projects
