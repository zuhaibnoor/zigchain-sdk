import {
  ChainBlockResultsApi,
  getNetworkEndpoints,
  Network,
} from '../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const blockResultsApi = new ChainBlockResultsApi(endpoints)

  const results = await blockResultsApi.fetchBlockResults(2990050)

  console.log('Block results:')
  console.dir(results, { depth: null })
}

main().catch(console.error)