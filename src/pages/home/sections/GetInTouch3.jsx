import React from 'react'
import { Grid, TextField, Button, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import getInTouch3Background from '../../../assets/backgrounds/getInTouch3Background.png'
import getInTouch3SectionImage from '../../../assets/monuments/getInTouch3SectionImage.png'
import {useMediaQuery} from '@mui/material';

const GetInTouch3 = () => {
    const isMdScreen = useMediaQuery('(max-width: 900px)')
    return (
        <Grid container sx={{ marginTop: '100px', justifyContent: 'center', position: 'relative' }}>

            <Grid container sx={{position: 'absolute', width: '100%', height: '100%', zIndex: 1,}}>
                <Grid size={{xs: 12, sm: 12, md: 8}} sx={{width: '100%', height: '100%'}}></Grid>
                <Grid container size={{xs: 12, sm: 12, md: 4}} sx={{justifyContent: 'end', height: '100%', overflow: 'hidden'}}>
                    <img src={getInTouch3Background} alt="" style={{height: '100%', width: '100%'}}/>
                </Grid>
            </Grid>

            <Grid container sx={{maxWidth: '1200px', padding: '70px 20px 100px 20px', zIndex: 2, }} spacing={!isMdScreen ? 20 : 4 } >
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Grid>
                        <h1 style={{ fontWeight: '100', fontSize: '50px', textAlign: !isMdScreen ? 'start' : 'center'}}>GET IN TOUCH</h1>
                    </Grid>
                    <Grid container sx={{ padding: '0px 0px', marginTop: '40px', flexDirection: 'column' }} spacing={2}>
                        <h3 style={{ fontWeight: '600', marginBottom: '0px', fontSize: '22px' }}>Contact Information</h3>
                        <Grid container sx={{ flexDirection: 'column' }} spacing={1}>
                            <h3 style={{ fontWeight: '900', margin: '0px', fontSize: '22px' }}>Phone Number: </h3>
                            <p style={{ margin: '0px', fontSize: '22px' }}>+92-315-4354899</p>
                        </Grid>
                        <Grid container sx={{ flexDirection: 'column' }} spacing={1}>
                            <h3 style={{ fontWeight: '900', margin: '0px', fontSize: '22px' }}>Email Address: </h3>
                            <p style={{ margin: '0px', fontSize: '22px' }}>virsapur@gmail.com</p>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ marginTop: '35px', alignItems: 'center' }} spacing={1}>
                        <Link
                            href="https://www.instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'inherit' }}
                        >
                            <InstagramIcon style={{ fontSize: '50px' }} />
                        </Link>

                        <Link
                            href="https://www.facebook.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'inherit' }}
                        >
                            <FaFacebook fontSize="45px" />
                        </Link>

                        <Link
                            href="https://www.tiktok.com/@yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'inherit' }}
                        >
                            <IoLogoTiktok fontSize="45px" />
                        </Link>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ marginTop: '40px', borderRadius: '15px', border: '2px solid black' }}>
                    <img src={getInTouch3SectionImage} alt="" style={{width: '100%', height: '100%', borderRadius: '15px'}} />
                    {/* <h3 style={{ color: 'white', marginTop: '0px', }}>Contact US</h3>
                    <Grid container spacing={3}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{
                            width: '100%', "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "white",
                                },
                                "&:hover fieldset": {
                                    borderColor: "white",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "white",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "white",
                            },
                            input: {
                                color: "white",
                            },
                        }} />
                        <TextField id="outlined-basic" label="Email address" variant="outlined" sx={{
                            width: '100%', "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "white",
                                },
                                "&:hover fieldset": {
                                    borderColor: "white",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "white",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "white",
                            },
                            input: {
                                color: "white",
                            },
                        }} />
                        <TextField id="outlined-basic" label="Leave a message" rows={2} multiline variant="outlined" sx={{
                            width: '100%', "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "white",
                                },
                                "&:hover fieldset": {
                                    borderColor: "white",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "white",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "white",
                            },
                            input: {
                                color: "white",
                            },
                            "& .MuiOutlinedInput-input": {
                                color: "white",
                            },
                            "& .MuiOutlinedInput-inputMultiline": {
                                color: "white",
                            },
                        }} />
                        <Grid sx={{ width: '100%', }}>
                            <Button variant="contained" sx={{ width: '100%', backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '20px', marginTop: '40px' }}>Submit</Button>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>

        </Grid>
    )
}

export default GetInTouch3
