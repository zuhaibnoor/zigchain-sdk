import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { ValidatorCommissionResponse, CommunityPoolResponse, DelegatorValidators, DelegatorWithdrawAddressResponse, DistributionParamsResponse, DelegatorRewardsResponse, DelegatorRewardsByValidatorResponse, ValidatorSlashesResponse, ValidatorDistributionInfoResponse, ValidatorOutstandingRewardsResponse } from './types.js';
export declare class ChainDistributionApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query distribution commission <validator>
     */
    fetchValidatorCommission(validator: string): Promise<ValidatorCommissionResponse>;
    /**
     * zigchaind query distribution community-pool
     */
    fetchCommunityPool(): Promise<CommunityPoolResponse>;
    /**
     * zigchaind query distribution delegator-validators <delegator>
     */
    fetchDelegatorValidators(delegator: string): Promise<DelegatorValidators>;
    /**
     * zigchaind query distribution delegator-withdraw-address <delegator>
     */
    fetchDelegatorWithdrawAddress(delegator: string): Promise<DelegatorWithdrawAddressResponse>;
    /**
     * zigchaind query distribution params
     */
    fetchParams(): Promise<DistributionParamsResponse>;
    /**
     * zigchaind query distribution rewards <delegator-address>
     */
    fetchDelegatorRewards(delegator: string): Promise<DelegatorRewardsResponse>;
    /**
     * zigchaind query distribution rewards-by-validator
     */
    fetchDelegatorRewardsByValidator(delegator: string, validator: string): Promise<DelegatorRewardsByValidatorResponse>;
    /**
     * zigchaind query distribution slashes <validator-address>
     */
    fetchValidatorSlashes(validator: string): Promise<ValidatorSlashesResponse>;
    /**
     * zigchaind query distribution validator-distribution-info <validator-address>
     */
    fetchValidatorDistributionInfo(validator: string): Promise<ValidatorDistributionInfoResponse>;
    /**
     * zigchaind query distribution validator-outstanding-rewards <validator-address>
     */
    fetchValidatorOutstandingRewards(validator: string): Promise<ValidatorOutstandingRewardsResponse>;
}
//# sourceMappingURL=ChainDistributionApi.d.ts.map