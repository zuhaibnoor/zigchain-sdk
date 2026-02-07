# Token Wrapper Module

The **Token Wrapper module** keeps track of ZIG tokens that move **out of ZigChain to other blockchains** and come **back again**.
It helps the chain maintain balance by **locking tokens when they leave** and **unlocking them when they return**, so no extra tokens are ever created.

This module is **informational only** — it does not move tokens itself, it only shows **what has already happened**.

---

## How Token Wrapping Works (Simple Explanation)

1. You send **ZIG tokens out of ZigChain**
2. Those ZIG tokens are **locked** on ZigChain
3. You receive **wrapped ZIG** on another chain
4. If wrapped ZIG comes back:

   * Wrapped tokens are **destroyed**
   * Original ZIG tokens are **unlocked**

If wrapped ZIG is **spent on the other chain and never returned**,
the corresponding ZIG **remains locked forever** on ZigChain.

---

## Setup

```ts
import {
  ChainTokenWrapperApi,
  getNetworkEndpoints,
  Network
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const tokenWrapperApi = new ChainTokenWrapperApi(endpoints)
```

---

## `fetchModuleInfo`

Returns basic information about the Token Wrapper module.


**Method**

```ts
fetchModuleInfo()
```

**Example**

```ts
const info = await tokenWrapperApi.fetchModuleInfo()
console.log(info)
```

**Use case**

* Verify that the Token Wrapper module is available and active on the chain

---

## `fetchParams`

Fetches the **configuration parameters** of the Token Wrapper module.

**Method**

```ts
fetchParams()
```

**Example**

```ts
const params = await tokenWrapperApi.fetchParams()
console.log(params)
```

**Use case**

* Check whether token wrapping is enabled
* Inspect module behavior settings

---

## `fetchTotalTransfers`

Returns the **total amount of ZIG tokens**:

* Sent **out of ZigChain**
* Returned **back to ZigChain**

**Method**

```ts
fetchTotalTransfers()
```

**Example**

```ts
const totals = await tokenWrapperApi.fetchTotalTransfers()
console.log(totals)
```

**What this tells you**

* How much ZIG is currently **locked**
* How much ZIG has **returned**
* Helps audit cross-chain token movement

---

## Real-World Example

* You send **10 ZIG** out of ZigChain
* ZigChain **locks 10 ZIG**
* You receive **10 wrapped ZIG** on another chain
* You spend **5 wrapped ZIG**
* You return **5 wrapped ZIG** back

Result:

* **5 ZIG unlocked and returned**
* **5 ZIG remain locked forever** (because they were spent)

The Token Wrapper module lets anyone **verify these numbers transparently**.

---

## Summary Table

| Function              | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| `fetchModuleInfo`     | Shows basic info about the Token Wrapper module |
| `fetchParams`         | Displays module configuration settings          |
| `fetchTotalTransfers` | Shows total ZIG moved out and returned          |


