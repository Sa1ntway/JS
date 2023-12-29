let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
bird.src = "images/bird.png";
let pipeBottom = new Image();
pipeBottom.src = "images/pipeBottom.png";
let pipeTop = new Image();
pipeTop.src = "images/pipeTop.png";
let bg = new Image();
bg.src = "images/bg.png";
let fg = new Image();
fg.src = "images/fg.png";
let fly = new Audio();
fly.src = "audio/fly.mp3";
let hit = new Audio();
hit.src = "audio/hit.wav";
let scoreAudio = new Audio();
scoreAudio.src = "audio/score.mp3";

let pipe = [];
pipe[0] = {
  x: canvas.width,
  y: 0,
};

let gap = 75;

let birdX = 10;
let birdY = 150;

let gravity = 0.6;
let score = 0;

function draw() {
  ctx.drawImage(bg, 0, 0);
  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeTop.height + gap);
    pipe[i].x -= 0.5;
    if (pipe[i].x == 95) {
      pipe.push({
        x: canvas.width,
        y: Math.random() * pipeTop.height - pipeTop.height,
      });
    }

    if (
      (birdX + bird.width >= pipe[i].x &&
        birdX <= pipe[i].x + pipeTop.width &&
        (birdY <= pipe[i].y + pipeTop.height ||
          birdY + bird.height >= pipeTop.height + gap)) ||
      birdY + bird.height >= canvas.height - fg.height
    ) {
      location.reload();
    }
    if (pipe[i].x + pipeTop.width == birdX - 1) {
      score++;
      scoreAudio.play();
      pipe.shift();
    }
  }

  ctx.drawImage(fg, 0, cvs.height - fg.height);

  ctx.drawImage(bird, birdX, birdY);

  ctx.font = "Arial";
  ctx.fillStyle = "black";
  ctx.fillText("score: " + score, 10, 10);

  birdY += gravity;

  requestAnimationFrame(draw);
}
draw();

document.addEventListener("keydown", function () {
  birdY -= 20;
  fly.play();
});
