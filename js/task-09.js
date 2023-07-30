const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const spanColorValue = document.querySelector('.color');

button.addEventListener('click', onClick);
function onClick(evt) {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColorValue.textContent = randomColor;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
