import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { DelegationResponse, DelegationsResponse, DelegatorValidatorResponse, DelegatorValidatorsResponse } from './types.js';
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
    /**
     * zigchaind query staking delegator-validator
     * Query validator info for given delegator validator pair
     */
    fetchDelegatorValidator(delegatorAddress: string, validatorAddress: string): Promise<DelegatorValidatorResponse>;
    /**
     * zigchaind query staking delegator-validators
     * Query all validators info for given delegator address
     */
    fetchDelegatorValidators(delegatorAddress: string): Promise<DelegatorValidatorsResponse>;
}
//# sourceMappingURL=ChainStakingApi.d.ts.map