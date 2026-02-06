# Slashing Module

The **ChainSlashingApi** lets you query slashing-related data.
It is used to fetch **slashing parameters** and **validator signing information**, which helps track validator uptime and potential slashing conditions.

---

## Setup

```ts
import {
  ChainSlashingApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const slashingApi = new ChainSlashingApi(endpoints)
```

---

## `fetchParams`

Fetch the **slashing module parameters**.

**CLI equivalent**

```bash
zigchaind query slashing params
```

**Method**

```ts
fetchParams()
```

**Example**

```ts
const params = await slashingApi.fetchParams()
console.dir(params, { depth: null })
```

---

## `fetchSigningInfos`

Fetch **signing information for all validators**.
This includes missed blocks, start height, and jail status.

**CLI equivalent**

```bash
zigchaind query slashing signing-infos
```

**Method**

```ts
fetchSigningInfos()
```

**Example**

```ts
const infos = await slashingApi.fetchSigningInfos()
console.log(infos)
```

---

## `fetchSigningInfo`

Fetch **signing information for a specific validator** using its **consensus address**.

**CLI equivalent**

```bash
zigchaind query slashing signing-info <valcons-address>
```

**Method**

```ts
fetchSigningInfo(valConsAddress: string)
```

**Example**

```ts
const signingInfo = await slashingApi.fetchSigningInfo(
  'zigvalcons1qd9g9rwjmgs7k02w65t2hlekc39vnqsq0ajs47'
)

console.dir(signingInfo, { depth: null })
```

---

## Example (Full)

```ts
import {
  ChainSlashingApi,
  getNetworkEndpoints,
  Network
} from '@zuhaibnoor/zigchain-sdk'

async function main() {
  const endpoints = getNetworkEndpoints(Network.Testnet)
  const slashingApi = new ChainSlashingApi(endpoints)

  console.log('--- Slashing Params ---')
  const params = await slashingApi.fetchParams()
  console.dir(params, { depth: null })

  console.log('\n--- All Signing Infos ---')
  const infos = await slashingApi.fetchSigningInfos()
  console.log(infos)

  console.log('\n--- Single Signing Info ---')
  const singleInfo = await slashingApi.fetchSigningInfo(
    'zigvalcons1qd9g9rwjmgs7k02w65t2hlekc39vnqsq0ajs47'
  )
  console.dir(singleInfo, { depth: null })
}

main()
```

---

## Notes

* Slashing queries are **read-only** and require no wallet.
* All slashing queries are performed via **LCD endpoints**.

