import { HttpClient } from '../client/http.js'
import type { NetworkEndpoints } from '../networks/endpoints.js'
import type {
  EvidenceResponse,
  EvidencesResponse
} from './types.js'

export class ChainEvidenceApi {
  private client: HttpClient

  constructor(endpoints: NetworkEndpoints) {
    this.client = new HttpClient(endpoints.lcd)
  }

  /**
   * zigchaind query evidence evidence <hash>
   */
  async fetchEvidence(hash: string) {
    const data = await this.client.get<EvidenceResponse>(
      `/cosmos/evidence/v1beta1/evidence/${hash}`
    )

    return data
  }

  /**
   * zigchaind query evidence list
   */
  async fetchAllEvidence() {
    const data = await this.client.get<EvidencesResponse>(
      '/cosmos/evidence/v1beta1/evidence'
    )

    return data
  }
}
