import Architecture from './architecture.js';

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
    console.log(`[Codex] Inherited from ${def.symbol}`);
  },

  get(key) {
    return this.inherited[key];
  }
};

// Populate Codex with symbolic definitions from Architecture
Architecture.exportTo(Codex);

export default Codex;
