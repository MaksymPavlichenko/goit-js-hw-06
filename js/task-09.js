function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBgColorBtn = document.querySelector(".change-color");
const bgColorValue = document.querySelector(".color");

changeBgColorBtn.addEventListener("click", onChangeBgColorBtn);

function onChangeBgColorBtn() {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = bgColor;
  bgColorValue.textContent = bgColor;
}
