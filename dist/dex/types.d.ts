export interface DexPoolResponse {
    pool: {
        address: string;
        coins: [
            {
                amount: string;
                denom: string;
            }
        ];
        creator: string;
        fee: string;
        formula: string;
        lp_token: {
            amount: string;
            denom: string;
        };
        pool_id: string;
    };
}
export interface DexPoolBalancesResponse {
    balances: [
        {
            amount: string;
            denom: string;
        }
    ];
    pool: {
        address: string;
        coins: [
            {
                amount: string;
                denom: string;
            }
        ];
        creator: string;
        fee: string;
        formula: string;
        lp_token: {
            amount: string;
            denom: string;
        };
        pool_id: string;
    };
}
export interface poolUidResponse {
    pool_uids: {
        pool_id: string;
        pool_uid: string;
    };
}
export interface DexParamsResponse {
    params: {
        new_pool_fee_pct: string;
        creation_fee: string;
        beneficiary: string;
        minimal_liquidity_lock: string;
        max_slippage: string;
    };
}
//# sourceMappingURL=types.d.ts.map