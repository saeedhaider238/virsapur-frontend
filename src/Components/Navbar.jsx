import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import VirsapurLogo from '../assets/Virsapur-Logo.png'
import { Link } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';

const Navbar = () => {
  const isSmallScreen = useMediaQuery('(max-width: 860px)')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const list = () => (
    <List sx={{ width: 250 }}>
      {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Grid container sx={{ width: '100%', position: 'fixed', padding: '0px 50px', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }} spacing={2}>
      <Grid item>
        <img src={VirsapurLogo} alt="Virsapur" style={{ width: '120px', height: '80px' }} />
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        {/* {!isSmallScreen ? <Grid container spacing={5}>
          <Grid item><Link to="/home" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Home</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Trails</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Workshops</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Why Virsapur!</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Bookings</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Blog</Link></Grid>
        </Grid> : <Grid item><Button variant="contained" onClick={setIsDrawerOpen(true)}>
          Open Right Drawer
        </Button>
          <Drawer
            anchor="right" // <-- This makes it appear from the right
            open={isDrawerOpen}
            onClose={setIsDrawerOpen(false)}
          >
            {list()}
          </Drawer></Grid>} */}
        <Grid container spacing={5}>
          <Grid item><Link to="/home" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Home</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Trails</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Workshops</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Why Virsapur!</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Bookings</Link></Grid>
          <Grid item><Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Blog</Link></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Navbar