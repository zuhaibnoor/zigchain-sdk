import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { DelegationResponse, DelegationsResponse, DelegationsToResponse, DelegatorValidatorResponse, DelegatorValidatorsResponse, HistoricalInfoResponse, StakingParamsResponse, StakingPoolResponse, RedelegationResponse, UnbondingDelegationResponse, UnbondingDelegationsResponse, UnbondingFromValidatorResponse, ValidatorResponse, ValidatorsResponse } from './types.js';
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
    fetchValidatorDelegations(validator_addr: string): Promise<DelegationsToResponse>;
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
    /**
     * zigchaind query staking historical-info
     */
    fetchHistoricalInfo(height: number | string): Promise<HistoricalInfoResponse>;
    /**
     * zigchaind query staking params
     */
    fetchStakingParams(): Promise<StakingParamsResponse>;
    /**
     * zigchaind query staking pool
     */
    fetchStakingPool(): Promise<StakingPoolResponse>;
    /**
     * zigchaind query staking redelegation
    */
    fetchRedelegation(delegator_addr: string): Promise<RedelegationResponse>;
    /**
     * zigchaind query staking unbonding-delegation
     */
    fetchUnbondingDelegation(delegator: string, validator: string): Promise<UnbondingDelegationResponse>;
    /**
     * zigchaind query staking unbonding-delegations
     */
    fetchUnbondingDelegations(delegator: string): Promise<UnbondingDelegationsResponse>;
    /**
    * zigchaind query staking unbonding-delegations-from
    */
    fetchUnbondingDelegationsFrom(validator: string): Promise<UnbondingFromValidatorResponse>;
    /**
     * zigchaind query staking validator
     */
    fetchValidator(validator: string): Promise<ValidatorResponse>;
    /**
     * zigchaind query staking validators
     */
    fetchValidators(): Promise<ValidatorsResponse>;
}
//# sourceMappingURL=ChainStakingApi.d.ts.map