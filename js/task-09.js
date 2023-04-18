function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnChangeColorEl = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color");

btnChangeColorEl.addEventListener("click", changeColor);

function changeColor() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorValueEl.textContent = getRandomHexColor();
}
