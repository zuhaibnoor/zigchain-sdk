import {
  ChainStakingApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  
    const endpoints = getNetworkEndpoints(Network.Testnet)
    const stakingApi = new ChainStakingApi(endpoints)

    // Replace with a real delegator address
    const delegator = 'zig1q8uh4ytf632jqykrd4m0weuzq9uv4r4jzra9h6'
    const validator = 'zigvaloper1q8uh4ytf632jqykrd4m0weuzq9uv4r4jhy3rkr'

    // console.log('--- Delegations ---')
    // const delegations = await stakingApi.fetchDelegations(delegator)
    // console.dir(delegations, { depth: null })

    // console.log('\n--- Single Delegation ---')
    // const delegation = await stakingApi.fetchDelegation(delegator, validator)
    // console.dir(delegation, { depth: null })
    
    // console.log('\n--- Validator\'s delegations')
    // const val_delegations = await stakingApi.fetchValidatorDelegations(validator)
    // console.dir(val_delegations, {depth: null})

    // console.log('\n--- Validator info for given delegator validator pair ---')
    // const delegatorValidator = await stakingApi.fetchDelegatorValidator(
    // delegator,
    // validator)
    // console.dir(delegatorValidator, { depth: null })

    // console.log('\n--- All validators info for given delegator address ---')
    // const delegatorValidators = await stakingApi.fetchDelegatorValidators(delegator)
    // console.dir(delegatorValidators, { depth: null })
  
    console.log('\n--- Staking Params ---')
    const params = await stakingApi.fetchStakingParams()
    console.dir(params, { depth: null })

    console.log('\n--- Staking Pool ---')
    const pool = await stakingApi.fetchStakingPool()
    console.dir(pool, { depth: null })

    console.log('\n--- Historical Info ---')
    const hist = await stakingApi.fetchHistoricalInfo(4328141)
    console.dir(hist, { depth: null })


}

main()
