# Mint Module

The **ChainMintApi** lets you query minting-related data.
It is used to fetch **inflation**, **annual token provisions**, and **mint module parameters**.

---

## Setup

```ts
import {
  ChainMintApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

cosnt endpoints = getNetworkEndpoints(Network.Testnet)
const mintApi = new ChainMintApi(endpoints)
```

---

## `fetchInflation`

Fetch the **current inflation rate** of the chain.

**CLI equivalent**

```bash
zigchaind query mint inflation
```

**Method**

```ts
fetchInflation()
```

**Example**

```ts
const inflation = await mintApi.fetchInflation()
console.log(inflation)
```

---

## `fetchAnnualProvisions`

Fetch the **annual provisions**, i.e. the total number of tokens minted per year.

**CLI equivalent**

```bash
zigchaind query mint annual-provisions
```

**Method**

```ts
fetchAnnualProvisions()
```

**Example**

```ts
const annualProvisions = await mintApi.fetchAnnualProvisions()
console.log(annualProvisions)
```

---

## `fetchParams`

Fetch the **mint module parameters**.

**CLI equivalent**

```bash
zigchaind query mint params
```

**Method**

```ts
fetchParams()
```

**Example**

```ts
const params = await mintApi.fetchParams()
console.dir(params, { depth: null })
```

---

## Example (Full)

```ts
import {
  ChainMintApi,
  getNetworkEndpoints,
  Network
} from '@zuhaibnoor/zigchain-sdk'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const mintApi = new ChainMintApi(endpoints)

  const inflation = await mintApi.fetchInflation()
  console.log('Inflation:', inflation)

  const annualProvisions = await mintApi.fetchAnnualProvisions()
  console.log('Annual Provisions:', annualProvisions)

  const params = await mintApi.fetchParams()
  console.log('Mint Params:')
  console.dir(params, { depth: null })
}

main()
```

---

## Notes

* Mint queries are **read-only** and require no wallet.
* Inflation and provisions are returned as **string values** for precision.
* All mint endpoints are queried via **LCD**.


