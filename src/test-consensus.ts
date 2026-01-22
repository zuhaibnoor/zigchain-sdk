import {
  ChainConsensusApi,
  getNetworkEndpoints,
  Network,
} from '../dist/index.js'

async function main() {
  try {
    // 1️⃣ Select network
    const endpoints = getNetworkEndpoints(Network.Testnet)

    // 2️⃣ Initialize Consensus API
    const consensusApi = new ChainConsensusApi(endpoints)

    // 3️⃣ Fetch consensus params (latest)
    const params = await consensusApi.fetchConsensusParams()

    console.log('Consensus Params:')
    console.dir(params, { depth: null })

    const height = 4141776;
    // 4️⃣ Fetch consensus params at height (optional)
    const paramsAtHeight = await consensusApi.fetchConsensusParams({
      height: 4141776,
    })

    console.log(`\nConsensus Params at height ${height}:`)
    console.dir(paramsAtHeight, { depth: null })
  } catch (err) {
    console.error('Error fetching consensus params:', err)
  }
}

main()
