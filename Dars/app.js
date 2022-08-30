const box = document.querySelector(".box");
const ball = document.querySelector(".ball");
const Music = document.querySelector("#music");

box.style.height = window.innerHeight + "px";
box.style.width = window.innerWidth + "px";

let positionY = 10;
let positionX = 10;
let speedY = 10;
let speedX = 10;

const Yangilash = () => {
  ball.style.top = positionY + "px";
  ball.style.left = positionX + "px";
};

const ColorChange = () => {
  ball.style.backgroundColor = `#${Math.random().toString().slice(2, 8)}`;
};
const PlayMusic = () => {
  Music.autoplay = true;
  Music.load();
};

setInterval(() => {
  if (positionY + ball.clientHeight >= window.innerHeight || positionY <= 0) {
    speedY = -speedY;
    ColorChange();
    PlayMusic();
  }

  if (positionX + ball.clientWidth >= window.innerWidth || positionX <= 0) {
    speedX = -speedX;
    ColorChange();
    PlayMusic();
  }

  positionY += speedY;
  positionX += speedX;
  Yangilash();
}, 100);
