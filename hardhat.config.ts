import '@nomicfoundation/hardhat-toolbox';
import 'solidity-coverage';
import '@typechain/hardhat';
import '@typechain/ethers-v5';
import 'hardhat-deploy';
import 'hardhat-abi-exporter'
import {HardhatUserConfig} from 'hardhat/types';

import dotenv from 'dotenv';
dotenv.config({
  path: '../../.env'
});

const {
  INFURA_API_KEY,
  ETHERSCAN_API_KEY,
  BSCSCAN_API_KEY
} = process.env;

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      saveDeployments: true,
      tags: ['test'],
      deploy: ['./deploy'],
      loggingEnabled: true,
      allowUnlimitedContractSize: true,
      // hardfork: 'london'
    },
    localhost: {
      url: 'http://127.0.0.1:8545/'
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
    },
    bscTestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org/`,
    }
  },
  etherscan: {
    apiKey: {
      mainnet: `${ETHERSCAN_API_KEY}`,
      goerli: `${ETHERSCAN_API_KEY}`,
      bsc: `${BSCSCAN_API_KEY}`,
      bscTestnet: `${BSCSCAN_API_KEY}`,
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200   // Optimize for how many times you intend to run the code
        },
    }
  },
  paths: {
    tests: './test',
    deploy: './deploy',
    deployments: './deployments'
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    owner: {
      default: 0
    }
  },
  mocha: {
    timeout: 999999
  },
  typechain: {
    outDir: './typechain',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true
  },
  abiExporter: {
    path: './export/abi',
    runOnCompile: true,
    clear: true,
    format: 'json'
  }
};

export default config