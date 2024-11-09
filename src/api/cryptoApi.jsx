import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

export const fetchTopCryptoPrices = async () => {
  
  const cachedData = localStorage.getItem('cryptoPrices');
  if (cachedData) {
    console.log('Using cached data');
    return JSON.parse(cachedData); 
  }

 
  try {
    const response = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
      },
    });
    
    const data = response.data;

   
    localStorage.setItem('cryptoPrices', JSON.stringify(data));

    return data; 
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    return [];
  }
};
