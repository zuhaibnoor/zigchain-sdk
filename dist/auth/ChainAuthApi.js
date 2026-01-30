import { HttpClient } from '../client/http.js';
export class ChainAuthApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query auth account <address>
     */
    async fetchAccount(address) {
        const data = await this.client.get(`/cosmos/auth/v1beta1/accounts/${address}`);
        return data.account;
    }
    /**
     * zigchaind query auth account-info <address>
     * queries account info which is common to all account types and this info can be used for signing the transactions
     */
    async fetchAccountInfo(address) {
        const data = await this.client.get(`/cosmos/auth/v1beta1/account_info/${address}`);
        return data.info;
    }
    //======================== API NOT WORKING=======================================
    /**
   * zigchaind query auth address-by-acc-num <account_number>
   */
    // async fetchAddressByAccountNumber(accountNumber: string | number) {
    // const data = await this.client.get<AddressByAccountNumberResponse>(
    //     `/cosmos/auth/v1beta1/address_by_id?account_id=${accountNumber}`
    // )
    // return data.address
    // }
    //   /**
    //    * zigchaind query auth address-bytes-to-string <address_bytes>
    //    */
    //   async fetchAddressFromBytes(addressBytes: string) {
    //   const data = await this.client.get<AddressBytesToStringResponse>(
    //       `/cosmos/auth/v1beta1/address_bytes_to_string/${addressBytes}`
    //   )
    //   return data.address
    //   }
    //   // 1️⃣ address-string-to-bytes
    // async fetchAddressBytes(address: string) {
    //   return this.client.get<AddressBytesResponse>(
    //     `/cosmos/auth/v1beta1/address_bytes/${address}`
    //   )
    // }
    //======================== API NOT WORKING=======================================================
    // 2️⃣ bech32-prefix
    async fetchBech32Prefix() {
        return this.client.get(`/cosmos/auth/v1beta1/bech32`);
    }
    // 3️⃣ module-account
    async fetchAccountsByModule(moduleName) {
        return this.client.get(`/cosmos/auth/v1beta1/module_accounts/${moduleName}`);
    }
    // 4️⃣ module-accounts
    async fetchModuleAccounts() {
        return this.client.get(`/cosmos/auth/v1beta1/module_accounts`);
    }
    // 5️⃣ params (supports --height)
    async fetchAuthParams(height) {
        const headers = height
            ? { 'x-cosmos-block-height': height.toString() }
            : undefined;
        return this.client.get(`/cosmos/auth/v1beta1/params`, headers);
    }
}
//# sourceMappingURL=ChainAuthApi.js.map