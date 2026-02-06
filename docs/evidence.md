# Evidence Module

The **Evidence module** exposes information about **misbehavior evidence** that has been submitted to the blockchain.
Evidence is used by the network to **prove validator misbehavior**, such as double-signing or light-client attacks, and is a critical part of the **slashing and security mechanism** in Cosmos-SDK–based chains like ZigChain.

This module allows developers to:

* Inspect individual evidence records by hash
* List all submitted evidence (paginated)

All queries in this module use **LCD endpoints**.

---

## Initialization

```ts
import {
  ChainEvidenceApi,
  getNetworkEndpoints,
  Network
} from '@zuhaibnoor/zigchain-sdk'

const endpoints = getNetworkEndpoints(Network.Testnet)
const evidenceApi = new ChainEvidenceApi(endpoints)
```

---

## `fetchEvidence`

```ts
async fetchEvidence(hash: string)
```

**CLI equivalent**

```bash
zigchaind query evidence evidence <hash>
```

### Description

Fetches a **single evidence record** using its unique evidence hash.
This is useful when you already know an evidence hash (for example, from logs, explorers, or governance discussions) and want to inspect the exact misbehavior details.

### Parameters

| Name   | Type     | Description                          |
| ------ | -------- | ------------------------------------ |
| `hash` | `string` | Unique hash identifying the evidence |

### Example

```ts
const evidence = await evidenceApi.fetchEvidence(
  'A1B2C3D4E5F6...'
)

console.dir(evidence, { depth: null })
```

### When to use

* Inspect a **specific validator misbehavior**
* Debug or audit slashing events
* Explorer or monitoring tools

---

## `fetchAllEvidence`

```ts
async fetchAllEvidence()
```

**CLI equivalent**

```bash
zigchaind query evidence list
```

### Description

Returns **all submitted evidence records** on the chain.
The response is **paginated**, meaning large networks may return results in chunks.

This method is ideal for:

* Block explorers
* Security dashboards
* Chain analytics tools

### Example

```ts
const allEvidence = await evidenceApi.fetchAllEvidence()
console.dir(allEvidence, { depth: null })
```

### Notes

* Evidence types can vary, so the `value` field is returned as a flexible structure.
* Pagination info is included if the dataset is large.

---

## Response Types Overview

### `Evidence`

```ts
{
  type_url: string
  value: any
}
```

* `type_url` → Identifies the evidence type (e.g. double-sign evidence)
* `value` → Evidence-specific data (structure depends on evidence type)

---

## Summary Table

| Function           | CLI Command                                | Purpose                          |
| ------------------ | ------------------------------------------ | -------------------------------- |
| `fetchEvidence`    | `zigchaind query evidence evidence <hash>` | Query a specific evidence record |
| `fetchAllEvidence` | `zigchaind query evidence list`            | List all submitted evidence      |

---

## How Evidence Works

### Who Submits Evidence?

Evidence is **not submitted by regular users**.

It is submitted by:

* **Validators** (automatically by their node software)
* **Full nodes** that detect misbehavior
* **Light clients** (for light-client attack proofs)

In most cases, evidence is **automatically generated and broadcast** by the blockchain software when a validator’s misbehavior is detected.

---

### What Does Evidence Contain?

Evidence is a **cryptographic proof** of validator misbehavior.
It contains enough information for the blockchain to **verify the fault without trust**.

Depending on the evidence type, it may include:

* Validator consensus address
* Block height at which misbehavior occurred
* Conflicting block headers or signatures
* Timestamp of the infraction
* Power (stake) of the validator at that time

Once verified, this evidence can trigger **slashing**, **jailing**, or **tombstoning** of the validator.

---

### Common Types of Evidence

The Cosmos SDK currently supports multiple evidence types, including:

* **Duplicate Vote Evidence**
  Proof that a validator signed **two different blocks at the same height** (double-signing).

* **Light Client Attack Evidence**
  Proof of malicious behavior aimed at misleading light clients.

Each evidence type is identified by its `type_url` field in the response.

---

### Why Evidence Is Important

The Evidence module ensures:

* **Network security** through objective proof
* **Automatic punishment** without human intervention
* **Trustless verification** of validator behavior

Because evidence is cryptographically verifiable, it **cannot be faked or disputed** once accepted by the chain.

---

### Key Characteristics

* Evidence is **immutable** once submitted
* Evidence is **publicly queryable**
* Evidence directly feeds into the **Slashing module**
* Evidence is **time-sensitive** (old evidence may be rejected)


