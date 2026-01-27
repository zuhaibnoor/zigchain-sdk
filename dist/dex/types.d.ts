export interface DexPoolResponse {
    pool: {
        address: "string";
        coins: [
            {
                amount: "string";
                denom: "string";
            }
        ];
        creator: "string";
        fee: 0;
        formula: "string";
        lp_token: {
            amount: "string";
            denom: "string";
        };
        pool_id: "string";
    };
}
export interface DexPoolBalancesResponse {
    balances: [
        {
            amount: "string";
            denom: "string";
        }
    ];
    pool: {
        address: "string";
        coins: [
            {
                amount: "string";
                denom: "string";
            }
        ];
        creator: "string";
        fee: 0;
        formula: "string";
        lp_token: {
            amount: "string";
            denom: "string";
        };
        pool_id: "string";
    };
}
//# sourceMappingURL=types.d.ts.map