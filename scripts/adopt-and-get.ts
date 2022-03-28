import { ethers } from "hardhat";

const CONTRACT_ADDRESS = '0xC1426D4a65b3A523F023B6276152F6DAbb557679';
const API_URL = 'https://eth-rinkeby.alchemyapi.io/v2/t_lcfBUtKky-S1RIBXEYbpmCMfIv3296';
const PRIVATE_KEY = '0x8dd4e70508c7a9df1b2209fca83fd6b42c132e78b49e70dc25f52d05c812e8b2';

const provider = new ethers.providers.JsonRpcProvider(API_URL); //creamos provider para conectarnos atravez de alchemy
const abi = require("../artifacts/contracts/Adoption.sol/Adoption.json").abi; //traemos una bi que nos permite interactuar con el contrato
const wallet = new ethers.Wallet(PRIVATE_KEY, provider); //con la clave privada creamos una wallet para crear un nuevo contrato de adopcion 
const adoptionContract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet);


const main = async () => {
    // adopt a pet
    const adoptTxResponse = await adoptionContract.adopt(5);
    await adoptTxResponse.wait();

    // get adopter of pet 5
    const adopter = await adoptionContract.getAdopterOf(5);
    console.log(adopter);
}

main();
