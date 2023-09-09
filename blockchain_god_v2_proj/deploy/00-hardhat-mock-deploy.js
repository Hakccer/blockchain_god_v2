const hre = require("hardhat")
const { network } = require("hardhat")
const { development_chains, MOCK_DECIMALS, MOCL_PRICE } = require("../helper-hardhat.config")

module.exports = async()=>{
    const { deploy, log } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts();

    // Now checking if the Network is Test Net so that we have to deploy the mock
    if (development_chains.includes(network.name)){
        console.log("Local Detected Deploying the mocks...");
        const my_mock_contract = await deploy("MockV3Aggregator",{
            from:deployer,
            args:[
                MOCK_DECIMALS,
                MOCL_PRICE
            ],
            log:true
        })
        console.log("Mocks Deployed Successfully...");
        console.log("--------------------------------->");
    }
}

module.exports.tags = ['all', 'fund_mocks']