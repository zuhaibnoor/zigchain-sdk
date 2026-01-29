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
     * queries account info which is common to all account types
     */
    async fetchAccountInfo(address) {
        const data = await this.client.get(`/cosmos/auth/v1beta1/account_info/${address}`);
        return data.info;
    }
}
//# sourceMappingURL=ChainAuthApi.js.map