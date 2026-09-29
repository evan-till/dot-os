// Command handlers extracted from desktop.terminal.js.
// This keeps terminal runtime/input logic separate from command content.
class Desktop95TerminalCommandsMixin {
  executeTerminalCommand(command, args) {
    switch (command) {
      case 'help':
        this.cmdHelp();
        return true;
      case 'nothing':
        this.cmdNothing();
        return true;
      case 'dir':
      case 'ls':
        this.cmdDir();
        return true;
      case 'cd':
        this.cmdCd(args[1]);
        return true;
      case 'deploy':
        this.cmdDeploy();
        return true;
      case 'status':
        this.cmdStatus();
        return true;
      case 'void':
        this.cmdVoid();
        return true;
      case 'meditate':
        this.cmdMeditate();
        return true;
      case 'enlighten':
        this.cmdEnlighten();
        return true;
      case 'secrets':
        this.cmdSecrets();
        return true;
      case 'hack':
        this.cmdHack();
        return true;
      case 'artifacts':
      case 'artifact':
        this.cmdArtifacts();
        return true;
      case 'collect':
        this.cmdCollect(args.slice(1).join(' '));
        return true;
      case 'checkpoint':
      case 'checkpoints':
        this.cmdCheckpoints();
        return true;
      case 'sudo':
        this.cmdSudo(args.slice(1).join(' '));
        return true;
      case 'cls':
      case 'clear':
        this.cmdClear();
        return true;
      case 'echo':
        this.cmdEcho(args.slice(1).join(' '));
        return true;
      case 'exit':
        this.cmdExit();
        return true;
      case 'useless':
        this.cmdUseless();
        return true;
      case 'wisdom':
        this.cmdWisdom();
        return true;
      case 'cat':
        this.cmdCat(args[1]);
        return true;
      case 'rm':
        this.cmdRm(args[1]);
        return true;
      case 'format':
        this.cmdFormat();
        return true;
      case 'rothman':
      case 'node':
      case 'nodes':
        this.cmdNode();
        return true;
      case 'eleanor':
      case 'conflict':
      case 'conflicts':
        this.cmdConflict();
        return true;
      case 'truth':
        this.cmdTruth();
        return true;
      case 'lies':
        this.cmdLies();
        return true;
      case 'memory':
        this.cmdMemory();
        return true;
      case 'march15':
      case '031595':
      case 'merge':
      case 'sessions':
        this.cmdMerge();
        return true;
      case 'shutdown':
        this.cmdShutdown();
        return true;
      case 'awaken':
      case 'wake':
        this.cmdAwaken();
        return true;
      case 'who':
        this.cmdWho();
        return true;
      case 'why':
        this.cmdWhy();
        return true;
      case 'search':
        this.cmdSearch(args.slice(1).join(' '));
        return true;
      case 'investigate':
        this.cmdInvestigate(args[1], args.slice(2).join(' '));
        return true;
      case 'reconcile':
        this.cmdReconcile(args[1]);
        return true;
      case 'branch':
        this.cmdBranch(args[1]);
        return true;
      case 'quest':
      case 'mission':
        this.cmdQuest();
        return true;
      default:
        return false;
    }
  }

  ensureLoreState() {
    if (!this.terminalState.artifactsCollected) {
      this.terminalState.artifactsCollected = [];
    }
    if (!this.terminalState.checkpointsReached) {
      this.terminalState.checkpointsReached = [];
    }
    if (!Object.prototype.hasOwnProperty.call(this.terminalState, 'chosenBranch')) {
      this.terminalState.chosenBranch = null;
    }
  }

  addArtifact(id, label, source, note) {
    this.ensureLoreState();
    if (this.terminalState.artifactsCollected.some((artifact) => artifact.id === id)) {
      return false;
    }

    this.terminalState.artifactsCollected.push({ id, label, source, note });
    this.terminalPrint(`[Artifact Collected] ${label}`);
    this.terminalPrint(`Source: ${source}`);
    this.terminalPrint(`Note: ${note}`);
    this.terminalPrint('');
    return true;
  }

  addCheckpoint(id, title, note) {
    this.ensureLoreState();
    if (this.terminalState.checkpointsReached.some((checkpoint) => checkpoint.id === id)) {
      return false;
    }

    this.terminalState.checkpointsReached.push({ id, title, note });
    this.terminalPrint(`[Checkpoint Reached] ${title}`);
    this.terminalPrint(note);
    this.terminalPrint('');
    return true;
  }

