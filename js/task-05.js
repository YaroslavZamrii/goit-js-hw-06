const inputEl = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameLabel.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    nameLabel.textContent = "Anonymous";
  }
}
