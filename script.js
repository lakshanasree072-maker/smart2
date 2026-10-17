

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const bioInput = document.getElementById("bio");

const submitBtn = document.getElementById("submitBtn");
const counter = document.getElementById("counter");
const message = document.getElementById("message");

function validateForm() {
    const nameValid = nameInput.value.trim() !== "";

    const emailValid =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());

    const passwordValid = passwordInput.value.length >= 6;

    const bioValid = bioInput.value.length <= 200;

    document.getElementById("nameError").textContent =
        nameValid ? "" : "Name is required.";

    document.getElementById("emailError").textContent =
        emailValid ? "" : "Enter a valid email address.";

    document.getElementById("passwordError").textContent =
        passwordValid ? "" : "Password must be at least 6 characters.";

    counter.textContent =
        bioInput.value.length + " / 200 characters";

    submitBtn.disabled = !(
        nameValid && emailValid && passwordValid && bioValid
    );

    message.textContent = "";
}

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
bioInput.addEventListener("input", validateForm);

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    validateForm();

    if (!submitBtn.disabled) {
        message.textContent = "Registration successful!";
        this.reset();
        validateForm();
    }
});

validateForm();
