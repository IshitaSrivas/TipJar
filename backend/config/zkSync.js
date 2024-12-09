//zksync.js
const { Wallet, Provider } = require('zksync');
const { ethers } = require('ethers');
require('dotenv').config();

const zkProvider = new Provider(process.env.ZKSYNC_URL);
const privateKey = process.env.PRIVATE_KEY;
const zkWallet = new Wallet(privateKey, zkProvider);

const contractABI = [/* ABI array here */];
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new ethers.Contract(contractAddress, contractABI, zkWallet);

module.exports = {
  zkWallet,
  contract,
  zkProvider
};







