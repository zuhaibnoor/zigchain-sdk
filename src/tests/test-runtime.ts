import {
  ChainRuntimeApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  // Select network
  const endpoints = getNetworkEndpoints(Network.Testnet)

  // Initialize Runtime module
  const runtime = new ChainRuntimeApi(endpoints)

  console.log('\n--- Runtime Config ---')
  const config = await runtime.fetchConfig()
  console.dir(config, { depth: null })

}

main()
