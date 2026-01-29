// src/test-auth.ts

import {
  ChainAuthApi,
  getNetworkEndpoints,
  Network
} from '../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const authApi = new ChainAuthApi(endpoints)

  const address = 'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5' // replace with real address

  // 1️⃣ Fetch account
  const account = await authApi.fetchAccount(address)
  console.log('Account:')
  console.dir(account, { depth: null })

  // 2️⃣ Fetch account info
  const info = await authApi.fetchAccountInfo(address)
  console.log('Account Info:')
  console.dir(info, { depth: null })

 
}

main().catch(console.error)
