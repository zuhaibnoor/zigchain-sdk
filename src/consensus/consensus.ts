// src/consensus.ts

type HttpClient = {
  get<T = any>(path: string): Promise<T>;
};

export class Consensus {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Fetch consensus parameters
   * Maps to: /cosmos/consensus/v1beta1/params
   */
  async getParams() {
    return this.client.get("/cosmos/consensus/v1beta1/params");
  }
}