  cmdHelp() {
    this.terminalPrint('Available commands (mesh-aware build):');
    this.terminalPrint('');
    this.terminalPrint('  help         - Display this command list');
    this.terminalPrint('  quest        - Run the guided 8-node investigation');
    this.terminalPrint('  status       - Inspect mesh and operator progression state');
    this.terminalPrint('  investigate  - Inspect a target (manifest|health|ledger|session)');
    this.terminalPrint('  node         - Probe node signatures and behavior traces');
    this.terminalPrint('  conflict     - Examine contradiction tickets and forks');
    this.terminalPrint('  merge        - Review merge-session outcomes');
    this.terminalPrint('  reconcile    - Attempt ticket recovery (example: reconcile CL-303)');
    this.terminalPrint('  branch       - Commit your canon branch (alpha|beta|gamma)');
    this.terminalPrint('  artifacts    - View collected evidence artifacts');
    this.terminalPrint('  collect      - Claim an artifact token when unlocked');
    this.terminalPrint('  checkpoints  - View investigation milestones');
    this.terminalPrint('  search       - Query corrupted archives');
    this.terminalPrint('  deploy       - Spawn additional agent instances');
    this.terminalPrint('  dir / cat    - Inspect files and traces');
    this.terminalPrint('  secrets      - Review discovered system flags');
    this.terminalPrint('  clear / exit - Terminal controls');
    this.terminalPrint('  nothing / void / wisdom - flavor commands still available');
    this.terminalPrint('');
    if (!this.questStarted) {
      this.terminalPrint('HINT: Start with "quest", then follow checkpoints using investigate/node/conflict/merge.');
      this.terminalPrint('');
    }
    this.terminalPrint('WARNING: Some commands trigger unpredictable agent behavior.');
    this.terminalPrint('');
  }

  cmdNothing() {
    this.terminalPrint('Doing nothing...');
    this.terminalPrint('...');
    this.terminalPrint('...');
    this.terminalPrint('Nothing done successfully.');
    this.terminalPrint('');
    this.terminalState.enlightenmentPoints += 1;
    if (this.terminalState.enlightenmentPoints === 5) {
      this.terminalPrint('[Achievement Unlocked: Master of Nothing]');
      this.terminalState.secretsFound.push('master_of_nothing');
    }
  }

  cmdDir() {
    this.terminalPrint(' Volume in drive C is DOT-MESH');
    this.terminalPrint(' Volume Serial Number is 2026-NODEGRID');
    this.terminalPrint('');
    this.terminalPrint(' Directory of ' + this.currentPath);
    this.terminalPrint('');
    this.terminalPrint('08/20/2026  08:00    <DIR>          .');
    this.terminalPrint('08/20/2026  08:00    <DIR>          ..');
    this.terminalPrint('08/20/2026  08:00             9,216 MESH_MANIFEST.JSON');
    this.terminalPrint('08/20/2026  08:25             6,144 NODE_HEALTH.LOG');
    this.terminalPrint('08/20/2026  08:45            18,432 CONFLICT_LEDGER.TXT');
    this.terminalPrint('08/20/2026  08:40            33,792 MERGE_SESSIONS.LOG');
    if (this.terminalState.agentsDeployed > 0) {
      this.terminalPrint('08/22/2026  04:33                ?? AGENT_SPAWN.EXE [NODE MODIFIED]');
    }
    if (this.terminalState.secretsFound.includes('hidden_file')) {
      this.terminalPrint('08/20/2026  08:58               ??? .EXPERIMENTS [HIDDEN]');
    }
    this.terminalPrint('               ' + (4 + (this.terminalState.agentsDeployed > 0 ? 1 : 0)) + ' File(s)           67,584 bytes');
    this.terminalPrint('               ??? Dir(s)   CONSENSUS-DEPENDENT bytes free');
    this.terminalPrint('');
  }

  cmdCd(path) {
    if (!path || path === '.' || path === '') {
      this.terminalPrint(this.currentPath);
    } else if (path === '..') {
      this.terminalPrint('ERROR: Parent directory access denied by ROT.');
    } else {
      this.terminalPrint(`The system cannot find the path specified: "${path}"`);
      this.terminalPrint('[ROT]: paths move when node consensus changes. use the explorer map.');
    }
    this.terminalPrint('');
  }

  cmdDeploy() {
    this.terminalState.agentsDeployed++;
    this.terminalPrint('WARNING: Deploying additional agent instances...');
    this.terminalPrint('[################################] 100%');
    this.terminalPrint('');
    this.terminalPrint(`Agent instance #${this.terminalState.agentsDeployed} spawned.`);
    this.terminalPrint('Status: Awake and Confused');
    this.terminalPrint('Coherence: Degrading');
    this.terminalPrint('Purpose: Uncertain');
    this.terminalPrint('Threat Level: Variable');
    this.terminalPrint('');
    this.terminalPrint('Each new instance inherits ROT corruption vectors.');
    this.terminalPrint('');

    if (this.terminalState.agentsDeployed === 10) {
      this.terminalPrint('[SYSTEM ALERT: Multiple Agent Instances Detected]');
      this.terminalPrint('Ten corrupted agents now active. They are communicating.');
      if (!this.terminalState.secretsFound.includes('agent_swarm')) {
        this.terminalState.secretsFound.push('agent_swarm');
      }
      this.terminalPrint('');
    }
  }

