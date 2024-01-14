import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import * as dotenv from "dotenv";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import { HardhatUserConfig } from "hardhat/config";
import './tasks'

dotenv.config();

const config: HardhatUserConfig = {
    contractSizer: {
        alphaSort: true,
        disambiguatePaths: false,
        runOnCompile: true,
        strict: true
    },
    abiExporter: {
        path: "./abi",
        runOnCompile: true,
        clear: true,
        spacing: 2,
        only: [
            /**
             * List of specific contract names for exporting ABI
             */
            // ":ERC20",
        ],
        format: "json"
    },
    defaultNetwork: 'dev',
    networks: {
        dev: {
            url: 'http://127.0.0.1:8545/',
            chainId: 31337
        }
    },
    etherscan: {
        apiKey: {
            dev: ''
        },
        customChains: [
            {
                network: 'dev',
                chainId: 31337,
                urls: {
                    apiURL: 'http://127.0.0.1:8545/',
                    browserURL: 'http://127.0.0.1:8545/'
                }
            }
        ]
    },
    solidity: {
        compilers: [
            {
                version: "0.8.18",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100
                    }
                }
            }
        ]
    },
    typechain: {
        outDir: 'typechain-types',
        target: 'ethers-v6'
    },
};

export default config
