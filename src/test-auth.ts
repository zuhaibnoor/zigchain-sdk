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
  const account = await authApi.fetchAccount(address)
  console.log('Account:')
  console.dir(account, { depth: null })

  // Fetch account info
  const info = await authApi.fetchAccountInfo(address)
  console.log('Account Info:')
  console.dir(info, { depth: null })


  //===============NOT WORKING=========================
//   //  Address by account number
//   const addr = await authApi.fetchAddressByAccountNumber('138553')
//   console.log('Address from account number:', addr)
//===============NOT WORKING=========================


//   Address bytes → string
  const addrFromBytes = await authApi.fetchAddressFromBytes(
    '0A14A3C4...' 
  )
  console.log('Address from bytes:', addrFromBytes)

  


}

 


main().catch(console.error)
