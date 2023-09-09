require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("hardhat-deploy")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  solidity:{
    compilers:[
      {version:"0.8.20"},
      {version:"0.6.6"}
    ]
  },
  networks:{
    hardhat:{},
    sepolia:{
      url:process.env.RPC_URL,
      accounts:[SEPOLIA_RPC_URL],
      chainId:parseInt(process.env.CHAIN_ID)
    }
  },
  namedAccounts:{
    deployer:{
      default:0
    }
  }
};
