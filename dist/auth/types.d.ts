export interface BaseAccount {
    address: string;
    pub_key: any | null;
    account_number: string;
    sequence: string;
}
export interface AccountResponse {
    account: {
        '@type': string;
        base_account?: BaseAccount;
        [key: string]: any;
    };
}
export interface AccountInfoResponse {
    info: {
        address: string;
        pub_key: any | null;
        account_number: string;
        sequence: string;
    };
}
export interface AddressByAccountNumberResponse {
    address: string;
}
export interface AddressBytesToStringResponse {
    address: string;
}
export interface AuthParamsResponse {
    params: {
        max_memo_characters: string;
        tx_sig_limit: string;
        tx_size_cost_per_byte: string;
        sig_verify_cost_ed25519: string;
        sig_verify_cost_secp256k1: string;
    };
}
export interface Bech32PrefixResponse {
    bech32_prefix: string;
}
export interface AddressBytesResponse {
    address_bytes: string;
}
export interface ModuleAccountResponse {
    account: any;
}
export interface ModuleAccountsResponse {
    accounts: any[];
}
//# sourceMappingURL=types.d.ts.map