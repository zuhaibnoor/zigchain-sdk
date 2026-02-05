# Block Info

The **ChainBlockApi** lets you query blockchain blocks and block data.
It is mainly used to fetch the latest block or retrieve a block at a specific height, including historical state queries.

---

## Setup

```ts
import {
  ChainBlockApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const blockApi = new ChainBlockApi(endpoints)
```

---

## `getLatestBlock`

Fetch the **latest committed block** on the chain.
You can also query how the latest block looked at a specific historical height.

**CLI equivalent**

```bash
zigchaind query block
zigchaind query block --height <H>
```

**Method**

```ts
getLatestBlock(atHeight?: number)
```

**Example (latest block)**

```ts
const latestBlock = await blockApi.getLatestBlock()
console.log(latestBlock)
```

**Example (latest block at a specific height)**

```ts
const latestAtHeight = await blockApi.getLatestBlock(120000)
console.log(latestAtHeight)
```

---

## `getBlockByHeight`

Query a **specific block by its height**.
Optionally, you can query the result from a historical chain state.

**CLI equivalent**

```bash
zigchaind query block --type=height <height>
zigchaind query block --type=height <height> --height <H>
```

**Method**

```ts
getBlockByHeight(height: number, atHeight?: number)
```

**Example (specific block)**

```ts
const block = await blockApi.getBlockByHeight(150000)
console.log(block)
```

**Example (block queried at historical height)**

```ts
const blockAtHeight = await blockApi.getBlockByHeight(150000, 160000)
console.log(blockAtHeight)
```

---

## Notes

* Block queries are **read-only** and do not require any wallet.
* Querying at historical heights may fail if the node has pruned old data.
* LCD does **not** support querying blocks by hash (height-based queries only).

---
