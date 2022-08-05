function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input[type="number"]');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const elCollectionRef = document.getElementById('boxes');

inputRef.addEventListener("input", inputChange);
btnCreateRef.addEventListener("click", createBoxes);
btnDestroyRef.addEventListener("click", destroyBoxes);

function inputChange() {
  return inputRef.value;
}

function createBoxes (amount) {
  amount = inputRef.value;
  
  if (amount < 1 || amount > 100){
    return "THE NUMBER SHOULD BE FROM 1 TILL 100"
  } 
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const elWidth = 30 + i * 10;
    const elHeight = elWidth;
    const elBgColor = getRandomHexColor();
    const el = `<div style="width:${elWidth}px;height:${elHeight}px;background-color:${elBgColor}"></div>`;
    elements.push(el);
  }

  const boxes = elements.join('');

  elCollectionRef.insertAdjacentHTML('beforeend', boxes);
   
  inputRef.value = "";
}

function destroyBoxes() {
  elCollectionRef.innerHTML = "";
}