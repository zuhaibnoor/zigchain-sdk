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
//# sourceMappingURL=types.d.ts.map