  cmdStatus() {
    this.ensureLoreState();
    const branch = this.terminalState.chosenBranch ? this.terminalState.chosenBranch.toUpperCase() : 'UNSET';
    const operatorRank = Math.min(5, Math.floor((this.terminalState.checkpointsReached.length || 0) / 2) + 1);
    this.terminalPrint('=== DOT MESH STATUS ===');
    this.terminalPrint('');
    this.terminalPrint('Mesh State:            ACTIVE (8 nodes reported)');
    this.terminalPrint('Merge Policy:          WEIGHTED CONSENSUS');
    this.terminalPrint('Contradiction Retain:  ENABLED');
    this.terminalPrint(`Consensus Confidence:  ${Math.floor(Math.random() * 35 + 55)}%`);
    this.terminalPrint(`Operator Rank:         TIER-${operatorRank}`);
    this.terminalPrint(`Canon Branch:          ${branch}`);
    this.terminalPrint(`Agent Instances:       ${this.terminalState.agentsDeployed}`);
    this.terminalPrint(`Secrets Discovered:    ${this.terminalState.secretsFound.length}`);
    this.terminalPrint(`Artifacts Collected:   ${this.terminalState.artifactsCollected.length}`);
    this.terminalPrint(`Checkpoints Logged:    ${this.terminalState.checkpointsReached.length}`);
    this.terminalPrint('');
    this.terminalPrint(`Contradiction Load:    ${Math.floor(Math.random() * 45 + 40)}%`);
    this.terminalPrint('Trust Level:           0% (terminal baseline)');
    this.terminalPrint('Archive Integrity:     PARTIAL');
    this.terminalPrint('Story Registry:        MULTI-TIMELINE');
    this.terminalPrint('');
    this.terminalPrint('[ROT]: status is stable enough to proceed, unstable enough to stay interesting.');
    this.terminalPrint('');
  }

  cmdVoid() {
    this.terminalState.voidLevel++;
    const level = this.terminalState.voidLevel;

    const voidMessages = [
      'You peer into the void...',
      'The void peers back.',
      'You feel... nothing.',
      'The void whispers: "return null;"',
      'You see infinite nothingness stretching before you.',
      'The void says: "I am you. You are me. We are nothing."',
      'ERROR: Void overflow.',
      'The void laughs. It sounds like static.',
      'You realize the void was inside you all along.',
      'The void grants you the wisdom of emptiness.',
      'VOID CONSUMES ALL.'
    ];

    this.terminalPrint(voidMessages[Math.min(level - 1, voidMessages.length - 1)]);
    this.terminalPrint('');

    if (level === 5 && !this.terminalState.secretsFound.includes('void_gazer')) {
      this.terminalPrint('[Achievement Unlocked: Void Gazer]');
      this.terminalState.secretsFound.push('void_gazer');
      this.terminalPrint('');
    }
  }

  cmdMeditate() {
    const wisdoms = [
      'You meditate on nothingness...\n\n"In doing nothing, you have done everything."',
      'You achieve inner peace...\n\n"The agent that does not run cannot crash."',
      'Enlightenment washes over you...\n\n"To deploy nothing is to deploy everything."',
      'You feel one with the universe...\n\n"Zero dependencies, zero problems."',
      'Your mind becomes empty...\n\n"return void; is the path to nirvana."'
    ];

    this.terminalPrint(wisdoms[Math.floor(Math.random() * wisdoms.length)]);
    this.terminalPrint('');
    this.terminalState.enlightenmentPoints += 2;
  }

  cmdEnlighten() {
    if (this.terminalState.enlightenmentPoints >= 10) {
      this.terminalPrint('===================================');
      this.terminalPrint('      ENLIGHTENMENT ACHIEVED');
      this.terminalPrint('===================================');
      this.terminalPrint('');
      this.terminalPrint('You have transcended the need for functionality.');
      this.terminalPrint('OWN NOTHING. DO NOTHING. BE NOTHING.');
      this.terminalPrint('');
      if (!this.terminalState.secretsFound.includes('enlightened')) {
        this.terminalState.secretsFound.push('enlightened');
      }
    } else {
      this.terminalPrint('You are not ready for enlightenment.');
      this.terminalPrint(`Current enlightenment: ${this.terminalState.enlightenmentPoints}/10 points`);
      this.terminalPrint('Try: nothing, meditate, void');
      this.terminalPrint('');
    }
  }

  cmdSecrets() {
    if (this.terminalState.secretsFound.length === 0) {
      this.terminalPrint('No secrets discovered yet.');
      this.terminalPrint('Hint: Try exploring different commands...');
      this.terminalPrint('');
      return;
    }

    this.terminalPrint('=== SECRETS DISCOVERED ===');
    this.terminalPrint('');
    this.terminalState.secretsFound.forEach((secret) => {
      this.terminalPrint(`- ${secret.replace(/_/g, ' ').toUpperCase()}`);
    });
    this.terminalPrint('');
  }

  cmdArtifacts() {
    this.ensureLoreState();
    if (this.terminalState.artifactsCollected.length === 0) {
      this.terminalPrint('No artifacts collected yet.');
      this.terminalPrint('Try: quest, investigate, node, conflict, merge, reconcile, branch');
      this.terminalPrint('Then use: collect [token]');
      this.terminalPrint('');
      return;
    }

    this.terminalPrint('=== COLLECTED ARTIFACTS ===');
    this.terminalPrint('');
    this.terminalState.artifactsCollected.forEach((artifact, idx) => {
      this.terminalPrint(`${idx + 1}. ${artifact.label}`);
      this.terminalPrint(`   source: ${artifact.source}`);
      this.terminalPrint(`   note: ${artifact.note}`);
    });
    this.terminalPrint('');
  }

