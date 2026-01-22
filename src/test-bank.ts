import {
  ChainBankApi,
  getNetworkEndpoints,
  Network,
} from '../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const bankApi = new ChainBankApi(endpoints)

  const address = 'zig1ywdjacpqw94s3janzanaxvud3wa22dzfl3kjq7' 

  console.log('--- Balances ---')
  const balances = await bankApi.fetchBalances(address)
  console.dir(balances, { depth: null })

  console.log('\n--- Balance of specific denom ---')
  const balance = await bankApi.fetchBalance(address, 'uzig')
  console.dir(balance, { depth: null })

  console.log('\n--- Total supply ---')
  const supply = await bankApi.fetchTotalSupply()
  console.dir(supply, { depth: null })

  console.log('\n--- Supply of specific denom ---')
  const supplyOf = await bankApi.fetchSupplyOf('uzig')
  console.dir(supplyOf, { depth: null })
}

main().catch(console.error)
