import { HttpClient } from '../client/http.js';
export class ChainEvidenceApi {
    client;
    constructor(endpoints) {
        this.client = new HttpClient(endpoints.lcd);
    }
    /**
     * zigchaind query evidence evidence <hash>
     */
    async fetchEvidence(hash) {
        const data = await this.client.get(`/cosmos/evidence/v1beta1/evidence/${hash}`);
        return data;
    }
    /**
     * zigchaind query evidence list
     */
    async fetchAllEvidence() {
        const data = await this.client.get('/cosmos/evidence/v1beta1/evidence');
        return data;
    }
}
//# sourceMappingURL=ChainEvidenceApi.js.map