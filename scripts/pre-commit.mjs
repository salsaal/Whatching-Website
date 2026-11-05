// Formats and lints only the files staged for this commit.
import { execFileSync } from "node:child_process";

const git = (...args) => execFileSync("git", args, { encoding: "utf8" });
const run = (cmd, args) => execFileSync(cmd, args, { stdio: "inherit" });
const list = (output) => output.split("\0").filter(Boolean);

const staged = list(
  git("diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z")
);
const unstaged = new Set(list(git("diff", "--name-only", "-z")));

const formattable = staged.filter((f) =>
  /\.(js|jsx|mjs|cjs|ts|tsx|json|css|scss|md)$/.test(f)
);
const lintable = (files) =>
  files.filter((f) => /\.(js|jsx|mjs|cjs|ts|tsx)$/.test(f));

// A file that also has unstaged edits can't be fixed and re-staged without
// pulling those edits into the commit, so it is only checked.
const full = formattable.filter((f) => !unstaged.has(f));
const partial = formattable.filter((f) => unstaged.has(f));

try {
  if (full.length)
    run("npx", ["prettier", "--write", "--ignore-unknown", ...full]);
  if (partial.length)
    run("npx", ["prettier", "--check", "--ignore-unknown", ...partial]);
  if (lintable(full).length)
    run("npx", ["eslint", "--fix", "--no-warn-ignored", ...lintable(full)]);
  if (lintable(partial).length)
    run("npx", ["eslint", "--no-warn-ignored", ...lintable(partial)]);
  if (full.length) run("git", ["add", "--", ...full]);
} catch {
  process.exit(1);
}
