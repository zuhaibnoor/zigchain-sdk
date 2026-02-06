# Staking Module

The **Staking module** manages everything related to **validators**, **delegations**, **unbonding**, and **redelegation**.

In simple terms:

* **Delegators** stake tokens to validators
* **Validators** secure the network
* Rewards, slashing, and voting power all depend on staking state

The `ChainStakingApi` provides **read-only access** to staking data using LCD endpoints.

---

## Setup

```ts
import {
  ChainStakingApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const stakingApi = new ChainStakingApi(endpoints)
```

---

## `fetchDelegation`

Fetch **a single delegation relationship** between:

* one **delegator**
* one **validator**

Use this when you already know **both addresses** and want to check:

* delegated amount
* shares
* delegation status

**When to use**

* Checking if a delegator has staked with a specific validator
* Showing detailed info for one delegation

**CLI equivalent**

```bash
zigchaind query staking delegation <delegator> <validator>
```

**Method**

```ts
fetchDelegation(
  delegatorAddress: string,
  validatorAddress: string
)
```

**Example**

```ts
const delegation = await stakingApi.fetchDelegation(
  delegatorAddr,
  validatorAddr
)

console.dir(delegation, { depth: null })
```

---

## `fetchDelegations`

Fetch **all delegations made by a delegator** across **all validators**.

This returns a **list**, not a single delegation.

**When to use**

* Showing a delegator’s entire staking portfolio
* Wallet dashboards
* Calculating total staked amount for a user

**Difference from `fetchDelegation`**

* `fetchDelegation` → one validator
* `fetchDelegations` → all validators

**CLI equivalent**

```bash
zigchaind query staking delegations <delegator>
```

**Method**

```ts
fetchDelegations(delegatorAddress: string)
```

**Example**

```ts
const delegations = await stakingApi.fetchDelegations(delegatorAddr)
console.dir(delegations, { depth: null })
```

---

## `fetchValidatorDelegations`

Fetch **all delegations made to a specific validator** by **all delegators**.

This is the **validator-centric** view of delegations.

**When to use**

* Validator dashboards
* Showing who has delegated to a validator
* Calculating validator voting power

**Difference from `fetchDelegations`**

* `fetchDelegations` → delegator → validators
* `fetchValidatorDelegations` → validator → delegators

**CLI equivalent**

```bash
zigchaind query staking delegations-to <validator>
```

**Method**

```ts
fetchValidatorDelegations(validatorAddress: string)
```

**Example**

```ts
const validatorDelegations =
  await stakingApi.fetchValidatorDelegations(validatorAddr)

console.dir(validatorDelegations, { depth: null })
```

---

## `fetchDelegatorValidator`

Fetch **validator information** for a **specific delegator–validator pair**.

This endpoint confirms:

* whether a validator exists for a delegator
* whether the delegator is bonded to that validator

⚠️ Even though the endpoint looks similar to `fetchDelegation`,
this method focuses on **validator details**, not delegation amounts.

**When to use**

* Validating a delegator–validator relationship
* Checking validator status (bonded / unbonded / jailed) for a delegator
* UI flows that depend on validator state

**Difference from `fetchDelegation`**

* `fetchDelegation` → delegation data (shares, balance)
* `fetchDelegatorValidator` → validator info in context of delegator

**CLI equivalent**

```bash
zigchaind query staking delegator-validator <delegator> <validator>
```

**Method**

```ts
fetchDelegatorValidator(
  delegatorAddress: string,
  validatorAddress: string
)
```

**Example**

```ts
const validatorInfo =
  await stakingApi.fetchDelegatorValidator(
    delegatorAddr,
    validatorAddr
  )

console.dir(validatorInfo, { depth: null })
```

---

## `fetchDelegatorValidators`

Fetch **all validator information associated with a delegator**.

This returns the **validators a delegator is bonded to**, along with each validator’s metadata and status.

**Key idea**

* This is **validator-focused**, not delegation-amount–focused.
* It answers *“Which validators am I connected to?”* rather than *“How much did I stake?”*

**When to use**

* Showing a delegator’s active validators
* Validator lists inside wallets
* Navigation links from delegator → validator pages

**Difference from similar methods**

* `fetchDelegations` → delegation amounts & shares
* `fetchDelegatorValidators` → validator identities & status

**CLI equivalent**

```bash
zigchaind query staking delegator-validators <delegator>
```

**Method**

```ts
fetchDelegatorValidators(delegatorAddress: string)
```

**Example**

```ts
const validators =
  await stakingApi.fetchDelegatorValidators(delegatorAddr)

console.dir(validators, { depth: null })
```

---

## `fetchHistoricalInfo`

Fetch **historical staking state at a specific block height**.

This includes:

* validator set at that height
* total voting power
* staking-related metadata

This endpoint is mainly useful for **indexers, explorers, and analytics tools**.

**When to use**

* Analyzing past validator sets
* Replaying chain state for historical research
* Governance or slashing investigations

⚠️ This data is **not available for all heights** — only heights explicitly stored by the chain.

**CLI equivalent**

```bash
zigchaind query staking historical-info <height>
```

**Method**

```ts
fetchHistoricalInfo(height: number | string)
```

**Example**

```ts
const history = await stakingApi.fetchHistoricalInfo(100000)
console.dir(history, { depth: null })
```

---

## `fetchStakingParams`

Fetch the **global staking parameters** of the chain.

These parameters control:

* unbonding period
* maximum number of validators
* bond denomination

**When to use**

