export interface Delegation {
  delegator_address: string
  validator_address: string
  shares: string
}

export interface Balance {
  denom: string
  amount: string
}

export interface DelegationResponse {
  delegation: Delegation
  balance: Balance
}

export interface DelegationsResponse {
  delegation_responses: DelegationResponse[]
}

export interface Validator {
  operator_address: string
  consensus_pubkey: {
    '@type': string
    key: string
  }
  jailed: boolean
  status: string
  tokens: string
  delegator_shares: string
  description: {
    moniker: string
    identity: string
    website: string
    security_contact: string
    details: string
  }
  commission: {
    commission_rates: {
      rate: string
      max_rate: string
      max_change_rate: string
    }
    update_time: string
  }
  min_self_delegation: string
}

export interface DelegationsToResponse {
  delegation_responses: DelegationResponse[]
}

export interface DelegatorValidatorResponse {
  validator: Validator
}

export interface DelegatorValidatorsResponse {
  validators: Validator[]
}

export interface HistoricalInfoResponse {
  hist: {
    header: {
      height: string
      time: string
      chain_id: string
    }
    valset: Validator[]
  }
}

export interface StakingParams {
  unbonding_time: string
  max_validators: number
  max_entries: number
  historical_entries: number
  bond_denom: string
}

export interface StakingParamsResponse {
  params: StakingParams
}

export interface StakingPool {
  not_bonded_tokens: string
  bonded_tokens: string
}

export interface StakingPoolResponse {
  pool: StakingPool
}

export interface RedelegationEntry {
  creation_height: string
  completion_time: string
  initial_balance: string
  shares_dst: string
}

export interface Redelegation {
  delegator_address: string
  validator_src_address: string
  validator_dst_address: string
  entries: RedelegationEntry[]
}

export interface RedelegationResponse {
  redelegation_responses: Redelegation[]
}

export interface UnbondingEntry {
  creation_height: string
  completion_time: string
  initial_balance: string
  balance: string
}

export interface UnbondingDelegation {
  delegator_address: string
  validator_address: string
  entries: UnbondingEntry[]
}

export interface UnbondingDelegationResponse {
  unbond: UnbondingDelegation
}

export interface UnbondingDelegationsResponse {
  unbonding_responses: UnbondingDelegation[]
}

export interface ValidatorDescription {
  moniker: string
  identity: string
  website: string
  security_contact: string
  details: string
}

export interface ValidatorCommission {
  commission_rates: {
    rate: string
    max_rate: string
    max_change_rate: string
  }
  update_time: string
}

export interface Validator {
  operator_address: string
  consensus_pubkey: {
    '@type': string
    key: string
  }
  jailed: boolean
  status: string
  tokens: string
  delegator_shares: string
  description: ValidatorDescription
  commission: ValidatorCommission
  min_self_delegation: string
}

export interface ValidatorResponse {
  validator: Validator
}

export interface ValidatorsResponse {
  validators: Validator[]
}

export interface UnbondingFromValidatorResponse {
  unbonding_responses: {
    delegator_address: string
    validator_address: string
    entries: {
      creation_height: string
      completion_time: string
      initial_balance: string
      balance: string
    }[]
  }[]
}
