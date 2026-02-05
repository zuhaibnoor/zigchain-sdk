# Decentralized Exchange (DEX) Module

The **ChainDexApi** allows you to interact with the chain’s decentralized exchange (DEX).
It is used to fetch information about liquidity pools, pool balances, pool IDs for token pairs, and DEX parameters.

---

## Setup

```ts
import {
  ChainDexApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const dexApi = new ChainDexApi(endpoints)
```

---

## `fetchPool`

Fetch **details of a specific liquidity pool** by its pool ID.

**CLI equivalent**

```bash
zigchaind query dex get-pool <pool-id>
```

**Method**

```ts
fetchPool(poolId: string)
```

**Parameters**

* `poolId: string` – The ID of the pool you want to query.

**Returns**

* `DexPoolResponse` – Includes pool tokens, liquidity, swap fees, and other pool data.

**Example**

```ts
const pool = await dexApi.fetchPool('1')
console.log('Pool info:')
console.dir(pool, { depth: null })
```

---

## `fetchPoolBalances`

Fetch **balances of tokens in a specific pool**.

**CLI equivalent**

```bash
zigchaind query dex get-pool-balances <pool-id>
```

**Method**

```ts
fetchPoolBalances(poolId: string)
```

**Parameters**

* `poolId: string` – The pool ID to query balances for.

**Returns**

* `DexPoolBalancesResponse` – Contains the amounts of each token in the pool.

**Example**

```ts
const balances = await dexApi.fetchPoolBalances('1')
console.log('Pool balances:')
console.dir(balances, { depth: null })
```

---

## `fetchPoolUids`

Fetch the **pool IDs for a given token pair**.

**CLI equivalent**

```bash
zigchaind query dex pool-uids <tokenA> <tokenB>
```

**Method**

```ts
fetchPoolUids(tokenA: string, tokenB: string)
```

**Parameters**

* `tokenA: string` – Symbol or denom of the first token.
* `tokenB: string` – Symbol or denom of the second token.

**Returns**

* `poolUidResponse` – Pool IDs that match the token pair.

**Example**

```ts
const uids = await dexApi.fetchPoolUids('uzig', 'uatom')
console.log('Pool IDs for token pair:')
console.dir(uids, { depth: null })
```

---

## `fetchParams`

Fetch the **DEX module parameters**.

**CLI equivalent**

```bash
zigchaind query dex params
```

**Method**

```ts
fetchParams()
```

**Returns**

* `DexParamsResponse` – Includes swap fees, allowed pools, and other DEX settings.

**Example**

```ts
const params = await dexApi.fetchParams()
console.log('DEX params:')
console.dir(params, { depth: null })
```

---

## Notes

* All queries are **read-only** and do not require a wallet.
* Pool-related queries are useful for **tracking liquidity, swaps, and token balances**.
