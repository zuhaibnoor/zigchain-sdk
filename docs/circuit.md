# Circuit Module

The **ChainCircuitApi** lets you query **account-level transaction permissions** for the circuit module.
It is mainly used to check which accounts are **blocked or restricted** from sending transactions on the chain.

---

## Setup

```ts
import {
  ChainCircuitApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const circuitApi = new ChainCircuitApi(endpoints)
```

---

## `getAccountPermissions`

Fetch the **circuit permissions for a specific account**.

**CLI equivalent**

```bash
zigchaind query circuit account <address>
```

**Method**

```ts
getAccountPermissions(address: string)
```

**Parameters**

* `address: string` – The account address to query.

**Returns**

* `CircuitAccountResponse` – Contains whether the account is blocked or restricted.

**Example**

```ts
const address = 'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5'
const permissions = await circuitApi.getAccountPermissions(address)
console.log(`Circuit permissions for ${address}:`)
console.dir(permissions, { depth: null })
```

---

## `getAllAccountPermissions`

Fetch **all accounts with circuit restrictions or permissions**.

**CLI equivalent**

```bash
zigchaind query circuit accounts
```

**Method**

```ts
getAllAccountPermissions()
```

**Returns**

* `CircuitAccountsResponse` – Contains a list of all accounts and their circuit permission status.

**Example**

```ts
const allPermissions = await circuitApi.getAllAccountPermissions()
console.log('All accounts with circuit permissions:')
console.dir(allPermissions, { depth: null })
```

---

## Notes

* Useful for **auditing and monitoring** restricted accounts.
* The `getAllAccountPermissions` method may return large datasets if many accounts are restricted.


