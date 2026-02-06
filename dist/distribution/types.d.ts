export interface ValidatorCommissionResponse {
    commission: {
        commission: Array<{
            denom: string;
            amount: string;
        }>;
    };
}
export interface CommunityPoolResponse {
    pool: Array<{
        denom: string;
        amount: string;
    }>;
}
export interface DelegatorValidators {
    validators: string[];
}
export interface DelegatorWithdrawAddressResponse {
    withdraw_address: string;
}
export interface DistributionParamsResponse {
    params: {
        community_tax: string;
        base_proposer_reward: string;
        bonus_proposer_reward: string;
        withdraw_addr_enabled: boolean;
    };
}
//# sourceMappingURL=types.d.ts.map