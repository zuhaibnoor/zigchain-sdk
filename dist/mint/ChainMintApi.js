import { HttpClient } from "../client/http.js";
export class ChainMintApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query mint inflation
     */
    async fetchInflation() {
        const data = await this.client.get('/cosmos/mint/v1beta1/inflation');
        return data;
    }
    /**
     * zigchaind query mint annual-provisions
     */
    async fetchAnnualProvisions() {
        const data = await this.client.get('/cosmos/mint/v1beta1/annual_provisions');
        return data;
    }
    /**
     * zigchaind query mint params
     */
    async fetchParams() {
        const data = await this.client.get('/cosmos/mint/v1beta1/params');
        return data;
    }
}
//# sourceMappingURL=ChainMintApi.js.map