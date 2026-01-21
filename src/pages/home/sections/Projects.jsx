import React, {useState, useRef, useLayoutEffect} from 'react'
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import { projectsData } from '../../../data';
import { useTransform, motion } from 'framer-motion';

const Projects = ({scrollY}) => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const isMobileScreen = useMediaQuery('(max-width: 470px)');
    const [vh, setVh] = useState(window.innerHeight);
    
    const sectionRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState(0);

useLayoutEffect(() => {
  if (sectionRef.current) {
    // console.log(sectionRef.current.offsetHeight)
    setSectionHeight(sectionRef.current.offsetHeight);
  }
}, []);

    const y = useTransform(scrollY, [10*vh, 13*vh], [0, isMobileScreen ? -2.5*sectionHeight : isSmallScreen ? -3.6*sectionHeight : -2*sectionHeight]); 

    return (
        <motion.div style={{y, position: 'fixed', zIndex: 21, marginTop: '10vh', top: 0, left: 0, width: '100%'}}>
            <Grid container sx={{ marginTop: '100px', justifyContent: 'center', paddingTop: '0vh', minHeight: '100vh', }}>
                <Grid sx={{position: 'absolute', backgroundColor: 'white', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', }} ref={sectionRef}>
                    {projectsData.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <Grid container sx={{backgroundColor: 'white', width: '100%', justifyContent: 'center'}} key={index}>
                                <Grid container sx={{ maxWidth: '1200px', gap: '0', flexDirection: isEven ? 'row' : 'row-reverse', flexWrap: 'wrap-reverse', backgroundColor: 'white' }} >
                                <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', ...(isSmallScreen && { paddingTop: '0px' }) }}>
                                    <h3 style={{ marginBottom: isSmallScreen ? '25px' : '0px', fontSize: '25px', fontFamily: "Times New Roman" }}>{project.name}</h3>
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
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default Projects