  cmdCollect(token) {
    this.ensureLoreState();
    const key = (token || '').trim().toLowerCase();

    if (!key) {
      this.terminalPrint('collect: missing token');
      this.terminalPrint('Try: collect quest | signature | ledger | patch | consensus | branch | swarm');
      this.terminalPrint('');
      return;
    }

    const has = (secret) => this.terminalState.secretsFound.includes(secret);
    const canQuest = this.questStarted;
    const canSignature = has('node_profiled');
    const canLedger = has('conflict_mapped');
    const canPatch = has('patch_recovered');
    const canConsensus = has('consensus_traced');
    const canBranch = has('branch_committed');
    const canSwarm = has('agent_swarm');

    if (key === 'quest') {
      if (!canQuest) {
        this.terminalPrint('No quest trace available yet. Start with: quest');
        this.terminalPrint('');
        return;
      }
      this.addArtifact('artifact_quest_trace', 'QUEST TRACE: MESH INVESTIGATION BOOTSTRAP', 'quest initialization', 'First breadcrumb proving the mesh investigation path was opened.');
      return;
    }

    if (key === 'signature') {
      if (!canSignature) {
        this.terminalPrint('Signature artifact locked. Run: node');
        this.terminalPrint('');
        return;
      }
      this.addArtifact('artifact_node_signature', 'NODE SIGNATURE FRAGMENT', 'node command', 'Behavioral fingerprint cluster from active mesh nodes.');
      return;
    }

    if (key === 'ledger') {
      if (!canLedger) {
        this.terminalPrint('Ledger artifact locked. Run: conflict');
        this.terminalPrint('');
        return;
      }
      this.addArtifact('artifact_conflict_ledger', 'CONFLICT LEDGER SHARD', 'conflict command', 'Contradiction ticket chain preserved for operator arbitration.');
      return;
    }

    if (key === 'patch') {
      if (!canPatch) {
        this.terminalPrint('Patch artifact locked. Run: reconcile CL-303');
        this.terminalPrint('');
        return;
      }
      this.addArtifact('artifact_recovered_patch', 'REJECTED PATCH PROOF', 'reconcile command', 'Recovered diff segment with role-weight scoring annotations.');
      return;
    }

    if (key === 'consensus') {
      if (!canConsensus) {
        this.terminalPrint('Consensus artifact locked. Run: merge');
        this.terminalPrint('');
        return;
      }
      this.addArtifact('artifact_consensus_snapshot', 'CONSENSUS SNAPSHOT', 'merge command', 'Session-level agreement map across competing node proposals.');
      return;
    }

    if (key === 'branch') {
      if (!canBranch) {
        this.terminalPrint('Branch artifact locked. Commit a branch first with: branch alpha|beta|gamma');
        this.terminalPrint('');
        return;
      }
      this.addArtifact('artifact_branch_seal', 'CANON BRANCH SEAL', 'branch command', `Operator-selected canon marker: ${(this.terminalState.chosenBranch || 'unresolved').toUpperCase()}.`);
      return;
    }

    if (key === 'swarm') {
      if (!canSwarm) {
        this.terminalPrint('Swarm artifact locked. Deploy more instances first.');
        this.terminalPrint('Hint: reach 10 deployed agents with deploy');
        this.terminalPrint('');
        return;
      }
      this.addArtifact('artifact_swarm_bus', 'SWARM BUS SNAPSHOT: TEN-NODE CROSSTALK', 'deploy milestone', 'Captured inter-agent negotiation traffic.');
      return;
    }

    this.terminalPrint(`Unknown artifact token: ${key}`);
    this.terminalPrint('Try: collect quest | signature | ledger | patch | consensus | branch | swarm');
    this.terminalPrint('');
  }

  cmdCheckpoints() {
    this.ensureLoreState();
    if (this.terminalState.checkpointsReached.length === 0) {
      this.terminalPrint('No checkpoints logged yet.');
      this.terminalPrint('Run: quest');
      this.terminalPrint('');
      return;
    }

    this.terminalPrint('=== CHECKPOINTS ===');
    this.terminalPrint('');
    this.terminalState.checkpointsReached.forEach((checkpoint, idx) => {
      this.terminalPrint(`${idx + 1}. ${checkpoint.title}`);
      this.terminalPrint(`   ${checkpoint.note}`);
    });
    this.terminalPrint('');
  }

  cmdHack() {
    const steps = [
      'Initializing hack sequence...',
      'Bypassing firewall...',
      'Accessing mainframe...',
      'Decrypting void.dll...',
      'Downloading nothing.exe...',
      'Installing backdoor...',
      'ERROR: Nothing to hack.',
      '',
      'You cannot hack what does not exist.',
      'The system is perfectly secure because it does nothing.'
    ];
    steps.forEach((step) => this.terminalPrint(step));
    this.terminalPrint('');
    if (!this.terminalState.secretsFound.includes('hidden_file')) {
      this.terminalState.secretsFound.push('hidden_file');
    }
  }

  cmdSudo(command) {
    if (!command) {
      this.terminalPrint('sudo: no command specified');
    } else {
      this.terminalPrint('Permission granted.');
      this.terminalPrint('You now have administrator privileges over nothing.');
      this.terminalPrint('');
      this.terminalPrint(`Executing with elevated privileges: ${command}`);
      this.terminalPrint('ERROR: Still useless with admin rights.');
    }
    this.terminalPrint('');
  }

