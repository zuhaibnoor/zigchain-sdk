export interface Coin {
  denom: string
  amount: string
}

export interface BalanceResponse {
  balance: Coin
}

export interface BalancesResponse {
  balances: Coin[]
  pagination?: {
    next_key: string | null
    total: string
  }
}

export interface TotalSupplyResponse {
  supply: Coin[]
}

export interface SupplyOfResponse {
  amount: Coin
}
