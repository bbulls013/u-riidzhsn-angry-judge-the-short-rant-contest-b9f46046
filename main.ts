// Angry Judge: The Short Rant Contest
// Entry: a short, funny rant about the lift-button masher.
// Deterministic: writes the same fixed text on every run, no input,
// no randomness, no network, no clock. Node 22, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "The lift button is not a slot machine. You pressed it fourteen times. " +
  "It did not arrive faster; it arrived judged. Now we all stand here in " +
  "silence while you try to will a metal box into existence, and the lift " +
  "still takes its time, because the lift has seen people like you before " +
  "and it refuses to be hurried by a man in a rush to stand somewhere else.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
