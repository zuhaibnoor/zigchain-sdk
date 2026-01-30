import {
  ChainFactoryApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const factoryApi = new ChainFactoryApi(endpoints)

  const denom = "coin.zig1020uljv3lamnhlgvetx5tq5gtjl6p7ggvepdeep2fjul6u0pevzsjz270a.neon"
  const denom_admin = "zig1020uljv3lamnhlgvetx5tq5gtjl6p7ggvepdeep2fjul6u0pevzsjz270a"

//   console.log('\n📦 Factory Params')
//   console.log(await factoryApi.fetchParams())

//   console.log('\n👤 Denoms by Admin')
//   console.log(await factoryApi.fetchDenomsByAdmin(denom_admin))

//   console.log('\n🏷 Show Denom')
//   console.log(await factoryApi.fetchDenom(denom))

  console.log('\n🔐 Denom Auth')
  console.log(await factoryApi.fetchDenomAuth(denom))


}

main()
