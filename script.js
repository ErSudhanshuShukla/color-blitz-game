const box = document.querySelector(".box");
const startBtn = document.querySelector("button");
const timer = document.querySelector(".timer");
const score = document.querySelector(".score");
const gameover = document.querySelector(".gameover");

/* Local Storage */
const highScoreEl = document.querySelector("#highScore");
let highScore = localStorage.getItem("highScore") || 0;
highScoreEl.textContent = highScore;

/* Game Sound */
const clickSound = new Audio("./click.mp3");
const gameOverSound = new Audio("./gameover.mp3");
const gameStartSound = new Audio("./gamestart.mp3");

/* Random Box Color */
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r},${g},${b})`;
};

/* Random Box Position */
const randomBox = () => {
  let x = Math.floor(Math.random() * 80);
  let y = Math.floor(Math.random() * 80);
  box.style.top = `${y}%`;
  box.style.left = `${x}%`;
};

/* Timer */
let t = 30;
const Timer = () => {
  t -= 1;
  timer.textContent = `${t}`;
};

/* Score */
let s = 0;
const Score = () => {
  s += 1;
  score.textContent = `${s}`;
};

/* Game State */
let Timeout;
let Interval;
const gameState = () => {
  gameStartSound.play();
  t = 30;
  s = 0;
  timer.textContent = t;
  score.textContent = s;
  startBtn.innerHTML =
    '<i style="color: #3b82f6" class="ri-restart-line"></i>';
  gameover.style.display = "none";
  box.style.display = "block";
  clearInterval(Interval);
  clearTimeout(Timeout);
};

/* Game Over State */
const gameoverState = () => {
  clearInterval(Interval);

  if (s > highScore) {
    highScore = s;
    localStorage.setItem("highScore", highScore);
    highScoreEl.textContent = highScore;
  }

  box.style.display = "none";
  gameover.style.display = "block";
  gameOverSound.play();
};

/* Game Events */
startBtn.addEventListener("click", () => {
  gameState();
  Interval = setInterval(() => {
    randomColor();
    Timer();
  }, 1000);

  Timeout = setTimeout(() => {
    gameoverState();
  }, 30000);
});

box.addEventListener("click", () => {
  clickSound.play();
  randomBox();
  Score();
});
/* The End */
