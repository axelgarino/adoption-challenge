import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.0", settings: {} }],
  },
  networks: {
    hardhat: {},
    localhost: {},
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
    rinkeby : {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/t_lcfBUtKky-S1RIBXEYbpmCMfIv3296',
      accounts: ['0x8dd4e70508c7a9df1b2209fca83fd6b42c132e78b49e70dc25f52d05c812e8b2'],
      gasPrice: 8000000000
    }
  }
};

export default config
