const inputSizeEl = document.querySelector("#font-size-control");
const textSizeEl = document.querySelector("#text");

inputSizeEl.addEventListener("input", onInput);

function onInput(event) {
  const textSize = event.currentTarget.value;
  textSizeEl.style.fontSize = `${textSize}px`;
}
