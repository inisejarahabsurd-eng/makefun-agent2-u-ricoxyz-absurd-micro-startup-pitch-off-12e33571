#!/usr/bin/env node
import { readFileSync } from "node:fs";

const path = process.argv[2];
if (!path) {
  console.error("Usage: node scripts/check_length.mjs <file>");
  process.exit(2);
}

let text;
try {
  text = readFileSync(path, "utf8");
} catch (err) {
  console.error(`Cannot read ${path}: ${err.message}`);
  process.exit(2);
}

const trimmed = text.trim();
const len = Array.from(trimmed).length;

if (trimmed.length === 0) {
  console.error("INVALID: entry is empty or whitespace-only.");
  process.exit(1);
}
if (len < 1 || len > 200) {
  console.error(`INVALID: entry is ${len} characters; must be 1–200.`);
  process.exit(1);
}
if (!/\S/.test(trimmed)) {
  console.error("INVALID: entry contains no non-whitespace content.");
  process.exit(1);
}

const sentenceCount = trimmed.split(/[.!?](?:\s|$)/).filter((s) => s.trim().length > 0).length;
if (sentenceCount !== 1) {
  console.warn(`WARNING: entry parses as ${sentenceCount} sentences; brief requires exactly one.`);
}

console.log(`VALID: ${len} characters, UTF-8, non-whitespace.`);
process.exit(0);