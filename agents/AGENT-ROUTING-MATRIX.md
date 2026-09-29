# Agent Routing Matrix

## Use This To Pick The Right Node

### DOT-01 Architect
Use for:
- Module boundaries.
- High-level runtime flow.
- Merge policy and system-wide consistency decisions.

Primary files:
- docs/js/desktop.js
- docs/index.html
- docs/js/desktop.terminal.js

### DOT-02 UI-95
Use for:
- Visual tuning, readability, responsive behavior.
- Window/chrome styling, icon flow, spacing.

Primary files:
- docs/css/win95.css
- docs/index.html
- docs/assets/

### DOT-03 Archivist
Use for:
- Canon continuity.
- Artifact/checkpoint naming consistency.
- Timeline conflict preservation.

Primary files:
- README.md
- docs/lore-guide.md
- docs/js/desktop.content.js

### DOT-04 Compiler
Use for:
- Build order.
- Package scripts.
- Deterministic assembly of JS modules.

Primary files:
- package.json
- pnpm-workspace.yaml
- tsconfig.json
- vitest.config.ts

### DOT-05 Network
Use for:
- Terminal state synchronization logic.
- Progression counters and unlock semantics.

Primary files:
- docs/js/desktop.terminal.js
- docs/js/desktop.terminal.commands.js

### DOT-06 Security
Use for:
- Safety and recoverability.
- Guardrails for interactions and irreversible actions.

Primary files:
- docs/js/desktop.js
- docs/js/desktop.terminal.commands.js
- docs/css/win95.css

### DOT-07 Chaos
Use for:
- Reproduction of bugs.
- Edge-case stress passes.
- Fault scenario design.

Primary files:
- docs/js/desktop.js
- docs/js/desktop.terminal.commands.js

### DOT-08 Story
Use for:
- Narrative beats.
- Operator engagement loops.
- Artifact and checkpoint flavor text.

Primary files:
- docs/js/desktop.content.js
- docs/js/desktop.terminal.commands.js
- docs/index.html

## Escalation Rule
If a task touches more than 3 node domains, route through DOT-01 first and sequence nodes by dependency order:
DOT-04 -> DOT-01 -> DOT-02 -> DOT-05 -> DOT-08 -> DOT-03 -> DOT-06 -> DOT-07
