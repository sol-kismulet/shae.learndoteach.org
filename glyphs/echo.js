export default {
  render(text, opts = {}) {
    const {
      numechoes = 4,
      direction = 'down-right',
      fadeMode = 'light-to-dark',
      baseColor = '#ffffff',
      echoColor = 'rgba(255,255,255,FADE)',
      containerId
    } = opts;

    const container = document.getElementById(containerId);
    if (!container) return;

    const dirMap = {
      'down-right': [1,1],
      'down-left': [-1,1],
      'up-right': [1,-1],
      'up-left': [-1,-1]
    };
    const [dx, dy] = dirMap[direction] || [1,1];
    const step = 2;

    let shadows = [];
    for (let i = 1; i <= numechoes; i++) {
      const offX = dx * step * i;
      const offY = dy * step * i;
      const fadeVal = fadeMode === 'light-to-dark'
        ? (1 - i/(numechoes + 1))
        : (i/(numechoes + 1));
      const color = echoColor.replace('FADE', fadeVal.toFixed(2));
      shadows.push(`${offX}px ${offY}px 0 ${color}`);
    }

    const span = document.createElement('span');
    span.textContent = text;
    span.style.color = baseColor;
    span.style.textShadow = shadows.join(', ');

    container.innerHTML = '';
    container.appendChild(span);
  }
};
