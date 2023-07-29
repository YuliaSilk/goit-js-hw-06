const validationInput = document.getElementById("validation-input");
const requiredLength = parseInt(validationInput.getAttribute("data-length"), 10);

function validateInput() {
    const inputValue = validationInput.value.trim();
    const isValid = inputValue.length === requiredLength;

    if (isValid) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } 
    else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
}
validationInput.addEventListener("blur", validateInput);

