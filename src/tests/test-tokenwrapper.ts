import {
  ChainTokenWrapperApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const tokenWrapperApi = new ChainTokenWrapperApi(endpoints)

  console.log('--- Token Wrapper Module Info ---')
  const moduleInfo = await tokenWrapperApi.fetchModuleInfo()
  console.dir(moduleInfo, { depth: null })

  console.log('\n--- Token Wrapper Params ---')
  const params = await tokenWrapperApi.fetchParams()
  console.dir(params, { depth: null })

  console.log('\n--- Token Wrapper Total Transfers ---')
  const totals = await tokenWrapperApi.fetchTotalTransfers()
  console.dir(totals, { depth: null })
}

main()
