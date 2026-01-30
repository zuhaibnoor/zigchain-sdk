import type { NetworkEndpoints } from '../networks/endpoints.js';
import type { AuthParamsResponse, Bech32PrefixResponse, ModuleAccountResponse, ModuleAccountsResponse } from './types.js';
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
     * queries account info which is common to all account types and this info can be used for signing the transactions
     */
    fetchAccountInfo(address: string): Promise<{
        address: string;
        pub_key: any | null;
        account_number: string;
        sequence: string;
    }>;
    /**
   * zigchaind query auth address-by-acc-num <account_number>
   */
    fetchBech32Prefix(): Promise<Bech32PrefixResponse>;
    fetchAccountsByModule(moduleName: string): Promise<ModuleAccountResponse>;
    fetchModuleAccounts(): Promise<ModuleAccountsResponse>;
    fetchAuthParams(height?: number): Promise<AuthParamsResponse>;
}
//# sourceMappingURL=ChainAuthApi.d.ts.map