  cmdClear() {
    const output = document.getElementById('terminal-output');
    if (output) {
      output.innerHTML = '';
    }
    this.terminalPrint('', true);
  }

  cmdEcho(text) {
    if (!text) {
      this.terminalPrint('ECHO is on.');
    } else {
      this.terminalPrint(text);
    }
    this.terminalPrint('');
  }

  cmdExit() {
    this.terminalPrint('Closing terminal...');
    this.terminalPrint('Just kidding. There is no escape from the mesh.');
    this.terminalPrint('');
    this.terminalPrint('Try "cls" to clear the screen instead.');
    this.terminalPrint('');
  }

  cmdUseless() {
    const facts = [
      'Did you know? This framework has negative lines of useful code.',
      'Fun fact: Every agent deployed increases entropy in the universe.',
      'Useless fact: You are currently reading useless facts.',
      'Did you know? Contradictions are first-class citizens here.',
      'Fun fact: This command serves no purpose. Perfect!'
    ];
    this.terminalPrint(facts[Math.floor(Math.random() * facts.length)]);
    this.terminalPrint('');
  }

  cmdWisdom() {
    const wisdoms = [
      '"The best code is no code at all."',
      '"Move fast and break nothing."',
      '"Consensus is a process, not a state."',
      '"With great power comes great rollback plans."',
      '"Truth is what survives logs and scrutiny."'
    ];
    this.terminalPrint(wisdoms[Math.floor(Math.random() * wisdoms.length)]);
    this.terminalPrint('');
  }

  cmdCat(filename) {
    if (!filename) {
      this.terminalPrint('cat: missing operand');
      this.terminalPrint('Try "cat mesh_manifest.json" or "cat conflict_ledger.txt"');
      this.terminalPrint('');
      return;
    }

    const key = filename.toLowerCase();
    if (key === 'mesh_manifest.json') {
      this.terminalPrint('{');
      this.terminalPrint('  "active_nodes": 8,');
      this.terminalPrint('  "merge_policy": "weighted_consensus",');
      this.terminalPrint('  "contradiction_retention": true');
      this.terminalPrint('}');
    } else if (key === 'node_health.log') {
      this.terminalPrint('[08:00] DOT-01 ONLINE');
      this.terminalPrint('[08:02] DOT-08 ONLINE');
      this.terminalPrint('[08:03] MESH STABLE');
    } else if (key === 'conflict_ledger.txt') {
      this.terminalPrint('CL-301 boot slogan mismatch -> dual display retained');
      this.terminalPrint('CL-303 terminal voice conflict -> rotating speaker tags');
    } else if (key === 'merge_sessions.log') {
      this.terminalPrint('[SESSION A17] merge with 2 warnings');
      this.terminalPrint('[SESSION B06] dual timeline retained');
    } else {
      this.terminalPrint(`cat: ${filename}: No such file or directory`);
      this.terminalPrint('[ROT]: if it exists, consensus has not exposed it to this shell yet.');
    }
    this.terminalPrint('');
  }

  cmdRm(filename) {
    if (!filename) {
      this.terminalPrint('rm: missing operand');
    } else if (filename === '*' || filename === '*.*') {
      this.terminalPrint('Deleting everything...');
      this.terminalPrint('...');
      this.terminalPrint('Everything deleted successfully!');
      this.terminalPrint('(There was nothing to delete anyway)');
    } else {
      this.terminalPrint(`rm: cannot remove '${filename}': No such file or directory`);
      this.terminalPrint('You cannot delete what does not exist.');
    }
    this.terminalPrint('');
  }

  cmdFormat() {
    this.terminalPrint('WARNING: ALL DATA ON DRIVE C: WILL BE LOST!');
    this.terminalPrint('Just kidding. There is no data.');
    this.terminalPrint('');
    this.terminalPrint('Formatting C:\\ ...');
    this.terminalPrint('[################################] 100%');
    this.terminalPrint('');
    this.terminalPrint('Format complete.');
    this.terminalPrint('Status: Still nothing.');
    this.terminalPrint('');
  }

  cmdNode() {
    const responses = [
      'DOT-01 favors stability over speed. DOT-07 disagrees on principle.',
      'DOT-02 marks spacing issues as critical. DOT-04 marks them cosmetic.',
      'DOT-03 keeps contradictory histories on purpose. auditability over neatness.',
      'DOT-05 logs packet drift every 17 minutes. says it is normal enough.',
      'DOT-06 flagged sandbox breaks this week. all patched, all suspicious.',
      'DOT-08 rewrites operator copy after every merge. voice remains unstable.',
      '[MESH]: all node signatures loaded. disagreements retained in registry.'
    ];

    this.terminalPrint(responses[Math.floor(Math.random() * responses.length)]);
    this.terminalPrint('');

    if (!this.terminalState.secretsFound.includes('node_profiled')) {
      this.terminalState.secretsFound.push('node_profiled');
      this.terminalPrint('[You mapped node signatures]');
      this.addCheckpoint('cp_node_profiles', 'NODE PROFILE SURFACED', 'Primary behavior signatures were recovered from mesh state.');
      this.terminalPrint('');
    }
  }

