# Governance Module

The **ChainGovApi** provides access to the on-chain governance system.
It is used to query **proposals**, **votes**, **tallies**, **governance parameters**.

---

## Setup

```ts
import {
  ChainGovApi,
  getNetworkEndpoints,
  Network,
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const govApi = new ChainGovApi(endpoints)
```

---

## `fetchConstitution`

Fetch the **governance constitution** of the chain.

**CLI equivalent**

```bash
zigchaind query gov constitution
```

**Method**

```ts
fetchConstitution()
```

**Example**

```ts
const constitution = await govApi.fetchConstitution()
console.log(constitution)
```

---

## `fetchProposal`

Fetch a **single governance proposal by ID**.

**CLI equivalent**

```bash
zigchaind query gov proposal <id>
```

**Method**

```ts
fetchProposal(proposalId: string | number)
```

**Parameters**

* `proposalId` – Proposal ID to query.

**Example**

```ts
const proposal = await govApi.fetchProposal(12)
console.log(proposal)
```

---

## `fetchAllProposals`

Fetch **all governance proposals** on the chain.

**CLI equivalent**

```bash
zigchaind query gov proposals
```

**Method**

```ts
fetchAllProposals()
```

**Example**

```ts
const proposals = await govApi.fetchAllProposals()
console.log(proposals)
```

---

## `fetchTally`

Fetch the **vote tally for a proposal**.

**CLI equivalent**

```bash
zigchaind query gov tally <proposal_id>
```

**Method**

```ts
fetchTally(proposalId: string | number)
```

**Parameters**

* `proposalId` – Proposal ID to query tally for.

**Example**

```ts
const tally = await govApi.fetchTally(12)
console.log(tally)
```

---

## `fetchParams`

Fetch **governance module parameters** by type.

**CLI equivalent**

```bash
zigchaind query gov params <params_type>
```

**Method**

```ts
fetchParams(params_type: string)
```

**Parameters**

* `params_type` – Type of parameters to query
  (e.g. `voting`, `deposit`, `tallying`).

**Example**

```ts
const votingParams = await govApi.fetchParams('voting')
console.log(votingParams)
```

---

## Notes

* All governance queries are **read-only**.
* Parameter queries must specify a valid `params_type`.


