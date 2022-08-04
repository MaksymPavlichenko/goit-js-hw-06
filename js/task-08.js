const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === "" || password === "") {
        return alert("Please, fill in your information!")
    } else {
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        console.log(formValues)

        event.currentTarget.reset()
    }
}
