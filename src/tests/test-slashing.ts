import {
  ChainSlashingApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  
    const endpoints = getNetworkEndpoints(Network.Testnet)
    const slashingApi = new ChainSlashingApi(endpoints)

    console.log('--- Slashing Params ---')
    const params = await slashingApi.fetchParams()
    console.dir(params, { depth: null })

    console.log('\n--- All Signing Infos ---')
    const infos = await slashingApi.fetchSigningInfos()
    console.log('Total validators:', infos)

   
    console.log('\n--- Single signing info ---')
    const singleInfo = await slashingApi.fetchSigningInfo(
      'zigvalcons1qd9g9rwjmgs7k02w65t2hlekc39vnqsq0ajs47'
    )
    console.dir(singleInfo, { depth: null })
    
 
}

main()
