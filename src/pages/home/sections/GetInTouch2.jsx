import React, {useState} from 'react'
import { Grid, TextField, Button, Link } from '@mui/material'
import getInTouchBackground from '../../../assets/backgrounds/GetInTouch2Background.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const GetInTouch2 = () => {
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
        <Grid container sx={{ marginTop: '100px', justifyContent: 'center', backgroundImage: `url(${getInTouchBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center bottom', position: 'relative', overflow: 'hidden' }}>
            <Grid container sx={{ width: '100%', maxWidth: '1200px', padding: '70px 20px 320px 20px', zIndex: 10 }} >
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Grid sx={{ backgroundColor: '#52576d', width: 'auto', display: 'inline-block', padding: '0px 30px', borderRadius: '20px' }}>
                        <h1 style={{ fontWeight: '100', color: 'white' }}>GET IN TOUCH</h1>
                    </Grid>
                    <Grid container sx={{ padding: '0px 0px', marginTop: '40px', flexDirection: 'column' }} spacing={2}>
                        <h3 style={{ fontWeight: '600', marginBottom: '0px', fontSize: '22px', color: 'white' }}>Contact Information</h3>
                        <Grid container sx={{ flexDirection: 'column' }} spacing={1}>
                            <h3 style={{ fontWeight: '900', margin: '0px', fontSize: '22px', color: 'white' }}>Phone Number: </h3>
                            <p style={{ margin: '0px', fontSize: '22px', color: 'white' }}>+92-315-4354899</p>
                        </Grid>
                        <Grid container sx={{ flexDirection: 'column' }} spacing={1}>
                            <h3 style={{ fontWeight: '900', margin: '0px', fontSize: '22px', color: 'white' }}>Email Address: </h3>
                            <p style={{ margin: '0px', fontSize: '22px', color: 'white' }}>virsapur@gmail.com</p>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ marginTop: '35px', alignItems: 'center' }} spacing={1}>
                        <Link
                            href="https://www.instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'inherit' }}
                        >
                            <InstagramIcon style={{ fontSize: '50px', color: 'white' }} />
                        </Link>

                        <Link
                            href="https://www.facebook.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'inherit' }}
                        >
                            <FaFacebook fontSize="45px" style={{color: 'white'}}/>
                        </Link>

                        <Link
                            href="https://www.tiktok.com/@yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'inherit' }}
                        >
                            <IoLogoTiktok fontSize="45px" style={{color: 'white'}} />
                        </Link>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ backgroundColor: '#52576d', padding: '30px', marginTop: '40px', borderRadius: '15px', border: '2px solid black' }}>
                    <h3 style={{ color: 'white', marginTop: '0px', }}>Contact US</h3>
                    <Grid container spacing={3}>
                        <TextField id="outlined-basic" label="Name" name='name' onChange={handleChange} variant="outlined" sx={{
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
                        <TextField id="outlined-basic" label="Email address" name='email' onChange={handleChange} variant="outlined" sx={{
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
                        <TextField id="outlined-basic" label="Leave a message" name='message' onChange={handleChange} rows={2} multiline variant="outlined" sx={{
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
                            <Button variant="contained" onClick={handleSubmit} sx={{ width: '100%', backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '20px', marginTop: '40px' }}>Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default GetInTouch2
