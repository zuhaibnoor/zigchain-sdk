import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { DelegationResponse, DelegationsResponse } from './types.js';
export declare class ChainStakingApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query staking delegation
     */
    fetchDelegation(delegatorAddress: string, validatorAddress: string): Promise<{
        delegation_response: DelegationResponse;
    }>;
    /**
     * zigchaind query staking delegations
     */
    fetchDelegations(delegatorAddress: string): Promise<DelegationsResponse>;
    fetchValidatorDelegations(validator_addr: string): Promise<unknown>;
}
//# sourceMappingURL=ChainStakingApi.d.ts.map