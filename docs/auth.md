# Auth Module

The **Auth module** manages blockchain accounts and authentication-related data.
It allows you to query account details, account info used for signing transactions, module accounts, and chain authentication parameters.

---

## Setup

```ts
import {
  ChainAuthApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const authApi = new ChainAuthApi(endpoints)
```

---

## `fetchAccount`

Query the **full account object** by address.
This may include different account types (BaseAccount, ModuleAccount, etc).

**CLI equivalent**

```bash
zigchaind query auth account <address>
```

**Method**

```ts
fetchAccount(address: string)
```

**Example**

```ts
const account = await authApi.fetchAccount(
  'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5'
)

console.log(account)
```

---

## `fetchAccountInfo`

Query **common account info** used for signing transactions.
This returns only the fields required for tx signing (account number, sequence, pubkey).

**CLI equivalent**

```bash
zigchaind query auth account-info <address>
```

**Method**

```ts
fetchAccountInfo(address: string)
```

**Example**

```ts
const info = await authApi.fetchAccountInfo(
  'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5'
)

console.log(info)
```

---

## `fetchBech32Prefix`

Query the **Bech32 address prefix** used by the chain (e.g. `zig`).

**CLI equivalent**

```bash
zigchaind query auth bech32-prefix
```

**Method**

```ts
fetchBech32Prefix()
```

**Example**

```ts
const prefix = await authApi.fetchBech32Prefix()
console.log(prefix)
```

---

## `fetchAccountsByModule`

Query the **module account information** for a specific module name.

**CLI equivalent**

```bash
zigchaind query auth module-account <module_name>
```

**Method**

```ts
fetchAccountsByModule(moduleName: string)
```

**Example**

```ts
const stakingModule = await authApi.fetchAccountsByModule('staking')
console.log(stakingModule)
```

---

## `fetchModuleAccounts`

Query **all module accounts** registered on the chain.

**CLI equivalent**

```bash
zigchaind query auth module-accounts
```

**Method**

```ts
fetchModuleAccounts()
```

**Example**

```ts
const modules = await authApi.fetchModuleAccounts()
console.log(modules)
```

---

## `fetchAuthParams`

Query the **auth module parameters**, such as signature limits and account rules.
Supports querying parameters at a **specific block height**.

**CLI equivalent**

```bash
zigchaind query auth params
zigchaind query auth params --height <H>
```

**Method**

```ts
fetchAuthParams(height?: number)
```

**Example (latest state)**

```ts
const params = await authApi.fetchAuthParams()
console.log(params)
```

**Example (historical state)**

```ts
const paramsAtHeight = await authApi.fetchAuthParams(123456)
console.log(paramsAtHeight)
```

---

