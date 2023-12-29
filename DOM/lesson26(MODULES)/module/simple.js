export function drawline(ctx, x, y, x1, y1, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.stroke();

  return {
    x: x,
    y: y,
    x1: x1,
    y1: y1,
    color: color,
  };
}
