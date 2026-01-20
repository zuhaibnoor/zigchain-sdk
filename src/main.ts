// src/main.ts

import { Consensus } from "./consensus/consensus"; // lowercase folder + .js required for ES modules
import fetch from "node-fetch";

// Make fetch global (Node.js)
(globalThis as any).fetch = fetch;

async function main() {
  const client = {
    get: async (path: string) => {
      const baseUrl = "https://public-zigchain-testnet-rpc.numia.xyz";
      const url = baseUrl + path;

      const res = await fetch(url);
      const text = await res.text();

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText} when fetching ${url}: ${text}`);
      }

      try {
        return JSON.parse(text);
      } catch (err: any) {
        throw new Error(`Failed to parse JSON from ${url}: ${err.message}. Response body: ${text}`);
      }
    }
  };

  const consensus = new Consensus(client);

  try {
    const params = await consensus.getParams();
    console.log("Consensus Params:", JSON.stringify(params, null, 2));
  } catch (err) {
    console.error("Error fetching consensus params:", err);
  }
}

main();
