import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import MetaMaskConnect from '../metaMaskConnect.jsx';
import CryptoPriceList from '../cryptoPriceList.jsx';
import Charts from '../charts.jsx';
import '../../styles/styles.scss';
import { useNavigate } from 'react-router-dom';

function Dashboard({ user, onLogout }) {

    const navigate = useNavigate();


    const handleGoToPortfolio = () => {
        navigate('/portfolio');
    };


    return (
        <Container className="dashboard-container">

            <div className="profile-section">
                <div className="profile-icon">{user.charAt(0).toUpperCase()}</div>
                <div className="profile-name">{user}</div>
                <div className="action-buttons">
                    <Button variant="outlined" onClick={onLogout}>Logout</Button>
                    <Button onClick={handleGoToPortfolio} variant="contained">View Portfolio</Button>
                </div>
            </div>


            <div className="title-section">
                <Typography className="platform-title">Investment Platform Crypto</Typography>
                <div className="platform-icon">💰</div>
            </div>


            <div className="wallet-buttons">
                <Typography className="wallet-id">
                    <MetaMaskConnect />
                </Typography>
            </div>

            <div className="title-section">
                <Typography className="platform-title">TOP 10 COINS</Typography>
            </div>
            <CryptoPriceList />




            <div className="charts-section">
                <Typography className="charts-heading">Charts Data</Typography>
                <div className="chart-container">
                    <Charts />
                </div>
            </div>
        </Container>
    );
}

export default Dashboard;
