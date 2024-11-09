import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchTopCryptoPrices } from '../api/cryptoApi';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

function Charts() {
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

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Top 10 Cryptocurrencies - Prices in USD' },
        },
        scales: {
            y: {
                beginAtZero: false,
                type: 'linear',
            },
        },
    };

    return (
        <div className="chart-container">
            {chartData ? <Line data={chartData} options={options} /> : <p>Loading chart...</p>}
        </div>
    );
}

export default Charts;
