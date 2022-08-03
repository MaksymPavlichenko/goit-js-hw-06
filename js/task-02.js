const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = [];

ingredients.forEach(function callback(item) {
  const ingredientsItem = document.createElement("li");

  ingredientsItem.className = "item";
  ingredientsItem.textContent = item;
  ingredientsList.push(ingredientsItem);
});

document.querySelector("#ingredients").append(...ingredientsList);