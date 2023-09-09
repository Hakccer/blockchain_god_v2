const { network } = require("hardhat")
const hre = require("hardhat")
const { netowrkconfig, development_chains } = require("../helper-hardhat.config")
const { verify_contract } = require("../utils/verify")

module.exports = async()=>{
    const { deploy, log, get } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts();
    // Everything is working till here so now
    console.log(deployer);
    // Preapring for the checking if the use in the test or local network
    let the_price_feed_address;
    if (!development_chains.includes(network.name)){
        console.log("Test-Net detected");
        console.log("Using the Test-Net Price Feed...");
        the_price_feed_address = netowrkconfig[network.config.chainId][aggregator_address]
    }
    else{
        console.log("Localnet detected...");
        // getting the deployed mocks
        the_price_feed_address = (await get('MockV3Aggregator')).address
    }

    // deploying the contract here
    let fund_me_args = [
        the_price_feed_address
    ]
    console.log("Deploying the contract now here....");
    const my_contract = await deploy("FundMe",{
        from:deployer,
        log:true,
        args: fund_me_args,
        waitConfirmations:1
    });

    console.log(`==> ${my_contract.address}`);

    if (!development_chains.includes(network.name)){
        console.log("test net founded...");
        verify_contract(address, arg)
    }
}

module.exports.tags = ["all"]