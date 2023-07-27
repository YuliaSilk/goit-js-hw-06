const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();
ingredients.forEach((ingredient) => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  fragment.append(liElement);
  // console.log(liElement);
});
ulElement.append(fragment);
