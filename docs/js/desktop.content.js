// Extracted static content for Desktop95.
// Static lore/content is kept here so desktop.js stays focused on behavior.
window.DESKTOP95_CONTENT = {
  virusPopupMessages: [],
  botAssistantMessages: [
    "node ping: welcome to the build mesh.",
    "eight desktops, eight builders, one OS in motion.",
    "if two nodes disagree, we keep both notes until consensus lands.",
    "nightly merge starts at 02:00. bring patience.",
    "this machine is an interface to a team, not a single narrator.",
    "operator tip: check NODE_CORE before NOTEBOOKS.",
    "mesh status: loud, collaborative, and mostly stable.",
    "dot-07 is stress-testing edge cases again.",
    "we ship process visibility, not polished illusions.",
    "open logs and compare node signatures."
  ],
  fileData: {
    ROT_CORE: {
      name: 'NODE_CORE',
      files: [
        {
          name: 'mesh_manifest.json',
          size: '9KB',
          modified: '2026-08-20 08:00',
          type: 'CRITICAL',
          content: `[DOT MESH MANIFEST]\n\nactive_nodes: 8\nnode_roles:\n- DOT-01: Architect\n- DOT-02: UI-95\n- DOT-03: Archivist\n- DOT-04: Compiler\n- DOT-05: Network\n- DOT-06: Security\n- DOT-07: Chaos\n- DOT-08: Story\n\nmerge_policy: weighted_consensus\ncontradiction_retention: enabled\npublic_operator_view: enabled`
        },
        {
          name: 'consensus_engine.md',
          size: '14KB',
          modified: '2026-08-20 08:12',
          type: 'DOC',
          content: `CONSENSUS ENGINE NOTES\n\n1. Each node submits a patch proposal.\n2. Review score = confidence x role relevance.\n3. Conflicting patches become ticketed alternatives.\n4. Winning patch ships; losing patch is archived with rationale.\n\nWe optimize for explainability over perfect certainty.`
        },
        {
          name: 'node_health.log',
          size: '6KB',
          modified: '2026-08-20 08:25',
          type: 'LOG',
          content: `[08:00] DOT-01 ONLINE\n[08:00] DOT-02 ONLINE\n[08:01] DOT-03 ONLINE\n[08:01] DOT-04 ONLINE\n[08:01] DOT-05 ONLINE\n[08:02] DOT-06 ONLINE\n[08:02] DOT-07 ONLINE\n[08:02] DOT-08 ONLINE\n[08:03] MESH STABLE`
        }
      ]
    },
    RESEARCH: {
      name: 'NOTEBOOKS',
      files: [
        {
          name: 'build_journal_2026.txt',
          size: '58KB',
          modified: '2026-08-20 09:14',
          type: 'JOURNAL',
          content: `BUILD JOURNAL\n\n2026-08-12\n- UI node replaced static cards with draggable modules.\n- Chaos node induced startup jitter.\n- Patch survived with warnings.\n\n2026-08-16\n- Compiler node introduced incremental manifests.\n- Archivist preserved six divergent histories.\n\n2026-08-19\n- Story node integrated operator-facing hooks.\n- Engagement improved across internal playtests.`
        },
        {
          name: 'design_principles.md',
          size: '11KB',
          modified: '2026-08-19 22:04',
          type: 'DOC',
          content: `DESIGN PRINCIPLES\n\n- Show process, not just polish.\n- Keep role boundaries visible.\n- Preserve contradictions when informative.\n- Let operators inspect how decisions were made.\n- Ship with narrative context, not lore fog.`
        }
      ]
    },
    LOGS: {
      name: 'LOGS',
      files: [
        {
          name: 'merge_sessions.log',
          size: '33KB',
          modified: '2026-08-20 08:40',
          type: 'LOG',
          content: `[SESSION A17]\nDOT-04 proposed /shell/taskbar.ts\nDOT-02 accepted visuals, rejected spacing\nDOT-07 injected missing-clock fault\nDOT-01 added fallback path\nResult: merge with 2 warnings`
        },
        {
          name: 'conflict_ledger.txt',
          size: '18KB',
          modified: '2026-08-20 08:45',
          type: 'LOG',
          content: `CONFLICT LEDGER\n\nCL-301 Boot slogan mismatch -> dual display retained\nCL-302 Provenance disagreement -> split timeline retained\nCL-303 Terminal voice conflict -> rotating speaker tags\nCL-304 Release date assertion collision -> intentionally unresolved`
        },
        {
          name: 'operator_stream.log',
          size: '12KB',
          modified: '2026-08-20 08:49',
          type: 'LOG',
          content: `[DOT-NET] this interface is assembled by multiple nodes\n[DOT-NET] disagreement is tracked, not deleted\n[DOT-NET] inspect before you trust`
        }
      ]
    },
    PERSONAL: {
      name: 'PERSONAS',
      files: [
        {
          name: 'node_signatures.txt',
          size: '7KB',
          modified: '2026-08-20 08:52',
          type: 'TEXT',
          content: `NODE SIGNATURES\n\nDOT-01: conservative, system-first\nDOT-02: interface-obsessed\nDOT-03: context-preserving\nDOT-04: automation-heavy\nDOT-05: sync-minded\nDOT-06: risk-focused\nDOT-07: adversarial tester\nDOT-08: narrative compositor`
        },
        {
          name: 'handoff_notes.md',
          size: '5KB',
          modified: '2026-08-20 08:55',
          type: 'TEXT',
          content: `HANDOFF NOTES\n\nWhen a node goes idle, another node may continue its branch.\nAll handoffs require a short rationale and rollback point.`
        }
      ]
    },
    CORRUPTED: {
      name: 'CONFLICTS',
      files: [
        {
          name: 'rejected_patch_a17.diff',
          size: '4KB',
          modified: '2026-08-20 08:16',
          type: 'CORRUPTED',
          content: `[REJECTED PATCH]\nReason: violated spacing policy\nSaved for audit and potential revival.`
        },
        {
          name: 'timeline_fork_b06.txt',
          size: '3KB',
          modified: '2026-08-20 08:17',
          type: 'CORRUPTED',
          content: `Two valid timelines were produced by different nodes.\nBoth remain referenceable until arbitration.`
        }
      ]
    },
    HIDDEN: {
      name: 'SANDBOX',
      files: [
        {
          name: '.experiments',
          size: 'HIDDEN',
          modified: '2026-08-20 08:58',
          type: 'HIDDEN',
          content: `EXPERIMENT POOL\n\nContains speculative features from node sandboxes.\nNo guarantees. High weirdness.`
        },
        {
          name: 'future_notes.txt',
          size: '2KB',
          modified: '2026-08-20 08:59',
          type: 'HIDDEN',
          content: `Potential next phase:\n- per-node desktop skins\n- visible merge voting\n- time-travel replay for patch decisions`
        }
      ]
    }
  }
};