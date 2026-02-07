import { HttpClient } from '../client/http.js';
export class ChainTokenWrapperApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query tokenwrapper module-info
     */
    async fetchModuleInfo() {
        return this.client.get('/zigchain/tokenwrapper/module_info');
    }
    /**
     * zigchaind query tokenwrapper params
     */
    async fetchParams() {
        return this.client.get('/zigchain/tokenwrapper/params');
    }
    /**
     * zigchaind query tokenwrapper total-transfers
     */
    async fetchTotalTransfers() {
        return this.client.get('/zigchain/tokenwrapper/total_transfers');
    }
}
//# sourceMappingURL=ChainTokenWrapperApi.js.map