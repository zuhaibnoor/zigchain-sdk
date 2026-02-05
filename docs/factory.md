# Factory Module

The **ChainFactoryApi** allows you to interact with the chain’s token factory module.
It is used to query **denoms created by admins**, **denom details**, **denom authorizations**, and the **module parameters**.

---

## Setup

```ts
import {
  ChainFactoryApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const factoryApi = new ChainFactoryApi(endpoints)
```

---

## `fetchParams`

Fetch the **factory module parameters**.

**CLI equivalent**

```bash
zigchaind query factory params
```

**Method**

```ts
fetchParams()
```

**Returns**

* `FactoryParamsResponse` – Contains factory-related settings and limits.

**Example**

```ts
const params = await factoryApi.fetchParams()
console.log('Factory params:')
console.dir(params, { depth: null })
```

---

## `fetchDenomsByAdmin`

Fetch all **denoms created by a specific admin address**.

**CLI equivalent**

```bash
zigchaind query factory denoms-by-admin <admin-address>
```

**Method**

```ts
fetchDenomsByAdmin(admin: string)
```

**Parameters**

* `admin: string` – Address of the admin whose denoms you want to fetch.

**Returns**

* `DenomsByAdminResponse` – List of denoms created by the admin.

**Example**

```ts
const denoms = await factoryApi.fetchDenomsByAdmin('zig1...adminaddress')
console.log('Denoms by admin:')
console.dir(denoms, { depth: null })
```

---

## `fetchDenom`

Fetch **details of a specific denom**.

**CLI equivalent**

```bash
zigchaind query factory show-denom <denom>
```

**Method**

```ts
fetchDenom(denom: string)
```

**Parameters**

* `denom: string` – The denom to query.

**Returns**

* `ShowDenomResponse` – Information about the denom, such as creator, admin, and metadata.

**Example**

```ts
const denomInfo = await factoryApi.fetchDenom('uzig')
console.log('Denom info:')
console.dir(denomInfo, { depth: null })
```

---

## `fetchDenomAuth`

Fetch the **authorization details for a specific denom**.

**CLI equivalent**

```bash
zigchaind query factory denom-auth <denom>
```

**Method**

```ts
fetchDenomAuth(denom: string)
```

**Parameters**

* `denom: string` – The denom to query.

**Returns**

* `DenomAuthResponse` – Shows the permissions and authorities associated with the denom.

**Example**

```ts
const auth = await factoryApi.fetchDenomAuth('uzig')
console.log('Denom authorization:')
console.dir(auth, { depth: null })
```

---

## Notes

* All queries are **read-only** and do not require a wallet.
* Useful for tracking **admin-created tokens** and their **permissions**.
* Denom authorizations indicate **who can mint, burn, or manage a token**.
