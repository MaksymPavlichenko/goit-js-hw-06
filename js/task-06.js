const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", onInputColor);

function onInputColor(event) {
    event.currentTarget.value.length === Number(inputRef.getAttribute("data-length"))
    ? setCalssValid()
    : setCalssInvalid();
}

function setCalssValid() {
    if (!inputRef.hasAttribute("class")) inputRef.classList.add("valid");
    if (inputRef.classList.contains("invalid")) inputRef.classList.replace("invalid", "valid");
}

function setCalssInvalid() {
    if (!inputRef.hasAttribute("class")) inputRef.classList.add("invalid");
    if (inputRef.classList.contains("valid")) inputRef.classList.replace("valid", "invalid");
}