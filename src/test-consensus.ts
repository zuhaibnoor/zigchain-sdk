import { ChainConsensusApi, getNetworkEndpoints, Network } from '../dist/index.js';

async function main() {
  try {
    // 1️⃣ Select network
    const endpoints = getNetworkEndpoints(Network.Testnet)

    // 2️⃣ Initialize Consensus API
    const consensusApi = new ChainConsensusApi(endpoints)

    // 3️⃣ Fetch consensus params
    const params = await consensusApi.fetchConsensusParams()

    // 4️⃣ Print results
    console.log('Consensus Params:')
    console.dir(params, { depth: null })
  } catch (err) {
    console.error('Error fetching consensus params:', err)
  }
}

main()
