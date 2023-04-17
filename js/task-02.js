const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const listContent = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
});

ulEl.append(...listContent);

// for (const ingredient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList.add("item");
//   ulEl.append(liEl);
// }

// const listContent = ingredients.reduce((acc, ingredient) => {
//   let liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList.add("item");
//   acc.push(liEl);
//   return acc;
// }, []);

// ulEl.append(...listContent);
