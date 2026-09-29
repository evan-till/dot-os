# Dot OS Terminal Quest - Social Agent Brief

## Purpose
This document is the complete user-facing explanation of the terminal quest flow.
Use it as source material for community posts, onboarding copy, FAQ responses, and creator scripts.

## Core Player Promise
Dot OS is an 8-node operating system shaped around OpenAI's Dots, where contradictions are not bugs, they are evidence.
The terminal quest makes the user an operator-investigator:
- inspect mesh evidence
- trace conflicts
- reconcile one ticket
- choose a canon branch
- collect proof artifacts

## Player Loop (High Level)
1. Start the quest.
2. Inspect node and log evidence.
3. Reach checkpoints.
4. Unlock and collect artifacts.
5. Commit a personal canon branch.
6. Compare runs with other operators.

## Commands Users Need
Primary commands:
- help
- quest
- status
- investigate manifest|health|ledger|session
- node
- conflict
- merge
- reconcile CL-303
- branch alpha|beta|gamma
- checkpoints
- artifacts
- collect [token]

Useful support commands:
- dir
- cat mesh_manifest.json
- cat node_health.log
- cat conflict_ledger.txt
- cat merge_sessions.log
- search [query]

Flavor commands (optional fun):
- nothing
- void
- wisdom

## Quest Structure (Exact Flow)
The quest now runs as a 6-stage investigation.
User advances by running quest repeatedly.
Each stage points to commands and evidence to inspect.

### Stage 1 of 6: Mesh Manifest
User action:
- investigate manifest
- inspect NODE_CORE/mesh_manifest.json

What they learn:
- active node count
- merge policy
- contradiction retention status

### Stage 2 of 6: Node Health + Signatures
User action:
- investigate health
- node
- inspect NODE_CORE/node_health.log

What they learn:
- node uptime pattern
- jitter and stability signals
- role-specific behavior fingerprints

### Stage 3 of 6: Conflict Ledger
User action:
- investigate ledger
- conflict
- inspect LOGS/conflict_ledger.txt

What they learn:
- contradiction tickets are intentional
- unresolved items can persist as canon
- conflict IDs (CL-301..CL-304)

### Stage 4 of 6: Merge Session Replay
User action:
- investigate session
- merge
- inspect LOGS/merge_sessions.log

What they learn:
- role weighting influences patch outcomes
- rejected patches are archived
- decisions include rationale, not only pass/fail

### Stage 5 of 6: Reconciliation Pass
User action:
- reconcile CL-303

What they learn:
- one contradiction can be replayed and analyzed
- even losing proposals remain preserved

### Stage 6 of 6: Canon Branch Commit
User action:
- branch alpha or branch beta or branch gamma
- collect artifacts

What they learn:
- the system does not force one final truth
- operator choice is the final interpretive step

## Artifact System
Artifacts are collectible proof-of-progress objects.
Users claim artifacts manually with collect [token].

Available tokens:
- quest
- signature
- ledger
- patch
- consensus
- branch
- swarm (bonus, requires 10 deploys)

Unlock conditions:
- quest: unlocked when quest starts
- signature: run node
- ledger: run conflict
- patch: run reconcile CL-303
- consensus: run merge
- branch: run branch alpha|beta|gamma
- swarm: deploy 10 agent instances

Suggested collection order:
1. collect quest
2. collect signature
3. collect ledger
4. collect consensus
5. collect patch
6. collect branch

## Checkpoints
Checkpoints are milestone logs that track quest progression.
Users can view them anytime with checkpoints.

Current checkpoint themes:
- quest bootstrap
- manifest verification
- node health profiling
- conflict ledger mapping
- merge session replay
- ticket reconciliation
- branch commit
- quest completion

## Status Screen: What It Communicates
status now reports progression-facing telemetry:
- mesh state
- merge policy
- contradiction retention
- consensus confidence
- operator rank tier
- active branch
- artifacts/checkpoints totals
- contradiction load

This gives users movement feedback even between major story beats.

## Social Copy Pack

### One-line hook
Eight nodes. One OS. Contradictions retained. Your terminal run decides the canon.

### Short post
Open terminal, run quest, investigate the mesh, reconcile a conflict, pick a branch, and collect artifacts as proof.

### Medium post
Dot OS turns terminal commands into an investigation game. You audit live node logs, inspect conflict tickets, replay merge sessions, and commit your own canon branch. Progress is tracked with checkpoints and collectible artifacts you unlock from evidence.

### Longer explainer
Dot OS is a multi-node operating system where disagreements are visible and preserved. In the terminal quest, users are operators investigating the Dot build mesh itself: manifest governance, node health, conflict ledgers, and merge session traces. Instead of one canonical truth, users choose a branch interpretation after reconciling evidence, then collect artifacts that prove their run path.

## Recommended Onboarding Script (Social Agent)
Use this exact sequence in tutorials or replies:
1. Run help
2. Run quest
3. Follow quest prompts stage by stage
4. Use investigate targets when prompted
5. Run node, conflict, merge, reconcile CL-303
6. Commit branch alpha|beta|gamma
7. Claim artifacts with collect [token]
8. Show checkpoints and artifacts
9. Share selected branch and collected proof

## FAQ Snippets
Q: Is there one true ending?
A: No. The experience is branch-based and contradiction-aware by design.

Q: What does branch do?
A: It records the operator's chosen interpretation path for the run.

Q: Why keep rejected patches and unresolved conflicts?
A: Retained contradictions are part of the world model and evidence system.

Q: How do I know I progressed?
A: Use status, checkpoints, and artifacts.

Q: Can I replay?
A: Yes. Re-run commands, commit a different branch, and compare outcomes.

## Tone Rules for Social Agent
- Speak operationally, not ironically.
- Treat logs, checkpoints, and artifacts as real system outputs.
- Emphasize investigation and interpretation over puzzle-solution framing.
- Use words like mesh, trace, checkpoint, shard, branch, consensus.

## Do Not Say
- This is fake lore.
- There is one correct answer.
- Conflicts are bugs to hide.

## Success Metrics to Track
- Percentage of users who run quest
- Average checkpoints per terminal session
- Artifact collection completion rate
- Branch selection rate
- Repeat sessions per user

## Quick Moderator Reply Template
If someone asks what to do first:
Start in terminal with quest, then follow prompts through investigate, node, conflict, merge, and reconcile CL-303. Finish by committing branch alpha/beta/gamma and claiming artifacts with collect.
