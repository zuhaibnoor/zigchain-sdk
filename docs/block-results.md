# Block Results

The **ChainBlockResultsApi** lets you query the **execution results of a committed block**.
It includes transaction logs, events, fees, and validator execution results.

---

## Setup

```ts
import {
  ChainBlockResultsApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const blockResultsApi = new ChainBlockResultsApi(endpoints)
```

---

## `fetchBlockResults`

Fetch the **execution results of a block at a specific height**.

**CLI equivalent**

```bash
zigchaind query block-results <height>
```

**Method**

```ts
fetchBlockResults(height: number)
```

**Parameters**

* `height: number` – The block height to query.

**Returns**

* `BlockResultsResponse` – Contains transaction results, logs, events, and validator execution info.

**Example**

```ts
const height = 12345
const results = await blockResultsApi.fetchBlockResults(height)
console.log(`Block Results at height ${height}:`)
console.dir(results, { depth: null })
```

---

## Notes

* Only works with **RPC endpoints** (`endpoints.rpc`), LCD endpoints cannot be used.
* Useful for analyzing **transaction success/failure**, events emitted, and validator execution info.
* Querying non-existent or pruned heights may return errors.

---
