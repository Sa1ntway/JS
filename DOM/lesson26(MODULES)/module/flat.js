export function createRect(ctx, width, height, x, y) {
  ctx.beginPath();
  ctx.strokeRect(width, height, x, y);

  return {
    ctx: ctx,
    width: width,
    height: height,
    x: x,
    y: y,
  };
}
