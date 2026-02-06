export interface ValidatorCommissionResponse {
  commission: {
    commission: Array<{
      denom: string
      amount: string
    }>
  }
}

export interface CommunityPoolResponse {
  pool: Array<{
    denom: string
    amount: string
  }>
}

export interface DelegatorValidators {
  validators: string[]
}

export interface DelegatorWithdrawAddressResponse {
  withdraw_address: string
}

export interface DistributionParamsResponse {
  params: {
    community_tax: string
    base_proposer_reward: string
    bonus_proposer_reward: string
    withdraw_addr_enabled: boolean
  }
}

// src/distribution/types.ts

export interface DelegatorRewardsResponse {
  rewards: Array<{
    validator_address: string
    reward: Array<{
      denom: string
      amount: string
    }>
  }>
  total: Array<{
    denom: string
    amount: string
  }>
}

export interface DelegatorRewardsByValidatorResponse {
  rewards: Array<{
    denom: string
    amount: string
  }>
}

export interface ValidatorSlashesResponse {
  slashes: Array<{
    validator_period: string
    fraction: string
  }>
}

export interface ValidatorDistributionInfoResponse {
  operator_address: string
  self_bond_rewards: Array<{
    denom: string
    amount: string
  }>
  commission: Array<{
    denom: string
    amount: string
  }>
}

export interface ValidatorOutstandingRewardsResponse {
  rewards: Array<{
    denom: string
    amount: string
  }>
}
