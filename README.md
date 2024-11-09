Cryptocurrency Dashboard with MetaMask Integration

Overview of the Application
This application is designed to track top cryptocurrency prices and allow users to manage their portfolios in real-time. It includes functionalities like login, signup, and a dashboard for displaying cryptocurrency data. Additionally, it integrates with MetaMask to allow users to interact with the Ethereum blockchain.

Features and Functionalities

Login and Signup:

Users can sign up with their credentials and log in to access personalized information.
Once logged in, the user is redirected to the dashboard. If they try to access the login or signup pages after logging in, they are redirected to the dashboard to prevent unauthorized access.

Dashboard:

The dashboard displays real-time cryptocurrency prices fetched from the CoinGecko API.
It allows users to track and view their portfolio and the latest price movements of their selected cryptocurrencies.
The data is refreshed periodically to ensure users always see the latest prices.
The data is stored in localStorage to persist the user's session and cache data for faster loading and better performance.

Cache Data Optimization:

We implemented caching for the cryptocurrency prices fetched from the CoinGecko API. When the data is first retrieved, it's stored in the browser’s localStorage to avoid making multiple requests to the API for the same data.
This improves performance and reduces the load on the API server by using cached data whenever available.

MetaMask Integration:

MetaMask is a popular browser extension that serves as a wallet for interacting with Ethereum-based applications (dApps). It allows users to securely store their private keys and sign transactions without exposing them to potential security risks.
We use MetaMask to enable users to connect their Ethereum wallet with the application, allowing them to interact with smart contracts and view their balances.
The application checks if MetaMask is installed and if the user is logged in to their MetaMask account to display the relevant information.

Role of MetaMask and How It Works
MetaMask is a browser extension and mobile app that serves as an Ethereum wallet, allowing users to store and manage their ETH and other ERC-20 tokens. It connects to the Ethereum blockchain and enables the user to interact with decentralized applications (dApps).

Usage in the Application:

The application integrates MetaMask to fetch and display the user’s Ethereum address and manage their interactions with blockchain data.
Users can check their Ethereum balance directly through MetaMask and interact with decentralized services if required.
How to Run the Project
Clone the Repository:

