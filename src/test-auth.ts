import { DEFAULT_CIPHERS } from 'node:tls';
import {
  ChainAuthApi,
  getNetworkEndpoints,
  Network
} from '../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const authApi = new ChainAuthApi(endpoints)

  const address = 'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5' // replace with real address

  // Fetch account
  // const account = await authApi.fetchAccount(address)
  // console.log('Account:')
  // console.dir(account, { depth: null })

  // Fetch account info
  // const info = await authApi.fetchAccountInfo(address)
  // console.log('Account Info:')
  // console.dir(info, { depth: null })


//===============NOT IMPLEMENTED=============================================
// ||  //  Address by account number                                      ||
// ||  const addr = await authApi.fetchAddressByAccountNumber('138553')   ||
// ||  console.log('Address from account number:', addr)                  ||
// ||                                                                     ||
// ||                                                                     ||
// ||                                                                     ||  
// ||//   Address bytes → string                                          ||
// ||  const addrFromBytes = await authApi.fetchAddressFromBytes(         ||
// ||    '0A14A3C4...'                                                    ||  
// ||  )                                                                  ||
// ||  console.log('Address from bytes:', addrFromBytes)                  ||
// ||                                                                     ||
// ||   console.log('\n🔹 Address String → Bytes')                        ||
// ||   console.log(                                                      ||  
// ||   await authApi.fetchAddressBytes(                                  ||  
// ||   'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5'                      ||
// ||   )                                                                 ||  
//===============NOT IMPLEMENTED=============================================

  //fetch bech32 prefix
  // const prefix = await authApi.fetchBech32Prefix();
  // console.log("Bech32 prefix")
  // console.dir(prefix, {depth: null})

  //fetch module accounts
  // const modAccounts = await authApi.fetchModuleAccounts()
  // console.log("Module Accounts: ")
  // console.dir(modAccounts, {depth: null})

  //fetch module account by giving module name
  const module = 'gov'
  const modAccountbyAccName = await authApi.fetchAccountsByModule('gov')
  console.log(`Accounts for module "${module}"`)
  console.dir(modAccountbyAccName, {depth:null})

  //fetch auth module parameters
  const params = await authApi.fetchAuthParams()
  console.log("Auth Params")
  console.dir(params,{depth:null})

} 


main().catch(console.error)