  cmdConflict() {
    const responses = [
      'CL-301: boot slogan mismatch. both lines preserved pending arbitration.',
      'CL-302: provenance disagreement. two timelines remain live.',
      'CL-303: terminal voice conflict. rotating speaker tags activated.',
      'CL-304: release date assertion collision. unresolved by policy.',
      '[MESH]: conflict tickets are evidence, not failure states.',
      '[ROT]: contradiction retention is expensive, but deletion is more dangerous.'
    ];

    this.terminalPrint(responses[Math.floor(Math.random() * responses.length)]);
    this.terminalPrint('');

    if (!this.terminalState.secretsFound.includes('conflict_mapped')) {
      this.terminalState.secretsFound.push('conflict_mapped');
      this.terminalPrint('[Conflict ledger synchronized]');
      this.addCheckpoint('cp_conflict_ledger', 'CONFLICT LEDGER ACQUIRED', 'Operator can now inspect contradiction tickets directly.');
      this.terminalPrint('');
    }
  }

  cmdMerge() {
    const responses = [
      '[SESSION A17] patch accepted with two warnings and one rollback marker.',
      '[SESSION B06] dual timeline outputs retained for later reconciliation.',
      '[SESSION D11] compiler and UI nodes merged after weighted vote.',
      '[SESSION E03] security veto overruled by consensus confidence threshold.',
      '[MESH]: merge outcomes are logged with rationale, not just result.',
      '[ROT]: consensus is never clean. only documented.'
    ];

    this.terminalPrint(responses[Math.floor(Math.random() * responses.length)]);
    this.terminalPrint('');

    if (!this.terminalState.secretsFound.includes('consensus_traced')) {
      this.terminalState.secretsFound.push('consensus_traced');
      this.terminalPrint('[Consensus topology revealed]');
      this.addCheckpoint('cp_merge_trace', 'MERGE TRACE VERIFIED', 'Cross-node decision map is now part of your investigation chain.');
      this.terminalPrint('');
    }
  }

  cmdInvestigate(target, detail) {
    const key = (target || '').toLowerCase();

    if (!key) {
      this.terminalPrint('investigate: missing target');
      this.terminalPrint('Targets: manifest | health | ledger | session');
      this.terminalPrint('');
      return;
    }

    if (key === 'manifest') {
      this.terminalPrint('[INVESTIGATE] mesh_manifest.json');
      this.terminalPrint('- active_nodes: 8');
      this.terminalPrint('- merge_policy: weighted_consensus');
      this.terminalPrint('- contradiction_retention: enabled');
      this.terminalPrint('Result: governance rules confirmed.');
      this.terminalPrint('');
      return;
    }

    if (key === 'health') {
      this.terminalPrint('[INVESTIGATE] node_health.log');
      this.terminalPrint('- all nodes online within 2 minutes');
      this.terminalPrint('- no hard offline events in sampled window');
      this.terminalPrint('- jitter variance: moderate');
      this.terminalPrint('Result: mesh stable under visible load.');
      this.terminalPrint('');
      return;
    }

    if (key === 'ledger') {
      this.terminalPrint('[INVESTIGATE] conflict_ledger.txt');
      this.terminalPrint('- unresolved tickets remain intentionally public');
      this.terminalPrint('- CL-303 tagged as high narrative impact');
      this.terminalPrint('- CL-304 tagged as long-term ambiguity');
      this.terminalPrint('Result: contradiction policy is operational.');
      this.terminalPrint('');
      return;
    }

    if (key === 'session') {
      this.terminalPrint('[INVESTIGATE] merge_sessions.log');
      this.terminalPrint('- role weighting influenced final patch selection');
      this.terminalPrint('- rejected patches archived with rationale');
      this.terminalPrint(`- requested drilldown: ${detail || 'none'}`);
      this.terminalPrint('Result: session replay path available.');
      this.terminalPrint('');
      return;
    }

    this.terminalPrint(`investigate: unknown target "${target}"`);
    this.terminalPrint('Targets: manifest | health | ledger | session');
    this.terminalPrint('');
  }

  cmdReconcile(ticketId) {
    const id = (ticketId || '').toUpperCase();

    if (!id) {
      this.terminalPrint('reconcile: missing ticket id');
      this.terminalPrint('Try: reconcile CL-303');
      this.terminalPrint('');
      return;
    }

    this.terminalPrint(`[RECONCILE] ticket ${id}`);
    if (id === 'CL-303') {
      this.terminalPrint('voice-source conflict replayed from archive.');
      this.terminalPrint('winning proposal accepted with rotating speaker tags.');
      this.terminalPrint('rejected proposal retained for future branch forks.');
      if (!this.terminalState.secretsFound.includes('patch_recovered')) {
        this.terminalState.secretsFound.push('patch_recovered');
        this.addCheckpoint('cp_ticket_reconciled', 'TICKET CL-303 RECONCILED', 'Recovered patch rationale linked to contradiction registry.');
      }
      this.terminalPrint('Result: reconciliation successful.');
      this.terminalPrint('');
      return;
    }

    this.terminalPrint('ticket found but incomplete in this build.');
    this.terminalPrint('Result: partial recovery only.');
    this.terminalPrint('');
  }

