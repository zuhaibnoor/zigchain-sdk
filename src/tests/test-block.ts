import {
  ChainBlockApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const blockApi = new ChainBlockApi(endpoints)

  // 1️⃣ Block by height
  const blockByHeight = await blockApi.getBlockByHeight(2990050)
  console.log('Block by height:')
  console.dir(blockByHeight, { depth: null })

  // 2️⃣ Latest Block
  const latestBlock = await blockApi.getLatestBlock()
  console.log('Latest block:')
  console.dir(latestBlock, { depth: null })

}

main().catch(console.error)
