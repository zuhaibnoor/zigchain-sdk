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
