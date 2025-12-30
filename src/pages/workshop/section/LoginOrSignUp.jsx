import React, {useState} from 'react'
import { Grid, Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Link } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginOrSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log('Login data:', formData);
  };

  const handleSignup = () => {
    console.log('Signup data:', formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '' });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{marginTop: '150px', padding: '20px', width: '100%'}}>
      <Grid sx={{width: '100%'}}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>
            {isLogin ? 'Login' : 'Sign Up'}
          </Typography>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            )}
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginY: 2 }}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </form>
          <Typography align="center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <Link component="button" variant="body2" onClick={toggleMode}>
              {isLogin ? 'Sign Up' : 'Login'}
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default LoginOrSignUp
