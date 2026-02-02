import { HttpClient } from '../client/http.js';
export class ChainSlashingApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query slashing params
     */
    async fetchParams() {
        const data = await this.client.get('/cosmos/slashing/v1beta1/params');
        return data;
    }
    /**
     * zigchaind query slashing signing-info <valcons-address>
     */
    async fetchSigningInfo(valConsAddress) {
        const data = await this.client.get(`/cosmos/slashing/v1beta1/signing_infos/${valConsAddress}`);
        return data;
    }
    /**
     * zigchaind query slashing signing-infos
     */
    async fetchSigningInfos() {
        const data = await this.client.get('/cosmos/slashing/v1beta1/signing_infos');
        return data;
    }
}
//# sourceMappingURL=ChainSlashingApi.js.map