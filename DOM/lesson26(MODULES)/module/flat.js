export function createRect(width, height, x, y) {
  ctx.beginPath();
  ctx.rect(width, height, x, y);
  ctx.strokeRect();

  return {
    ctx: ctx,
    rect: rect,
  };
}
