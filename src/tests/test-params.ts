import {
  ChainParamsApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const paramsApi = new ChainParamsApi(endpoints)

  console.log('\n--- All Param Subspaces ---')
  const subspaces = await paramsApi.fetchSubspaces()
  console.dir(subspaces, { depth: null })

  console.log('\n--- Staking UnbondingTime Param ---')
  const param = await paramsApi.fetchParam(
    'staking',
    'UnbondingTime'
  )
  console.dir(param, { depth: null })
}

main()
