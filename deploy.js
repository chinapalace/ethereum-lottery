const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'blur hope animal glare argue loyal alcohol envelope brand arctic toast upset',
  'https://rinkeby.infura.io/VWis7vNnjNF3qqCa4v1T'
);