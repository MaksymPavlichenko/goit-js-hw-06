const refs = {
    input: document.getElementById("name-input"),
    output: document.getElementById("name-output"),
};

refs.input.addEventListener("input", newName);

function newName(event) {
    refs.output.textContent = 
    event.currentTarget.value === ""
    ? "Anonymous"
    : event.currentTarget.value;
};