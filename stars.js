const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    alpha: Math.random()
  });
}

// Pick one star to be our "chosen" star that will slowly brighten.
const chosenStarIndex = Math.floor(Math.random() * stars.length);
const chosenStar = stars[chosenStarIndex];
// Store base properties so we can animate around them without losing the
// original values.
chosenStar.glowAlpha = 0; // start almost invisible
chosenStar.baseRadius = chosenStar.radius || 1.5;
let glowPhase = 0; // used for subtle breathing motion

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    // Skip drawing the chosen star in this loop; we'll handle it separately
    if (i === chosenStarIndex) continue;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
    star.alpha += (Math.random() - 0.5) * 0.05;
    star.alpha = Math.max(0.1, Math.min(star.alpha, 1));
  }

  // Animate chosen star glowing brighter with a subtle breathing motion
  if (chosenStar.glowAlpha < 1) {
    chosenStar.glowAlpha += 0.005; // slowly brighten
  }
  chosenStar.radius = chosenStar.baseRadius + Math.sin(glowPhase) * 0.3;
  glowPhase += 0.05;

  ctx.beginPath();
  ctx.arc(chosenStar.x, chosenStar.y, chosenStar.radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 200, ${chosenStar.glowAlpha})`;
  ctx.shadowColor = `rgba(255, 255, 200, ${chosenStar.glowAlpha})`;
  ctx.shadowBlur = 10;
  ctx.fill();
  // Reset shadow so other stars are not affected
  ctx.shadowBlur = 0;

  // If highlight logic is defined in enso.js, call it here
  if (typeof drawHighlightStar === 'function') {
    drawHighlightStar();
  }
  requestAnimationFrame(drawStars);
}

setTimeout(() => {
  canvas.style.opacity = 1;
  drawStars();
}, 1000);
