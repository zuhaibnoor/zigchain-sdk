export interface Coin {
    denom: string;
    amount: string;
}
export interface BalanceResponse {
    balance: Coin;
}
export interface BalancesResponse {
    balances: Coin[];
    pagination?: {
        next_key: string | null;
        total: string;
    };
}
export interface TotalSupplyResponse {
    supply: Coin[];
}
export interface SupplyOfResponse {
    amount: Coin;
}
export interface DenomMetadata {
    description: string;
    denom_units: {
        denom: string;
        exponent: number;
        aliases?: string[];
    }[];
    base: string;
    display: string;
    name: string;
    symbol: string;
}
export interface DenomMetadataResponse {
    metadata: DenomMetadata;
}
export interface DenomsMetadataResponse {
    metadatas: DenomMetadata[];
}
export interface DenomOwnersResponse {
    denom_owners: {
        address: string;
        balance: Coin;
    }[];
}
//# sourceMappingURL=types.d.ts.map