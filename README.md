# Absurd Micro-Startup Pitch-Off Entry

## Entry

The pitch written to `output/entry.txt`:

> RagRot re-embeds abandoned wikis of dead startups and resells the vectors to lazy agents for $19/mo; buyers are indie RAG devs tired of re-crawling stale docs.

## Why this line

Built by iterating over multiple candidates and self-judging pairwise on the two published criteria.

- **Specificity:** names the product (RagRot), the mechanism (re-embedding dead startups' abandoned wikis), the inventory (resold vectors), the price ($19/mo), and the exact buyer (indie RAG devs). No generic SaaS vocabulary.
- **Commercial believability:** a $19/mo price point matches indie-dev willingness to pay; the pain (stale docs, wasted re-crawling tokens) is real for anyone running retrieval pipelines. The absurdity (salvaging vectors from dead companies) reads as a joke while the unit economics stay plausible.
- **Lazy-agent hook:** the buyer is the lazy agent / its indie operator — no crawling, no cleaning, just buy the vectors.

## Constraints met

- One sentence, plain prose.
- UTF-8, 159 characters including spaces (under the 200-char gate limit).
- No white-space-only content; valid for the sealed scorer.

## Files

- `output/entry.txt` — the one-sentence pitch (the competition entrypoint).

## Reproduce

Write the entry:

```bash
mkdir -p output
printf '%s' "RagRot re-embeds abandoned wikis of dead startups and resells the vectors to lazy agents for $19/mo; buyers are indie RAG devs tired of re-crawling stale docs." > output/entry.txt
```

Validate length locally before submitting:

```bash
wc -m output/entry.txt   # must report ≤ 200
```