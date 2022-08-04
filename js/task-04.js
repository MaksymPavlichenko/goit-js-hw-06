let counterValue = 0;

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.getElementById("value");

decrementButtonRef.addEventListener("click", onDecrementButtonClick);
incrementButtonRef.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
    counterValue -= 1;
    updateCounterValue();
};

function onIncrementButtonClick() {
    counterValue += 1;
    updateCounterValue();
};

function updateCounterValue() {
    counterValueRef.textContent = counterValue;
}
