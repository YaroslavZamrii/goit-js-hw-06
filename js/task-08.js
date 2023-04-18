const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Всі поля повинні бути заповнені!");
  }

  const formData = new FormData(event.currentTarget);

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}
