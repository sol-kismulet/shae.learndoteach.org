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

Codex.inherit({
  symbol: 'enso',
  behavior: {
    swirling_enso: {
      description: 'A slow, centered rotation around a chosen element. Used to mark sacred thresholds or points of entry.',
      implementation: 'SVG or canvas draw, anchored at (x, y). Rotation tied to time (e.g., performance.now()), optionally pulsating.',
      trigger: 'Appears as a chosen star is highlighted, signaling transition or invitation.'
    },
    starfield: {
      description: 'Background of glimmering, subtly animated stars. Represents potential, presence, pre-form.',
      behavior: 'Stars shimmer randomly. One star is chosen and begins to glow and enlarge over time.',
      interaction: 'Scene begins in blackness, starfield fades in, chosen star grows, enso appears.'
    }
  },
  aesthetic: {
    fade_in_duration: '5000ms',
    glow_color: 'rgba(255, 255, 200, 0.8)',
    enso_svg_path: '/assets/enso.svg',
    visual_mood: 'Sacred. Empty. Emergent.'
  }
});

export default Codex;
