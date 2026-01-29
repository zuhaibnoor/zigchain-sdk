import type { NetworkEndpoints } from '../networks/endpoints.js';
export declare class ChainAuthApi {
    private client;
    constructor(endpoints: NetworkEndpoints);
    /**
     * zigchaind query auth account <address>
     */
    fetchAccount(address: string): Promise<{
        [key: string]: any;
        '@type': string;
        base_account?: import("./types.js").BaseAccount;
    }>;
    /**
     * zigchaind query auth account-info <address>
     * queries account info which is common to all account types
     */
    fetchAccountInfo(address: string): Promise<{
        address: string;
        pub_key: any | null;
        account_number: string;
        sequence: string;
    }>;
}
//# sourceMappingURL=ChainAuthApi.d.ts.map