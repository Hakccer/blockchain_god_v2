const {network} = require("hardhat");
const { run } = require("hardhat")

const verify_contract = async(address, args)=>{
    console.log(`Verifying the Contract addr(${address})...`);
    try{
        await run("verify:verify",{
            address:address,
            args:args
        })
    }
    catch (e){
        if(e.message.toLowerCase().includes("already")){
            console.log(`contract with address(${address})`);
        }
        else{
            console.log(`Not able to identify the error for the contract with address(${address})\n`);
            console.log(e);
        }
    }
}

module.exports = {
    verify_contract
}