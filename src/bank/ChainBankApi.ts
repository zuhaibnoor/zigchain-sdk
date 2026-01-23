import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  BalanceResponse,
  BalancesResponse,
  TotalSupplyResponse,
  SupplyOfResponse,
  DenomMetadataResponse,
  DenomOwnersResponse,
  DenomsMetadataResponse,
  SendEnabledResponse,
  SpendableBalanceResponse,
  SpendableBalancesResponse,
  BankParamsResponse
} from './types.js'

export class ChainBankApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query bank balance <address> <denom>
   */
  async fetchBalance(address: string, denom: string) {
    const data = await this.client.get<BalanceResponse>(
    `/cosmos/bank/v1beta1/balances/${address}/by_denom?denom=${denom}`
  )

  return data
  }

  /**
   * zigchaind query bank balances <address>
   */
  async fetchBalances(address: string) {
    const data = await this.client.get<BalancesResponse>(
      `/cosmos/bank/v1beta1/balances/${address}`
    )

    return data
  }

  /**
   * zigchaind query bank total-supply
   */
  async fetchTotalSupply() {
    const data = await this.client.get<TotalSupplyResponse>(
      '/cosmos/bank/v1beta1/supply'
    )

    return data
  }

  /**
   * zigchaind query bank total-supply-of <denom>
   */
  async fetchSupplyOf(denom: string) {
    const data = await this.client.get<SupplyOfResponse>(
      `/cosmos/bank/v1beta1/supply/by_denom?denom=${denom}`
    )

    return data
  }

  //====
  /**
 * Fetch metadata for a specific denom
 * zigchaind query bank denom-metadata <denom>
 */
async fetchDenomMetadata(denom: string) {
  const data = await this.client.get<DenomMetadataResponse>(
    `/cosmos/bank/v1beta1/denoms_metadata/${denom}`
  )
  return data
}

/**
 * Query metadata by string (partial match)
 * zigchaind query bank denom-metadata-by-query-string <query>
 */
async queryDenomMetadataByQuery(query: string) {
  const data = await this.client.get<DenomsMetadataResponse>(
    `/cosmos/bank/v1beta1/denoms_metadata_by_query_string?denom=${query}`
  )
  return data
}

/**
 * Fetch all owners of a specific denom
 * zigchaind query bank denom-owners <denom>
 */
async fetchDenomOwners(denom: string) {
  const data = await this.client.get<DenomOwnersResponse>(
    `/cosmos/bank/v1beta1/denom_owners/${denom}`
  )
  return data
}

/**
 * Query denom owners by query string (partial match)
 * zigchaind query bank denom-owners-by-query <query>
 */
async queryDenomOwnersByQuery(query: string) {
  const data = await this.client.get<DenomOwnersResponse>(
    `/cosmos/bank/v1beta1/denom_owners_by_query?denom=${query}`
  )
  return data
}

/**
 * Fetch metadata for all registered coin denominations
 * zigchaind query bank denoms-metadata
 */
async fetchAllDenomsMetadata() {
  const data = await this.client.get<DenomsMetadataResponse>(
    `/cosmos/bank/v1beta1/denoms_metadata`
  )
  return data
}


//=======================================
/**
 * zigchaind query bank send-enabled
 */
async fetchSendEnabled() {
  const data = await this.client.get<SendEnabledResponse>(
    '/cosmos/bank/v1beta1/send_enabled'
  )

  return data
}

/**
 * zigchaind query bank spendable-balance <address> <denom>
 */
async fetchSpendableBalance(address: string, denom: string) {
  const data = await this.client.get<SpendableBalanceResponse>(
    `/cosmos/bank/v1beta1/spendable_balances/${address}/by_denom?denom=${denom}`
  )

  return data
}


//===========================================
/**
 * zigchaind query bank spendable-balances <address>
 */
async fetchSpendableBalances(address: string) {
  const data = await this.client.get<SpendableBalancesResponse>(
    `/cosmos/bank/v1beta1/spendable_balances/${address}`
  )

  return data
}

//=================================================

/**
 * zigchaind query bank params
 * zigchaind query bank params --height <H>
 */
async fetchParams() {
  
  const data = await this.client.get<BankParamsResponse>(
    '/cosmos/bank/v1beta1/params',
  )

  return data
}
//======================================================

}

