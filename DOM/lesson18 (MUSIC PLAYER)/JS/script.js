let body = document.body;
let player = document.querySelector(".player");
let playerHeader = player.querySelector(".player__header");
let playerControls = player.querySelector(".player__controls");
let slider = player.querySelector(".slider");
let sliderContext = player.querySelector(".slider__context");
let playlistButton = player.querySelector(".playlist");
let playerPlaylist = player.querySelectorAll(".player__song");
let playerSongs = player.querySelectorAll(".audio");
let playButton = player.querySelector(".play");
let nextButton = player.querySelector(".next");
let backButton = player.querySelector(".back");
let playIcon = playButton.querySelector('img[alt="play-icon"]');
let pauseIcon = playButton.querySelector('img[alt="pause-icon"]');

let sliderContent = slider.querySelector(".slider__content");
let sliderName = sliderContext.querySelector(".slider__name");
let sliderTitle = sliderContext.querySelector(".slider__title");

let sliderContentLength = playerPlaylist.length - 1;
let progres = player.querySelector(".progres");
let progresFilled = progres.querySelector(".progres__filled");
let sliderWidth = 100;

let count = 0;
let song = playerSongs[count];

let isMove = false;
let isPlay = false;
const bgBody = [
  "#e5e7eg",
  "#ff4545",
  "#f8ded3",
  "#ffc382",
  "#f5eda6",
  "#ffcbdc",
  "#dcf3f3",
];

function playSong() {
  if (song.paused == true) {
    song.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    song.pause();
    isPlay = false;
    playIcon.style.display = "";
    pauseIcon.style.display = "";
  }
}
playButton.addEventListener("click", function () {
  isPlay = true;
  playSong();
});

function progresUpdate() {
  const progresFilledWidth = (this.currentTime / this.duration) * 100 + "%";
  progresFilled.style.width = progresFilledWidth;
  if (isPlay == true && this.duration == this.currentTime) {
    next();
  }
  if (count == sliderContentLength && song.currentTime == song.duration) {
    playIcon.style.display = "block";
    pauseIcon.style.display = "";
    isPlay = false;
  }
}

function scurb(e) {
  const width = progres.offsetWidth;
  const clickX = e.offsetX;
  const duration = song.duration;
  song.currentTime = (clickX / width) * duration;
}
progres.addEventListener("pointerdown", (e) => {
  scurb(e);
  isMove = true;
});

progres.addEventListener("pointermove", (e) => {
  if (isMove == true) {
    scurb(e);
    song.muted = true;
  }
});

progres.addEventListener("pointerup", () => {
  isMove = false;
  song.muted = false;
});
playerPlaylist.forEach((item, index) => {
  item.addEventListener("click", function () {
    if (index > count) {
      next(index - 1);
      return;
    } else if (index < count) {
      back(index + 1);
      return;
    }
  });
});
function changeSliderContext() {
  sliderContext.style.animationName = "opacity";
  sliderName.textContent =
    playerPlaylist[count].querySelector(".player__song-name").textContent;
  sliderTitle.textContent =
    playerPlaylist[count].querySelector(".player__title").textContent;
  if (sliderName.textContent.length > 16) {
    let textWrap = document.createElement("span");
    textWrap.className = "text-wrap";
    textWrap.innerHTML = sliderName.textContent + " " + sliderName.textContent;
    sliderName.innerHTML = "";
    sliderName.append(textWrap);
  }
}
changeSliderContext();

function selectSongs() {
  song = playerSongs[count];
  for (let item of playerSongs) {
    if (item != song) {
      item.pause();
      item.currentTime = 0;
    }
  }
  if (isPlay == true) {
    song.play();
  }
}
function changeBgBody() {
  body.style.backgroundColor = bgBody[count];
}

function run() {
  changeSliderContext();
  selectSongs();
  changeBgBody();
}
nextButton.addEventListener("click", () => {
  next(0);
});
backButton.addEventListener("click", () => {
  back(0);
});

function next(index) {
  let left = 0;
  count = index || count;
  if (count == sliderContentLength) {
    count = count;
    return;
  }
  left = (count + 1) * sliderWidth;
  sliderContent.style.transform = `translate3d(=${left}%, 0, 0)`;
  count = count + 1;
  run();
}

function back(index) {
  let left = 0;
  count = index || count;
  if (count == 0) {
    count = count;
    return;
  }
  left = (count - 1) * sliderWidth;
  sliderContent.style.transform = `translate3d(=${left}%, 0, 0)`;
  count = count - 1;
  run();
}

function durationSongs() {
  let min = parseInt(this.duration / 60);
  let sec = parseInt(this.duration % 60);

  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  let playerSongTime = `${min}:${sec}`;
  this.closest(".player__song")
    .querySelector(".player__song-time")
    .append(playerSongTime);
}

playerSongs.forEach((song) => {
  song.addEventListener("loadeddata", durationSongs);
  song.addEventListener("timeupdate", progresUpdate);
});

function openPlayer() {
  playerHeader.classList.add("open-header");
  playerControls.classList.add("move");
  slider.classList.add("open-slider");
}

function closePlayer() {
  playerHeader.classList.remove("open-header");
  playerControls.classList.remove("move");
  slider.classList.remove("open-slider");
}

sliderContext.addEventListener("click", openPlayer);
playlistButton.addEventListener("click", closePlayer);
