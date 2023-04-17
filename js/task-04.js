let counterValue = 0;
const decr = document.querySelector("[data-action='decrement']");
const incr = document.querySelector("[data-action='increment']");
const myValue = document.querySelector("#value");

const countDecr = function () {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countIncr = function () {
  counterValue += 1;
  myValue.textContent = counterValue;
};

decr.addEventListener("click", countDecr);
incr.addEventListener("click", countIncr);
