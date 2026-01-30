import {
    ChainCircuitApi,
    getNetworkEndpoints,
    Network
} from "../../dist/index.js"

async function main(){

    const endpoints = getNetworkEndpoints(Network.Testnet)
    const circuitApi = new ChainCircuitApi(endpoints)

    const address = 'zig15yk64u7zc9g9k2yr2wmzeva5qgwxps6y8c2amk'

    console.log('--- Circuit account permissions ---')
    const account = await circuitApi.getAccountPermissions(address);
    console.dir(account, { depth: null })

    console.log('\n--- All circuit accounts ---')
    const accounts = await circuitApi.getAllAccountPermissions()
    console.dir(accounts, { depth: null })

    // console.log('\n--- Disabled messages ---')
    // const disabled = await circuitApi.getDisabledMessages()
    // console.log('Disabled messages via RPC:')
    // console.dir(disabled, { depth: null })

}

main()

