  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitBtn = document.getElementById("submitBtn");

  function validateName() {
    const error = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
      error.style.display = "block";
      return false;
    }
    error.style.display = "none";
    return true;
  }

  function validateEmail() {
    const error = document.getElementById("emailError");
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(emailInput.value)) {
      error.style.display = "block";
      return false;
    }
    error.style.display = "none";
    return true;
  }

  function validatePassword() {
    const error = document.getElementById("passwordError");
    if (passwordInput.value.length < 6) {
      error.style.display = "block";
      return false;
    }
    error.style.display = "none";
    return true;
  }

  function validateForm() {
    const valid =
      validateName() &&
      validateEmail() &&
      validatePassword();

    submitBtn.disabled = !valid;
  }

  nameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  passwordInput.addEventListener("input", validateForm);

  submitBtn.addEventListener("click", () => {
    alert("Registration Successful!");
  });