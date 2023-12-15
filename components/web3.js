import Web3 from 'web3';

const rpcSepolia = 'https://eth-sepolia.g.alchemy.com/v2/Dy4zBBd1RgIFZIn16MxMmTn0zP-l5FjT';
const web3 = new Web3(new Web3.providers.HttpProvider(rpcSepolia));

export default web3;