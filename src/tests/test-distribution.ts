import {
  ChainDistributionApi,
  getNetworkEndpoints,
  Network
} from '../../dist/index.js'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const distributionApi = new ChainDistributionApi(endpoints)

  const delegator = 'zig1q8uh4ytf632jqykrd4m0weuzq9uv4r4jzra9h6'
  const validator2 = 'zigvaloper1pwwymlyeyfcz3pjvcegvz8tj3yf0pr3wqqhrwk'


//   console.log('--- Distribution Params ---')
//   const params = await distributionApi.fetchParams()
//   console.dir(params, { depth: null })

//   console.log('\n--- Community Pool ---')
//   const pool = await distributionApi.fetchCommunityPool()
//   console.dir(pool, { depth: null })

//   console.log('\n--- Delegator Validators ---')
//   const delegatorValidators =
//     await distributionApi.fetchDelegatorValidators(delegator)
//   console.dir(delegatorValidators, { depth: null })

//   console.log('\n--- Delegator Withdraw Address ---')
//   const withdrawAddr =
//     await distributionApi.fetchDelegatorWithdrawAddress(delegator)
//   console.dir(withdrawAddr, { depth: null })

//   console.log('\n--- Validator Commission ---')
//   const commission =
//     await distributionApi.fetchValidatorCommission(validator2)
//   console.dir(commission, { depth: null })

  //============================
    console.log('\n--- Delegator Rewards ---')
  const rewards = await distributionApi.fetchDelegatorRewards(delegator)
  console.dir(rewards, { depth: null })

  const validator_d = 'zigvaloper1q8uh4ytf632jqykrd4m0weuzq9uv4r4jhy3rkr'
  console.log('\n--- Delegator Rewards by Validator ---')
  const rewardsByVal =
    await distributionApi.fetchDelegatorRewardsByValidator(delegator, validator_d)
  console.dir(rewardsByVal, { depth: null })

  console.log('\n--- Validator Slashes ---')
  const slashes = await distributionApi.fetchValidatorSlashes(validator2)
  console.dir(slashes, { depth: null })

  console.log('\n--- Validator Distribution Info ---')
  const distInfo =
    await distributionApi.fetchValidatorDistributionInfo(validator2)
  console.dir(distInfo, { depth: null })

  console.log('\n--- Validator Outstanding Rewards ---')
  const outstanding =
    await distributionApi.fetchValidatorOutstandingRewards(validator2)
  console.dir(outstanding, { depth: null })

}

main()
