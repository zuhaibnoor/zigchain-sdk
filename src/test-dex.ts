import {
    Network,
    getNetworkEndpoints,
    ChainDexApi
} from '../dist/index.js'

async function main(){
    const endpoints = getNetworkEndpoints(Network.Testnet)
    const dexApi = new ChainDexApi(endpoints)

    // console.log('--- Dex Pool ---')
    // const pool = await dexApi.fetchPool('zp23')
    // console.dir(pool, { depth: null })

    // console.log('--- Dex Pool Balances ---')
    // const poolBalances = await dexApi.fetchPoolBalances('zp23')
    // console.dir(poolBalances, { depth: null })
    
    console.log('--- Dex Pool uids ---')
    const poolBalances = await dexApi.fetchPoolUids('coin.zig12jzwc0a3pyv4dze0t252qkwf77t4vs5rqfn3zc.panda','uzig')
    console.dir(poolBalances, { depth: null })

    console.log('\n--- Dex params ---')
    const params = await dexApi.fetchParams()
    console.dir(params, { depth: null })
}   

main()