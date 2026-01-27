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

    console.log('--- Dex Pool Balances ---')
    const poolBalances = await dexApi.fetchPoolBalances('zp23')
    console.dir(poolBalances, { depth: null })
}

main()