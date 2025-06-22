const ensoStar = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 2,
  alpha: 0.2
};

function drawHighlightStar() {
  // Enlarge and brighten gradually
  if (ensoStar.radius < 8) ensoStar.radius += 0.05;
  if (ensoStar.alpha < 1) ensoStar.alpha += 0.01;

  // Draw the glowing star
  ctx.beginPath();
  ctx.arc(ensoStar.x, ensoStar.y, ensoStar.radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 200, ${ensoStar.alpha})`;
  ctx.shadowColor = 'white';
  ctx.shadowBlur = 15;
  ctx.fill();

  // Draw the enso circle around it
  ctx.beginPath();
  ctx.arc(ensoStar.x, ensoStar.y, ensoStar.radius + 15, 0, 2 * Math.PI);
  ctx.strokeStyle = `rgba(255, 255, 255, 0.5)`;
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]); // optional: dashed effect
  ctx.stroke();
  ctx.setLineDash([]); // reset
}
