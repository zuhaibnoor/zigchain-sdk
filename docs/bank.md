## Bank Module

The **Bank module** allows you to query token balances, token supply, and metadata of denominations on the ZigChain network.
It is mainly used to inspect account balances and understand what tokens exist on the chain.

---

## Setup

```ts
import {
  ChainBankApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'
```

```ts
const endpoints = getNetworkEndpoints(Network.Testnet)
const bankApi = new ChainBankApi(endpoints)
```

---

## `fetchBalance`

Query the balance of a **specific token denom** for an account.

**CLI equivalent**

```bash
zigchaind query bank balance <address> <denom>
```

**Method**

```ts
fetchBalance(address: string, denom: string)
```

**Example**

```ts
const balance = await bankApi.fetchBalance(
  'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5',
  'uzig'
)

console.log(balance)
```

---

## `fetchBalances`

Query **all token balances** owned by an account.

**CLI equivalent**

```bash
zigchaind query bank balances <address>
```

**Method**

```ts
fetchBalances(address: string)
```

**Example**

```ts
const balances = await bankApi.fetchBalances(
  'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5'
)

console.log(balances)
```

---

## `fetchTotalSupply`

Query the **total supply of all tokens** on the chain.

**CLI equivalent**

```bash
zigchaind query bank total-supply
```

**Method**

```ts
fetchTotalSupply()
```

**Example**

```ts
const supply = await bankApi.fetchTotalSupply()
console.log(supply)
```

---

## `fetchSupplyOf`

Query the **total supply of a specific token denom**.

**CLI equivalent**

```bash
zigchaind query bank total-supply-of <denom>
```

**Method**

```ts
fetchSupplyOf(denom: string)
```

**Example**

```ts
const supplyOf = await bankApi.fetchSupplyOf('uzig')
console.log(supplyOf)
```

---

## `fetchDenomMetadata`

Query metadata information for a specific token denom (name, symbol, decimals, etc.).

**CLI equivalent**

```bash
zigchaind query bank denom-metadata <denom>
```

**Method**

```ts
fetchDenomMetadata(denom: string)
```

**Example**

```ts
const metadata = await bankApi.fetchDenomMetadata('uzig')
console.log(metadata)
```

---

## `fetchDenomOwners`

Query **all accounts that hold a specific token denom**.

**CLI equivalent**

```bash
zigchaind query bank denom-owners <denom>
```

**Method**

```ts
fetchDenomOwners(denom: string)
```

**Example**

```ts
const owners = await bankApi.fetchDenomOwners('uzig')
console.log(owners)
```

---

## `fetchAllDenomsMetadata`

Query metadata for **all registered token denominations** on the chain.

**CLI equivalent**

```bash
zigchaind query bank denoms-metadata
```

**Method**

```ts
fetchAllDenomsMetadata()
```

**Example**

```ts
const allMetadata = await bankApi.fetchAllDenomsMetadata()
console.log(allMetadata)
```

---

## `fetchSendEnabled`

Query which denominations are **allowed to be transferred** on the chain.

**CLI equivalent**

```bash
zigchaind query bank send-enabled
```

**Method**

```ts
fetchSendEnabled()
```

**Example**

```ts
const sendEnabled = await bankApi.fetchSendEnabled()
console.log(sendEnabled)
```

---

## `fetchSpendableBalance`

Query the **spendable (usable) balance** of a specific token for an account.
This excludes locked or vesting tokens.

**CLI equivalent**

```bash
zigchaind query bank spendable-balance <address> <denom>
```

**Method**

```ts
fetchSpendableBalance(address: string, denom: string)
```

**Example**

```ts
const spendable = await bankApi.fetchSpendableBalance(
  'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5',
  'uzig'
)

console.log(spendable)
```

---

## `fetchSpendableBalances`

Query **all spendable balances** for an account across all denominations.

**CLI equivalent**

```bash
zigchaind query bank spendable-balances <address>
```

**Method**

```ts
fetchSpendableBalances(address: string)
```

**Example**

```ts
const spendableBalances = await bankApi.fetchSpendableBalances(
  'zig1svkn4sqrlz8r6krq96ty6kze54n2ec03u0vat5'
)

console.log(spendableBalances)
```

---

## `fetchParams`

Query the **bank module parameters**, such as send rules and token behavior.

**CLI equivalent**

```bash
zigchaind query bank params
zigchaind query bank params --height <H>
```

**Method**

```ts
fetchParams()
```

**Example**

```ts
const params = await bankApi.fetchParams()
console.log(params)
```

---