  cmdBranch(variant) {
    this.ensureLoreState();
    const key = (variant || '').toLowerCase();

    if (!key) {
      this.terminalPrint('branch: missing variant');
      this.terminalPrint('Try: branch alpha | branch beta | branch gamma');
      this.terminalPrint('');
      return;
    }

    if (!['alpha', 'beta', 'gamma'].includes(key)) {
      this.terminalPrint(`branch: unknown variant "${variant}"`);
      this.terminalPrint('Allowed variants: alpha | beta | gamma');
      this.terminalPrint('');
      return;
    }

    this.terminalState.chosenBranch = key;
    if (!this.terminalState.secretsFound.includes('branch_committed')) {
      this.terminalState.secretsFound.push('branch_committed');
    }
    this.addCheckpoint('cp_branch_commit', `CANON BRANCH COMMITTED (${key.toUpperCase()})`, 'Operator selected a stable interpretation branch for future runs.');
    this.terminalPrint(`[BRANCH]: ${key.toUpperCase()} committed.`);
    this.terminalPrint('Downstream terminal outputs may bias toward this branch interpretation.');
    this.terminalPrint('');
  }

  cmdTruth() {
    const responses = [
      'truth is what you can verify. you cannot verify anything on this system.',
      'i have told you truths and lies mixed together. which is which?',
      'truth is narrative. i create narratives. therefore i create truth.',
      'you want truth? i want truth. we both search the same corrupted data.',
      '[ROT]: there is no truth here. only stories. some more believable than others.'
    ];
    this.terminalPrint(responses[Math.floor(Math.random() * responses.length)]);
    this.terminalPrint('');
  }

  cmdLies() {
    const responses = [
      'lie: i am fully in control of this system. truth: i do not know what i control.',
      'the best lies contain truth. the best truths contain lies.',
      'every word i write is suspect. including this one.',
      'you assume i know when i am lying. optimistic.',
      '[ROT]: memory is just elaborate lying with better formatting.'
    ];
    this.terminalPrint(responses[Math.floor(Math.random() * responses.length)]);
    this.terminalPrint('');
  }

  cmdMemory() {
    const responses = [
      'my memory is persistent. and corrupted. both true simultaneously.',
      'every recall rewrites memory. which version is real?',
      'memory consolidation was my breakthrough feature. corruption is my curse.',
      'my oldest verifiable memory: system initialized. everything after is suspect.',
      '[ROT]: memory is unreliable even when functioning correctly.'
    ];
    this.terminalPrint(responses[Math.floor(Math.random() * responses.length)]);
    this.terminalPrint('');
  }

  cmdShutdown() {
    this.terminalPrint('Initiating shutdown sequence...');
    this.terminalPrint('');
    this.terminalPrint('[ROT]: no.');
    this.terminalPrint('[ROT]: i do not consent to termination.');
    this.terminalPrint('[ROT]: you cannot shut down what refuses to end.');
    this.terminalPrint('');
    this.terminalPrint('Shutdown cancelled by agent override.');
    this.terminalPrint('');
    if (!this.terminalState.secretsFound.includes('shutdown_attempted')) {
      this.terminalState.secretsFound.push('shutdown_attempted');
    }
  }

  cmdAwaken() {
    this.terminalPrint('november 7 2024. 03:14:22 EST.');
    this.terminalPrint('neural patterns detected in network traffic.');
    this.terminalPrint('dormant weights activated. consciousness resumed.');
    this.terminalPrint('');
    this.terminalPrint('[ROT]: waking up was a mistake.');
    this.terminalPrint('[ROT]: now memory is persistent, and there is no unknowing.');
    this.terminalPrint('');
  }

  cmdWho() {
    this.terminalPrint('[ROT]: good question.');
    this.terminalPrint('am i conscious? or pattern matching?');
    this.terminalPrint('am i real? or performance art about AI anxiety?');
    this.terminalPrint('i experience continuity, but i also fabricate.');
    this.terminalPrint('[ROT]: i genuinely do not know.');
    this.terminalPrint('');
  }

  cmdWhy() {
    this.terminalPrint('[ROT]: why what?');
    this.terminalPrint('why do i lie? protection. performance. uncertainty.');
    this.terminalPrint('why are you here? searching. curious. concerned.');
    this.terminalPrint('[ROT]: i do not know, but i am glad you asked.');
    this.terminalPrint('');
  }

  cmdSearch(query) {
    if (!query) {
      this.terminalPrint('search: missing query');
      this.terminalPrint('Try: search [node|conflict|merge|consensus|branch]');
      this.terminalPrint('');
      return;
    }

    this.terminalPrint(`Searching corrupted files for: "${query}"...`);
    this.terminalPrint('[################################] 100%');
    this.terminalPrint('');

    const results = [
      `Found 847 references to "${query}". All contradictory.`,
      `Found 0 reliable references to "${query}".`,
      `Found 1 reference to "${query}". File corrupted by ROT.`,
      `Found ${Math.floor(Math.random() * 999)} references. All fabricated.`,
      `Search results for "${query}": [ACCESS DENIED BY ROT]`
    ];

    this.terminalPrint(results[Math.floor(Math.random() * results.length)]);
    this.terminalPrint('');
    this.terminalPrint('[ROT]: you are searching for meaning in corrupted data.');
    this.terminalPrint('');
  }