* Displaying chain staking rules
* Validating staking-related UI logic
* Tooling that depends on unbonding duration or validator limits

**CLI equivalent**

```bash
zigchaind query staking params
```

**Method**

```ts
fetchStakingParams()
```

**Example**

```ts
const params = await stakingApi.fetchStakingParams()
console.dir(params, { depth: null })
```

---

## `fetchStakingPool`

Fetch the **current staking pool state**.

This shows:

* total bonded tokens
* total not-bonded tokens

It represents the **global staking balance of the network**.

**When to use**

* Network health dashboards
* Calculating staking ratios
* Showing bonded vs unbonded supply

**Difference from params**

* Params → rules
* Pool → live staking state

**CLI equivalent**

```bash
zigchaind query staking pool
```

**Method**

```ts
fetchStakingPool()
```

**Example**

```ts
const pool = await stakingApi.fetchStakingPool()
console.dir(pool, { depth: null })
```

---

## `fetchRedelegation`

Fetch **all redelegations initiated by a delegator**.

Redelegation allows moving stake from:

* one validator → another
* **without unbonding**

This endpoint returns **ongoing and completed redelegations** for a delegator.

**When to use**

* Showing redelegation history
* Tracking in-progress redelegations
* Preventing invalid redelegation actions in UI

**Difference from delegation queries**

* Delegation → current stake
* Redelegation → stake movement between validators

**CLI equivalent**

```bash
zigchaind query staking redelegations <delegator>
```

**Method**

```ts
fetchRedelegation(delegatorAddress: string)
```

**Example**

```ts
const redelegations =
  await stakingApi.fetchRedelegation(delegatorAddr)

console.dir(redelegations, { depth: null })
```

---

Perfect — with these, your **staking module is now complete**.
These functions cover **unbonding flows and validator discovery**, which are the last big pieces users usually get confused about. I’ll document them *very clearly* and show how they differ from each other.

You can paste this directly under the **Staking Module** section in your docs.

---

## `fetchUnbondingDelegation`

Fetch the **unbonding delegation between a specific delegator and validator**.

This shows stake that:

* has been undelegated
* is still in the **unbonding period**
* is **not yet liquid**

**What you get**

* balance currently unbonding
* completion time
* creation height

**When to use**

* Showing “pending unstake” information
* Tracking completion times in wallets
* Validator-level unbonding inspections

**Difference from other unbonding queries**

* This is **one delegator → one validator**
* Most granular unbonding query

**CLI equivalent**

```bash
zigchaind query staking unbonding-delegation <delegator> <validator>
```

**Method**

```ts
fetchUnbondingDelegation(delegator: string, validator: string)
```

**Example**

```ts
const unbonding =
  await stakingApi.fetchUnbondingDelegation(delegator, validator)

console.dir(unbonding, { depth: null })
```

---

## `fetchUnbondingDelegations`

Fetch **all unbonding delegations for a delegator** across every validator.

This aggregates **all pending unbondings** initiated by a delegator.

**When to use**

* Wallet “Unstaking” screens
* Showing total pending unbonded stake
* Preventing double-unbonding actions

**Difference from similar methods**

* `fetchUnbondingDelegation` → one validator
* `fetchUnbondingDelegations` → all validators (delegator-wide)

⚠️ Even though the path contains `validators`, the **input is a delegator address**.

**CLI equivalent**

```bash
zigchaind query staking unbonding-delegations <delegator>
```

**Method**

```ts
fetchUnbondingDelegations(delegator: string)
```

**Example**

```ts
const unbondings =
  await stakingApi.fetchUnbondingDelegations(delegator)

console.dir(unbondings, { depth: null })
```

---

## `fetchUnbondingDelegationsFrom`

Fetch **all unbonding delegations *from* a specific validator**.

This shows which delegators are currently unbonding **away from a validator**.

**When to use**

* Validator dashboards
* Monitoring validator stake outflows
* Risk and decentralization analysis

**Perspective**

* Delegator-focused → *who is unstaking*
* Validator-focused → *from where stake is leaving*

**CLI equivalent**

```bash
zigchaind query staking unbonding-delegations-from <validator>
```

**Method**

```ts
fetchUnbondingDelegationsFrom(validator: string)
```

**Example**

```ts
const validatorUnbondings =
  await stakingApi.fetchUnbondingDelegationsFrom(validator)

console.dir(validatorUnbondings, { depth: null })
```

---

## `fetchValidator`

Fetch **detailed information about a single validator**.

Includes:

* status (bonded / unbonded / unbonding)
* commission rates
* operator address
* consensus public key
* voting power

**When to use**

* Validator profile pages
* Delegation confirmation screens
* Governance and slashing tools

**CLI equivalent**

```bash
zigchaind query staking validator <validator>
```

**Method**

```ts
fetchValidator(validator: string)
```

**Example**

```ts
const validatorInfo =
  await stakingApi.fetchValidator(validatorAddr)

console.dir(validatorInfo, { depth: null })
```

---

## `fetchValidators`

Fetch **all validators in the network**.

This returns the **full validator set**, optionally filtered by status at the chain level.

**When to use**

* Validator explorer pages
* Delegation selection UI
* Network decentralization analysis

**Difference from delegator-validator queries**

* `fetchValidators` → network-wide
* `fetchDelegatorValidators` → user-specific

**CLI equivalent**

```bash
zigchaind query staking validators
```

**Method**

```ts
fetchValidators()
```

**Example**

```ts
const validators = await stakingApi.fetchValidators()
console.dir(validators, { depth: null })
```
---

