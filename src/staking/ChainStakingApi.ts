import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  DelegationResponse,
  DelegationsResponse,
  DelegationsToResponse,
  DelegatorValidatorResponse,
  DelegatorValidatorsResponse,
  HistoricalInfoResponse,
  StakingParamsResponse,
  StakingPoolResponse,
  RedelegationResponse,
  UnbondingDelegationResponse,
  UnbondingDelegationsResponse,
  UnbondingFromValidatorResponse,
  ValidatorResponse,
  ValidatorsResponse

} from './types.js'

export class ChainStakingApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query staking delegation
   */
  async fetchDelegation(
    delegatorAddress: string,
    validatorAddress: string
  ) {
    const data = await this.client.get<{ delegation_response: DelegationResponse }>(
      `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators/${validatorAddress}`
    )

    return data
  }

  /**
   * zigchaind query staking delegations
   */
  async fetchDelegations(delegatorAddress: string) {
    const data = await this.client.get<DelegationsResponse>(
      `/cosmos/staking/v1beta1/delegations/${delegatorAddress}`
    )

    return data
  }

  async fetchValidatorDelegations(validator_addr: string){
    const data = await this.client.get<DelegationsToResponse>(
      `/cosmos/staking/v1beta1/validators/${validator_addr}/delegations`
    )
    return data
  }


  /**
   * zigchaind query staking delegator-validator
   * Query validator info for given delegator validator pair
   */
  async fetchDelegatorValidator(
    delegatorAddress: string,
    validatorAddress: string
  ) {
    const data = await this.client.get<DelegatorValidatorResponse>(
      `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators/${validatorAddress}`
    )

    return data
  }

  /**
   * zigchaind query staking delegator-validators
   * Query all validators info for given delegator address
   */
  async fetchDelegatorValidators(delegatorAddress: string) {
    const data = await this.client.get<DelegatorValidatorsResponse>(
      `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators`
    )

    return data
  }

  /**
   * zigchaind query staking historical-info
   */
  async fetchHistoricalInfo(height: number | string) {
    const data = await this.client.get<HistoricalInfoResponse>(
      `/cosmos/staking/v1beta1/historical_info/${height}`
    )

    return data
  }

  /**
   * zigchaind query staking params
   */
  async fetchStakingParams() {
    const data = await this.client.get<StakingParamsResponse>(
      '/cosmos/staking/v1beta1/params'
    )

    return data
  }

  /**
   * zigchaind query staking pool
   */
  async fetchStakingPool() {
    const data = await this.client.get<StakingPoolResponse>(
      '/cosmos/staking/v1beta1/pool'
    )

    return data
  }
  
  /**
   * zigchaind query staking redelegation
  */
  async fetchRedelegation(
    delegator_addr: string,
  ) {
    const data = await this.client.get<RedelegationResponse>(
      `/cosmos/staking/v1beta1/delegators/${delegator_addr}/redelegations`
    )
    return data
  }

  /**
   * zigchaind query staking unbonding-delegation
   */
  async fetchUnbondingDelegation(
    delegator: string,
    validator: string
  ) {
    const data = await this.client.get<UnbondingDelegationResponse>(
      `/cosmos/staking/v1beta1/validators/${validator}/delegations/${delegator}/unbonding_delegation`
    )

    return data
  }

  /**
   * zigchaind query staking unbonding-delegations
   */
  async fetchUnbondingDelegations(delegator: string) {
    const data = await this.client.get<UnbondingDelegationsResponse>(
      `/cosmos/staking/v1beta1/validators/${delegator}/unbonding_delegations`
    )

    return data
  }

   /**
   * zigchaind query staking unbonding-delegations-from
   */
  async fetchUnbondingDelegationsFrom(validator: string) {
    const data = await this.client.get<UnbondingFromValidatorResponse>(
      `/cosmos/staking/v1beta1/validators/${validator}/delegations/unbonding`
    )

    return data
  }

  /**
   * zigchaind query staking validator
   */
  async fetchValidator(validator: string) {
    const data = await this.client.get<ValidatorResponse>(
      `/cosmos/staking/v1beta1/validators/${validator}`
    )

    return data
  }

  /**
   * zigchaind query staking validators
   */
  async fetchValidators() {
    const data = await this.client.get<ValidatorsResponse>(
      '/cosmos/staking/v1beta1/validators'
    )

    return data
  }

}
