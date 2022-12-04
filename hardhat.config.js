require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
const GOERLI_RPC_URL = process.env.RPC_URL_KEY;
const GOERLI_PVT_KEY= process.env.PVT_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${GOERLI_RPC_URL}`,
      accounts: [GOERLI_PVT_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.EthApiKey
  },
};
