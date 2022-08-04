const refs = {
    input: document.getElementById("font-size-control"),
    spanTextSize: document.getElementById("text"),
}

refs.input.addEventListener("input", onInputChange);

function onInputChange() {
    refs.spanTextSize.style.fontSize = `${refs.input.value}px`;
}