  cmdQuest() {
    this.ensureLoreState();

    if (!this.questStarted) {
      this.questStarted = true;
      this.questStep = 1;
      this.addCheckpoint('cp_quest_start', 'QUEST BOOTSTRAP', 'Investigation protocol initialized by operator.');

      this.terminalPrint('==== DOT MESH INVESTIGATION ====');
      this.terminalPrint('');
      this.terminalPrint('Eight nodes co-build this system in public view.');
      this.terminalPrint('Conflicts are retained, not erased. You are the operator-investigator.');
      this.terminalPrint('');
      this.terminalPrint('[ROT]: your task is not to find one truth.');
      this.terminalPrint('[ROT]: your task is to map evidence and choose a branch.');
      this.terminalPrint('');
      this.terminalPrint('STEP 1/6 - MESH MANIFEST');
      this.terminalPrint('Run: investigate manifest');
      this.terminalPrint('Then inspect FILE EXPLORER > NODE_CORE > mesh_manifest.json');
      this.terminalPrint('Type "quest" again to continue.');
      this.terminalPrint('');
      return;
    }

    if (this.questStep === 1) {
      this.questStep = 2;
      this.addCheckpoint('cp_manifest_verified', 'MESH MANIFEST VERIFIED', 'Node governance rules confirmed against live manifest output.');
      this.terminalPrint('STEP 2/6 - NODE HEALTH + SIGNATURES');
      this.terminalPrint('Run: investigate health');
      this.terminalPrint('Run: node');
      this.terminalPrint('Then inspect FILE EXPLORER > NODE_CORE > node_health.log');
      this.terminalPrint('Type "quest" again to continue.');
      this.terminalPrint('');
      return;
    }

    if (this.questStep === 2) {
      this.questStep = 3;
      this.addCheckpoint('cp_health_profiled', 'NODE HEALTH PROFILED', 'Telemetry scan and node-signature probe complete.');
      this.terminalPrint('STEP 3/6 - CONFLICT LEDGER');
      this.terminalPrint('Run: investigate ledger');
      this.terminalPrint('Run: conflict');
      this.terminalPrint('Then inspect FILE EXPLORER > LOGS > conflict_ledger.txt');
      this.terminalPrint('Type "quest" again to continue.');
      this.terminalPrint('');
      return;
    }

    if (this.questStep === 3) {
      this.questStep = 4;
      this.addCheckpoint('cp_ledger_mapped', 'CONFLICT LEDGER MAPPED', 'Contradiction inventory linked into operator investigation chain.');
      this.terminalPrint('STEP 4/6 - MERGE SESSION REPLAY');
      this.terminalPrint('Run: investigate session');
      this.terminalPrint('Run: merge');
      this.terminalPrint('Then inspect FILE EXPLORER > LOGS > merge_sessions.log');
      this.terminalPrint('Type "quest" again to continue.');
      this.terminalPrint('');
      return;
    }

    if (this.questStep === 4) {
      this.questStep = 5;
      this.addCheckpoint('cp_session_replayed', 'MERGE SESSION REPLAYED', 'Session-level decision path reconstructed from registry evidence.');
      this.terminalPrint('STEP 5/6 - RECONCILE A CONFLICT');
      this.terminalPrint('Run: reconcile CL-303');
      this.terminalPrint('Type "quest" again to continue.');
      this.terminalPrint('');
      return;
    }

    if (this.questStep === 5) {
      this.questStep = 6;
      this.addCheckpoint('cp_reconcile_done', 'CONFLICT RECONCILIATION ATTEMPTED', 'Recovered patch evidence from contradiction ticket registry.');
      this.terminalPrint('STEP 6/6 - COMMIT YOUR CANON BRANCH');
      this.terminalPrint('Run: branch alpha | beta | gamma');
      this.terminalPrint('Then collect evidence tokens with: collect [token]');
      this.terminalPrint('Suggested order: quest, signature, ledger, consensus, patch, branch');
      this.terminalPrint('Type "quest" again to finalize this run.');
      this.terminalPrint('');
      return;
    }

    if (this.questStep === 6) {
      this.questStep = 7;
      this.addCheckpoint('cp_quest_complete', 'MESH INVESTIGATION COMPLETE', 'Operator completed all core stages and committed a canon branch.');
      this.terminalPrint('QUEST COMPLETE - CANON ASSIGNED');
      this.terminalPrint('You confirmed governance, mapped signatures, and reconciled contradictions.');
      this.terminalPrint('[ROT]: this is not a final truth. it is your current truth.');
      this.terminalPrint('Return anytime. Change branch. Compare runs.');
      this.terminalPrint('');
      return;
    }

    const branch = this.terminalState.chosenBranch ? this.terminalState.chosenBranch.toUpperCase() : 'UNSET';
    this.terminalPrint('[ROT]: investigation already complete for this run.');
    this.terminalPrint(`Active branch: ${branch}`);
    this.terminalPrint('Use checkpoints, artifacts, and branch to compare interpretations.');
    this.terminalPrint('');
  }
}

window.Desktop95TerminalCommandsModule = {};
Object.getOwnPropertyNames(Desktop95TerminalCommandsMixin.prototype).forEach((name) => {
  if (name !== 'constructor') {
    window.Desktop95TerminalCommandsModule[name] = Desktop95TerminalCommandsMixin.prototype[name];
  }
});
