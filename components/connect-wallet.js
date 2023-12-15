// MetaMaskConnect.js
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const MetaMaskConnect = ({ onConnect }) => {
    const [connectedAddress, setConnectedAddress] = useState(null);

    const initWeb3 = async () => {
        try {
            if (typeof window !== 'undefined' && window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const accounts = await window.web3.eth.getAccounts();
                setConnectedAddress(accounts[0]);
            } else if (typeof window !== 'undefined' && window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
                const accounts = await window.web3.eth.getAccounts();
                setConnectedAddress(accounts[0]);
            } else {
                console.log('MetaMask not detected! Please install MetaMask extension.');
            }
        } catch (error) {
            console.error('Error initializing Web3:', error);
        }
    };

    useEffect(() => {
        initWeb3();
    }, []);

    useEffect(() => {
        if (connectedAddress && onConnect) {
            onConnect(connectedAddress);
        }
    }, [connectedAddress, onConnect]);

    return null; // This component doesn't render anything visible
};

export default MetaMaskConnect;
