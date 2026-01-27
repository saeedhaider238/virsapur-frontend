import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../Components/Navbar';
import { useScroll } from 'framer-motion';
import { Grid, Typography, IconButton, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TikTokIcon from '@mui/icons-material/MusicNote';
import { BlogContent, socialLinks } from '../../data';

const Blog = () => {
  const { blogPath } = useParams();
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogPath]); 

  
  const initialBlog = BlogContent.find(
    item => item.path === `/blog/${blogPath}`
  );

  if (!initialBlog) return null;

  const [currentBlog, setCurrentBlog] = useState(initialBlog);

  
  useEffect(() => {
    const blogFromURL = BlogContent.find(
      item => item.path === `/blog/${blogPath}`
    );
    if (blogFromURL) setCurrentBlog(blogFromURL);
  }, [blogPath]);

  
  const iconMap = {
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    tiktok: TikTokIcon,
  };

  
  const relatedBlogs = BlogContent.filter(
    b => b.path !== currentBlog.path
  );

  
  const handleSwap = (clickedBlog) => {
    setCurrentBlog(clickedBlog);
    navigate(`/blog/${clickedBlog.path.split('/').pop()}`); 
  };

  return (
    <>
      <Navbar />

      
      <Grid container justifyContent="center">
        <Grid sx={{ maxWidth: '1200px', width: '100%', padding: '20px'}}>
         
          <Grid item xs={12} sx={{ height: '500px', width: '100%', marginTop:"100px" }}>
            <img
              src={currentBlog.image}
              alt={currentBlog.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '12px',
                display: 'block',
              }}
            />
          </Grid>

         
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Typography
              variant="h4"
              sx={{ textAlign: 'center', fontWeight: 700 }}
            >
              {currentBlog.title}
            </Typography>
          </Grid>

          
          <Grid sx={{ mt: 2 }}>
            {currentBlog.text}
            {currentBlog.location && (
              <p style={{ fontSize: '20px' }}>
                Explore our featured blog posts <br />
                <a
                  style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
                  href={currentBlog.location.url}
                >
                  {currentBlog.location.title}
                </a>{' '}
                and{' '}
                <a
                  href=""
                  style={{ fontSize: '20px', fontWeight: "bold", textDecoration: "none", color: "black" }}
                >
                  cultural traditions
                </a>,<br /> celebrating our rich history
              </p>
            )}
            <p style={{ fontSize: '20px' }}>
              {currentBlog.location && (
                <a
                  href={currentBlog.location.url}
                  style={{ fontWeight: "bold", textDecoration: "none", color: "black" }}
                >
                  Region/location tag
                </a>
              )}
            </p>
          </Grid>

          
          <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
            <Grid sx={{ display: 'flex', gap: 1.5 }}>
              {socialLinks.map((item, index) => {
                const Icon = iconMap[item.icon];
                if (!Icon) return null;
                return (
                  <IconButton
                    key={index}
                    component="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      
      <Grid container justifyContent="center" sx={{ mt: 8, mb:3 }} >
        <Grid sx={{ maxWidth: '1200px', width: '100%', px: 2 }}>
        
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
            Related Articles
          </Typography>

          
          <Grid container spacing={4}>
            {relatedBlogs.map((item, index) => (
              <Grid
                item
                key={index}
                size={{ xs: 12, md: 4, sm:6 }}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    maxHeight: '250px'
                  }}
                />
                <Button
                  style={{backgroundColor:"black" ,color:"white",borderRadius:"25px"}}
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => handleSwap(item)}
                >
                  Read More
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Blog;



