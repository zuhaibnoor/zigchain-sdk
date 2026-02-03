import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  DelegationResponse,
  DelegationsResponse,
  DelegationsToResponse,
  DelegatorValidatorResponse,
  DelegatorValidatorsResponse
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
    const data = await this.client.get(
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

  

}
