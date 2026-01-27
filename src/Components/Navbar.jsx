import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import VirsapurLogo from '../assets/Virsapur-Logo.png'
import { Link } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { text: "Home", path: "/home" },
  { text: "Trails", path: "/trails" },
  { text: "Workshops", path: "/workshops" },
  { text: "Courses", path: '/courses' },
  { text: "Why Virsapur!", path: "/why-virsapur" },
  { text: "Bookings", path: "/bookings" },
  { text: "Blogs", path: "/blogs" },
];

const Navbar = ({scrollY }) => {
  const isSmallScreen = useMediaQuery('(max-width: 900px)')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [vh, setVh] = useState(window.innerHeight);
  const [bgColor, setBgColor] = useState('transparent');

  useEffect(() => {
    if(scrollY){
      const unsubscribe = scrollY.onChange((value) => {
      if (value >= 0.4 * vh) {
        setBgColor('black');
      } else {
        setBgColor('transparent');
      }
      return () => unsubscribe();
    });
    }
    else{
      setBgColor('Black')
    }
    
  }, [scrollY, vh]);

  const list = () => (
    <List sx={{ width: 250 }}>
      {menuItems.map((item, index) => (
        <ListItem component={Link} key={index} to={item.path} sx={{textDecoration: 'none', color: 'black'}}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Grid container sx={{ width: '100%', position: 'fixed', padding: !isSmallScreen ? '10px 50px' : '10px 25px', backgroundColor: bgColor, display: 'flex', zIndex: 100, justifyContent: 'space-between', marginTop: '0px' }} spacing={2}>
      <Grid item>
        <Link to="/home"><img src={VirsapurLogo} alt="Virsapur" style={{ width: '120px', height: '80px' }} /></Link>
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        {!isSmallScreen ? <Grid container spacing={5}>
          {menuItems.map((item, index)=>(<Grid item key={index}><Link to={item.path} style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>{item.text}</Link></Grid>))}
        </Grid> : <Grid item>
          <Button sx={{color: 'white'}} onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon fontSize='large'/>
          </Button>
          <Drawer
            anchor="right" 
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            {list()}
          </Drawer></Grid>}
      </Grid>
    </Grid>
  )
}

export default Navbar