# Multi-Agent Workflow Protocol
# Codice Website Rebuild — v1.0

---

## Agent Roles

### Claude Code — Architect / Reviewer
- System architecture, core logic, data layer, API flow
- Reviews plans, proposes safe implementation paths
- Scaffolds folder structure, writes typed data files
- Code review before any major merge
- **Rule:** No git worktrees unless Yaz explicitly asks. Work directly on current branch.

### Codex — Terminal / Repo Operator
- Git operations (status, add, commit, push — only when Yaz asks)
- Package installs: `npm install`, `npm run build`, `npm run dev`
- Build verification and error fixing
- Environment setup and deployment checks
- Updates `CURRENT_STATE.md` and `TASKS.md` after every session
- **Runs after every Claude Code handoff:** `npm run build` → report result

### Antigravity — Visual / Design Polish
- High-end UI/UX, animations, micro-interactions
- Browser-based visual audit (screenshots, layout checks)
- Responsive polish across all breakpoints
- Design QA: spacing, color consistency, hover states
- **Rule:** Preserve existing visual language unless Yaz explicitly asks for redesign

---

## Source of Truth

| File | What it is |
|---|---|
| **Git** | Source of truth for ALL code |
| **`CURRENT_STATE.md`** | Current project status — read this first, always |
| **`TASKS.md`** | Active / done / blocked tasks per agent |
| **`.agent-log/{agent}.md`** | Dated handoff notes — what changed, what verified, what remains |

---

## Agent Start Checklist (MANDATORY — every session, no exceptions)

```
1. git status
2. Read CURRENT_STATE.md
3. Read TASKS.md
4. Read latest entries in .agent-log/ (your file + others)
5. Check for uncommitted changes from other agents
   → If found: inspect and work WITH them, do not overwrite
```

---

## Agent End Checklist (MANDATORY — every session, no exceptions)

```
1. Update CURRENT_STATE.md with current status
2. Update TASKS.md (move completed to DONE, add new if discovered)
3. Add dated entry to .agent-log/{your-name}.md
4. Run smallest useful verification:
   - Claude Code / Codex: npm run build
   - Antigravity: screenshot + visual check
5. Report to Yaz:
   - What changed
   - What was verified
   - What remains / what next agent should do
```

---

## Editing Rules

- **ONE agent edits code at a time**
- If another agent has uncommitted changes: inspect and work WITH them
- Do NOT revert or overwrite another agent's work (unless Yaz explicitly says to)
- Keep changes scoped to the assigned task — no scope creep
- Preserve the current design system tokens (defined in SKILL.md) at all times
- File conflict? PAUSE immediately. Ask Yaz: "Who owns this file?"

---

## Commit Rules

- Commit ONLY when Yaz asks OR when the workflow specifically requires it
- Never commit in the middle of an unfinished task

### Commit Message Format
```
[agent-name] scope: short description
```

### Examples
```
[claude] scaffold: initialize Next.js 14 + Tailwind + shadcn
[claude] data: add codice.ts with all typed company data
[codex] build: fix tailwind config peer dependency
[codex] docs: update CURRENT_STATE and TASKS after scaffold
[antigravity] ui: animate hero text reveal and stat counters
[antigravity] ui: normalize spacing and color across services grid
[antigravity] ui: responsive polish mobile nav and hero
```

---

## Typical Session Flow

```
Yaz → Claude Code
  Claude Code reads state docs
  Claude Code architects / builds
  Claude Code updates docs
  Claude Code hands off to Codex

Codex
  Codex reads state docs
  Codex runs build / verify
  Codex fixes errors
  Codex updates docs
  Codex hands off to Antigravity

Antigravity
  Antigravity reads state docs
  Antigravity polishes visually
  Antigravity does browser audit
  Antigravity updates docs
  Antigravity reports to Yaz
```

---

## Short Version

Claude plans + reviews.
Codex runs + verifies + integrates.
Antigravity designs + polishes.
Docs keep all 3 synchronized.
Nobody overwrites each other.
