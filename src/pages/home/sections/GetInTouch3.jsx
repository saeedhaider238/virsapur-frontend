import React, { useState, useEffect } from 'react'
import { Grid, TextField, Button, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import getInTouch3Background from '../../../assets/backgrounds/GetInTouch3Background.png'
import getInTouch3SectionImage from '../../../assets/monuments/getInTouch3SectionImage.png'
import { useMediaQuery } from '@mui/material';

const GetInTouch3 = () => {
    const isMdScreen = useMediaQuery('(max-width: 900px)')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "message" && value.split(" ").length > 200) {
            return;
        }

        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name) {
            alert("Name is required");
            return;
        }

        if (!formData.email || !emailPattern.test(formData.email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (formData.message.split(" ").length > 200) {
            alert("Message cannot be more than 200 words");
            return;
        }

        console.log('Data: ', formData)
    };

    return (
        <>
            <Grid container sx={{ marginTop: '100px', justifyContent: 'center', position: 'relative' }}>
                {!isMdScreen && <Grid container sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1, }}>
                    <Grid size={{ xs: 12, sm: 8, md: 8 }} sx={{ width: '100%', height: '100%' }}></Grid>
                    <Grid container size={{ xs: 12, sm: 4, md: 4 }} sx={{ justifyContent: 'end', height: '100%', overflow: 'hidden' }}>
                        <img src={getInTouch3Background} alt="" style={{ height: '100%', width: '100%' }} />
                    </Grid>
                </Grid>}

                <Grid container sx={{ maxWidth: '1200px', padding: '70px 20px 100px 20px', zIndex: 2, }} spacing={!isMdScreen ? 20 : 4} >
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                        <Grid>
                            <h1 style={{ fontWeight: 400, fontSize: '60px', textAlign: 'start', marginBottom: '0px', fontFamily: 'Montserrat', }}>GET IN TOUCH</h1>
                        </Grid>
                        <Grid container sx={{ padding: '0px 0px', marginTop: '10px', flexDirection: 'column' }} spacing={2}>
                            <h3 style={{ fontWeight: '600', margin: '0px', fontSize: '22px' }}>Contact Information</h3>
                            <Grid container sx={{ flexDirection: 'column' }} spacing={1}>
                                <h3 style={{ fontWeight: '900', margin: '0px', fontSize: '22px' }}>Phone Number: </h3>
                                <p style={{ margin: '0px', fontSize: '22px' }}>+92-315-4354899</p>
                            </Grid>
                            <Grid container sx={{ flexDirection: 'column' }} spacing={1}>
                                <h3 style={{ fontWeight: '900', margin: '0px', fontSize: '22px' }}>Email Address: </h3>
                                <p style={{ margin: '0px', fontSize: '22px' }}>virsapur@gmail.com</p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} sx={{ backgroundColor: '#1979b8', padding: '20px', marginTop: '25px', borderRadius: '15px', border: '2px solid black' }}>
                            <h3 style={{ color: 'white', margin: '0px', }}>Contact US</h3>
                            <TextField id="outlined-basic" label="Name" name='name' value={formData.name} onChange={handleChange} variant="outlined" sx={{
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
                            <TextField id="outlined-basic" label="Email address" name='email' value={formData.email} onChange={handleChange} variant="outlined" sx={{
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
                            <TextField id="outlined-basic" label="Leave a message" name='message' rows={2} multiline value={formData.message} onChange={handleChange} variant="outlined" sx={{
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
                                <Button variant="contained" sx={{ width: '100%', backgroundColor: 'black', color: 'white', fontWeight: 600, borderRadius: '20px', marginTop: '40px' }} onClick={handleSubmit}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ marginTop: '40px', borderRadius: '15px', border: '2px solid black' }}>
                        <img src={getInTouch3SectionImage} alt="" style={{ width: '100%', height: '100%', borderRadius: '15px' }} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ marginTop: '0px', alignItems: 'center', backgroundColor: '#1979b8', justifyContent: 'center', padding: '20px 0px' }} spacing={2} size={12}>

                <Link
                    href="https://www.facebook.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'inherit' }}
                >
                    <FaFacebookF fontSize="40px" style={{ color: 'white' }} />
                </Link>

                <Link
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'inherit' }}
                >
                    <BsTwitterX style={{ fontSize: '40px', color: 'white' }} />
                </Link>

                <Link
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'inherit' }}
                >
                    <InstagramIcon style={{ fontSize: '50px', color: 'white' }} />
                </Link>

            </Grid>
        </>
    )
}

export default GetInTouch3
