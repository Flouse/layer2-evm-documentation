const { ethers } = require('hardhat');

const ETHEREUM_ADDRESS = process.env.ETHEREUM_ADDRESS || '<YOUR_ETHEREUM_ADDRESS>';
const SUDT_PROXY_CONTRACT_ADDRESS = process.env.SUDT_PROXY_CONTRACT_ADDRESS || '<YOUR_SUDT_PROXY_CONTRACT_ADDRESS>';
const GODWOKEN_WEB3_RPC = process.env.GODWOKEN_WEB3_RPC || 'https://godwoken-testnet-v1.ckbapp.dev';

(async () => {
    console.log(`Using Ethereum address: ${ETHEREUM_ADDRESS}`);

    console.log(`Checking SUDT balance using proxy contract with address: ${SUDT_PROXY_CONTRACT_ADDRESS}...`);

    if (ETHEREUM_ADDRESS === '<YOUR_ETHEREUM_ADDRESS>') {
        throw new Error('You need to fill <YOUR_ETHEREUM_ADDRESS> before starting the program.');
    }

    const provider = new ethers.providers.JsonRpcProvider(GODWOKEN_WEB3_RPC);
    const contract = (await ethers.getContractFactory('ERC20')).attach(SUDT_PROXY_CONTRACT_ADDRESS).connect(provider);

    console.log(await contract.callStatic.balanceOf(ETHEREUM_ADDRESS));
})();