import React, { useEffect, useState } from 'react';
import { fetchTopCryptoPrices } from '../api/cryptoApi';
import { Typography } from '@mui/material';
import '../styles/styles.scss';

function CryptoPriceList() {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const getPrices = async () => {
            const data = await fetchTopCryptoPrices();
            console.log(data);
            setPrices(data);
        };
        getPrices();
    }, []);

    return (
        <div className='coin-cards-container'>
            {
                prices.map((crypto, index) => {
                    return (
                        <div key={index} className="coin-card">
                            <img src={crypto.image} alt={crypto.name} className="coin-icon" />
                            <Typography className="coin-rate">{crypto.current_price}</Typography>
                            <Typography className="coin-name">{crypto.name}</Typography>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default CryptoPriceList;
