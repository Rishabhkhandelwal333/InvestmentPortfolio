import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import '../../styles/styles.scss';
import Logo from '../../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
function Login({ onAuth }) {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();



    const handleGoToSignUp = () => {
        navigate('/signup');
    };
    const handleLogin = (e) => {
        e.preventDefault();
        onAuth(username);
        localStorage.setItem('user', JSON.stringify(username));
        navigate('/');

    };


    return (
        <Container maxWidth="sm" className="auth-container">

            <Box className="logo-container">
                <img className="logo" src={Logo}></img>
            </Box>


            <Typography variant="h2" className="platform-title">
                Crypto X Investment
            </Typography>


            <form onSubmit={handleLogin} className="login-form">
                <TextField
                    fullWidth
                    label="Enter Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="username-input"

                />


                <Box className="button-container">
                    <Button type="submit" variant="contained" className="login-btn">
                        Login
                    </Button>

                    OR
                    <Button onClick={handleGoToSignUp} variant="outlined" className="signup-btn">
                        Sign Up
                    </Button>
                </Box>
            </form>
        </Container>
    );
}

export default Login;
