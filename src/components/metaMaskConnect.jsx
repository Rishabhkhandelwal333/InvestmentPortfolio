import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Button, Typography } from '@mui/material';
import '../styles/styles.scss';

function MetaMaskConnect() {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
                console.log("wallet connected", accounts[0]);
            } catch (error) {
                console.error("MetaMask connection error:", error);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    useEffect(() => {
        connectWallet();
    }, []);

    return (
        <div>
            {account ? (
                <Typography variant='h6' >Connected Wallet : {account}</Typography>
            ) : (
                <Button onClick={connectWallet} className="metamask-button">
                    Connect MetaMask
                </Button>
            )}
        </div>
    );
}

export default MetaMaskConnect;
