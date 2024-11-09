import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, } from '@mui/material';
import Charts from './charts.jsx';
import '../styles/styles.scss';

function Portfolio({ user }) {
    const [totalValue, setTotalValue] = useState(0);

    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTopCryptoPrices();
            setChartData({
                labels: data.map((crypto) => crypto.name),
                datasets: [
                    {
                        label: 'Price in USD',
                        data: data.map((crypto) => crypto.current_price),
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        fill: true,
                        tension: 0.3,
                    },
                ],
            });
        };
        fetchData();
    }, []);

    // Sample portfolio data as I don't have my own data in my wallet so to display I used sample data. 
    const samplePortfolio = chartData || [
        { coin: 'Bitcoin', quantity: 2, price: 35000, icon: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" },
        { coin: 'Ethereum', quantity: 5, price: 2500, icon: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628" },
        { coin: 'Ripple', quantity: 1000, price: 1.2, icon: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442" },
    ];

    // Calculating the total portfolio value
    useEffect(() => {
        let total = 0;
        samplePortfolio.forEach(coin => {
            total += coin.quantity * coin.price;
        });
        setTotalValue(total);
    }, [chartData]);


    return (
        <Container className="portfolio-container">
            <Typography variant="h4" className="portfolio-header">Welcome, {user}</Typography>

            {/* Portfolio Overview */}
            <Box className="portfolio-overview">
                <Typography variant="h5" className="total-value">
                    Total Portfolio Value: ${totalValue.toFixed(2)}
                </Typography>


            </Box>
            <Typography variant="h5" className="portfolio-header">Your Top Coins</Typography>


            <Grid container spacing={2}>

                {samplePortfolio.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="portfolio-card">
                            <CardContent>
                                <Typography variant="h6">{item.coin}</Typography>
                                <Typography variant="body1">Quantity: {item.quantity}</Typography>
                                <Typography variant="body2">Price: ${item.price}</Typography>
                                <img src={item.icon} alt={item.coin}></img>
                                <Typography variant="body2">Total: ${(item.quantity * item.price).toFixed(2)}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>


            <Box className="charts-section">
                <Typography variant="h5" className="charts-title">Portfolio Performance</Typography>
                <Charts data={samplePortfolio} />
            </Box>
        </Container>
    );
}

export default Portfolio;
