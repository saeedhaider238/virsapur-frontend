import React from 'react';
import { useParams } from 'react-router';
import { Grid, Typography } from '@mui/material';
import { BlogContent } from '../../data';

const Blog = () => {
    const { blogPath } = useParams();
    const blog = BlogContent.find(
        item => item.path === `/blog/${blogPath}`
    );

    if (!blog) return null;

    return (
        <>
        <Grid
            container
            justifyContent="center"
        >
            <Grid sx={{ maxWidth: '1200px', width: '100%',
                        padding: '20px', }}>
                {/* Image Container */}
                <Grid
                    item
                    xs={12}
                    sx={{
                        height: '500px', // 👈 fixed height
                        width: '100%'
                    }}
                >
                    <img
                        src={blog.image}
                        alt={blog.title}
                        style={{
                            width: '100%',
                            height: '100%',        // 👈 stretch to container height
                            objectFit: 'cover',    // 👈 prevents distortion
                            borderRadius: '12px',
                            display: 'block',
                            objectPosition: 'center', // ✅ centers the crop
                        }}
                    />
                </Grid>

                {/* Title */}
                <Grid item xs={12} sx={{ mt: 3 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                        }}
                    >
                        {blog.title}
                    </Typography>
                </Grid>
                <Grid>
                    {blog.text}
                    <p style={{ fontSize: '20px',}}>Explore our featured blog posts <br />  <a style={{ textDecoration:"none", color:"black",fontWeight:"bold"}} href={blog?.location?.url}>{blog?.location?.title}</a>  and <a href="" style={{ fontSize: '20px', fontWeight:"bold",textDecoration:"none",color:"black"}}>cultural traditions</a> ,<br /> celebrating our rich history</p>
                    <p style={{ fontSize: '20px'}}>   <a href={blog?.location?.url} style={{  fontWeight:"bold",textDecoration:"none",color:"black"}}>Region/location tag</a></p>
                </Grid>
            </Grid>
        </Grid>
        </>
    );
};

export default Blog;
