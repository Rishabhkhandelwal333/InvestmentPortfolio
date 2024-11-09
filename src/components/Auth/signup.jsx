import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import '../../styles/styles.scss';
import Logo from '../../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

function SignUp({ onAuth }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate('/');
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        onAuth(username, email, password);
        localStorage.setItem('user', JSON.stringify(username));
    };


    return (
        <Container maxWidth="sm" className="auth-container">

            <Box className="logo-container">
                <img className="logo" src={Logo}></img>
            </Box>


            <Typography variant="h2" className="platform-title">
                Crypto X Investment
            </Typography>


            <form onSubmit={handleSignUp} className="signup-form">
                <TextField
                    fullWidth
                    label="Enter Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="username-input"

                />
                <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    className="email-input"
                />
                <TextField
                    fullWidth
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    className="password-input"
                />


                <Box className="button-container">
                    <Button type="submit" variant="contained" className="signup-btn">
                        Sign Up
                    </Button>
                    <Button onClick={handleGoToLogin} variant="outlined" className="login-btn">
                        Login
                    </Button>
                </Box>
            </form>
        </Container>
    );
}

export default SignUp;
