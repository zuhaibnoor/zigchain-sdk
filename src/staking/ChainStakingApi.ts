import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  DelegationResponse,
  DelegationsResponse
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

}
