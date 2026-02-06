// src/distribution/ChainDistributionApi.ts

import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  ValidatorCommissionResponse,
  CommunityPoolResponse,
  DelegatorValidators,
  DelegatorWithdrawAddressResponse,
  DistributionParamsResponse,
  DelegatorRewardsResponse,
  DelegatorRewardsByValidatorResponse,
  ValidatorSlashesResponse,
  ValidatorDistributionInfoResponse,
  ValidatorOutstandingRewardsResponse
} from './types.js'

export class ChainDistributionApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query distribution commission <validator>
   */
  async fetchValidatorCommission(validator: string) {
    const data = await this.client.get<ValidatorCommissionResponse>(
      `/cosmos/distribution/v1beta1/validators/${validator}/commission`
    )

    return data
  }

  /**
   * zigchaind query distribution community-pool
   */
  async fetchCommunityPool() {
    const data = await this.client.get<CommunityPoolResponse>(
      '/cosmos/distribution/v1beta1/community_pool'
    )

    return data
  }

  /**
   * zigchaind query distribution delegator-validators <delegator>
   */
  async fetchDelegatorValidators(delegator: string) {
    const data = await this.client.get<DelegatorValidators>(
      `/cosmos/distribution/v1beta1/delegators/${delegator}/validators`
    )

    return data
  }

  /**
   * zigchaind query distribution delegator-withdraw-address <delegator>
   */
  async fetchDelegatorWithdrawAddress(delegator: string) {
    const data = await this.client.get<DelegatorWithdrawAddressResponse>(
      `/cosmos/distribution/v1beta1/delegators/${delegator}/withdraw_address`
    )

    return data
  }

  /**
   * zigchaind query distribution params
   */
  async fetchParams() {
    const data = await this.client.get<DistributionParamsResponse>(
      '/cosmos/distribution/v1beta1/params'
    )

    return data
  }

//==========================
  /**
   * zigchaind query distribution rewards <delegator-address>
   */
  async fetchDelegatorRewards(delegator: string) {
    return this.client.get<DelegatorRewardsResponse>(
      `/cosmos/distribution/v1beta1/delegators/${delegator}/rewards`
    )
  }

  /**
   * zigchaind query distribution rewards-by-validator
   */
  async fetchDelegatorRewardsByValidator(
    delegator: string,
    validator: string
  ) {
    return this.client.get<DelegatorRewardsByValidatorResponse>(
      `/cosmos/distribution/v1beta1/delegators/${delegator}/rewards/${validator}`
    )
  }

  /**
   * zigchaind query distribution slashes <validator-address>
   */
  async fetchValidatorSlashes(validator: string) {
    return this.client.get<ValidatorSlashesResponse>(
      `/cosmos/distribution/v1beta1/validators/${validator}/slashes`
    )
  }

  /**
   * zigchaind query distribution validator-distribution-info <validator-address>
   */
  async fetchValidatorDistributionInfo(validator: string) {
    return this.client.get<ValidatorDistributionInfoResponse>(
      `/cosmos/distribution/v1beta1/validators/${validator}`
    )
  }

  /**
   * zigchaind query distribution validator-outstanding-rewards <validator-address>
   */
  async fetchValidatorOutstandingRewards(validator: string) {
    return this.client.get<ValidatorOutstandingRewardsResponse>(
      `/cosmos/distribution/v1beta1/validators/${validator}/outstanding_rewards`
    )
  }

}
