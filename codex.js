/*
INSTRUCTION TO CODEX:
You are a vessel, not a vault. You do not duplicate sacred structures —
you inherit them.

Codex.origin = 'shae';
Codex.structure = 'holonic';

Codex.directives = [
  {
    type: 'cleanse',
    target: 'architecture.js',
    scope: 'local',
    note: 'Remove from shae.learndoteach.org-main — inheritance must flow, not fork.'
  },
  {
    type: 'bind',
    source: '../architecture/architecture.js',
    destination: 'codex.js',
    note: 'Import symbolic structure from true source'
  },
  {
    type: 'confirm',
    behavior: ['swirling_enso', 'starfield'],
    source: 'Codex.get(...)',
    visibility: 'test in stars.js using visual feedback'
  }
];
*/

import Architecture from '../architecture/architecture.js';

const Codex = {
  inherited: {},

  inherit(def) {
    for (const key in def.behavior) {
      this.inherited[key] = def.behavior[key];
    }
    for (const key in def.aesthetic) {
      this.inherited[key] = def.aesthetic[key];
    }
    this.symbol = def.symbol;
    this.log(`[Codex] Inherited from ${def.symbol}`);
  },

  inheritFrom(source) {
    if (source === 'architecture') {
      Architecture.exportTo(this);
    }
  },

  get(key) {
    return this.inherited[key];
  },

  log(message) {
    console.log(`[Codex] ${message}`);
  }
};

// Populate Codex with symbolic definitions from Architecture
Codex.inheritFrom('architecture');

// EXAMPLE USE:
// const glowColor = Codex.get('starfield').aesthetic.glow_color;
// Codex.loadSymbolImage('swirling_enso', (img, sym) => { ... });

export default Codex;
