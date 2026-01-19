import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    MenuItem,
    Paper,
    Grid,
    InputAdornment,
    IconButton
} from '@mui/material';
// Import the icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const EnrollmentForm = ({course, coursesData}) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        course: course.path.split('/').at(-1),
        password: '',
        confirmPassword: ''
    });
    console.log(course.path.split('/').at(-1))
    const [errors, setErrors] = useState({});
    // State to toggle visibility
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (!!errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        const emailRegex = /\S+@\S+\.\S+/;
        if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Invalid email format";
        }
        if (!formData.course) tempErrors.course = "Please select a course";
        if (formData.password.length < 8) {
            tempErrors.password = "Password must be at least 8 characters";
        }
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Success:", formData);
            alert("Registration Successful!");
        }
    };

    return (
        <Grid size={12} sx={{ marginBottom: '100px' }}>
            <Container sx={{maxWidth: '1200px', padding: '0px'}}>
                <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
                    <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
                        Enroll Now
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="fullName"
                            margin="normal"
                            value={formData.fullName}
                            onChange={handleChange}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                        />

                        <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            margin="normal"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />

                        <TextField
                            fullWidth
                            select
                            label="Course"
                            name="course"
                            margin="normal"
                            value={formData.course}
                            onChange={handleChange}
                            error={!!errors.course}
                            helperText={errors.course}
                        >
                            {coursesData.map((item, index) => (
                                <MenuItem value={item.path.split('/').at(-1)}>{item.title}</MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            // Toggle type based on state
                            type={showPassword ? 'text' : 'password'}
                            margin="normal"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            // Add the icon to the end of the input
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Confirm Password"
                            name="confirmPassword"
                            // Usually, we keep confirm password synced with the same visibility
                            type={showPassword ? 'text' : 'password'}
                            margin="normal"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 3, mb: 2, py: 1.5 }}
                        >
                            Submit Enrollment
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Grid>
    );
};

export default EnrollmentForm;