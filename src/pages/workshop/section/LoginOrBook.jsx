import React from 'react'
import { Grid, Button } from '@mui/material'
import { h1 } from 'framer-motion/client';
import LoginOrSignUp from './LoginOrSignUp';

const LoginOrBook = () => {
    const access = localStorage.getItem("access");
    const expires = localStorage.getItem("expires");
    const refresh = localStorage.getItem("refresh");
    const role = localStorage.getItem("role");

    if (access && expires && refresh && role) {
      const nowTime = new Date().getTime();
      const expiryTime = new Date(expires).getTime();

      if (nowTime > expiryTime) {
        return (<LoginOrSignUp />)
      } else {
        // if (!allowedRoles.includes(role)) {
        //   alert("Unauthorized Access");
        //   navigate(-1);
        // }
        return (<Button variant="contained">Book Now</Button>)
      }
    } else {
      return (
        <LoginOrSignUp />
      );
    }
}

export default LoginOrBook
