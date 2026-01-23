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
export interface SendEnabled {
    denom: string;
    enabled: boolean;
}
export interface SendEnabledResponse {
    send_enabled: SendEnabled[];
}
export interface SpendableBalanceResponse {
    balance: Coin;
}
export interface SpendableBalancesResponse {
    balances: Coin[];
    pagination?: {
        next_key: string | null;
        total: string;
    };
}
export interface BankParams {
    send_enabled: {
        denom: string;
        enabled: boolean;
    }[];
    default_send_enabled: boolean;
}
export interface BankParamsResponse {
    params: BankParams;
}
//# sourceMappingURL=types.d.ts.map