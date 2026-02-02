import {
  ChainMintApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'


async function main() {
    //  Select network
    const endpoints = getNetworkEndpoints(Network.Testnet)
    // Initialize Mint module
    const mint = new ChainMintApi(endpoints)

    // Fetch inflation
    const inflation = await mint.fetchInflation()
    console.log('Inflation:', inflation)

    // Fetch annual provisions
    const annualProvisions = await mint.fetchAnnualProvisions()
    console.log('Annual Provisions:', annualProvisions)

    // Fetch mint params
    const params = await mint.fetchParams()
    console.log('Mint Params:')
    console.dir(params, { depth: null })
 
}

main()
