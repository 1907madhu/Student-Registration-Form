const form = document.getElementById("registrationForm");

function showError(field, message) {
  document.getElementById(field + "Error").textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((element) => {
    element.textContent = "";
  });
  document.getElementById("successMessage").textContent = "";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const course = document.getElementById("course").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;

  let isValid = true;

  if (fullName.length < 3) {
    showError("fullName", "Please enter at least 3 characters.");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError("email", "Please enter a valid email address.");
    isValid = false;
  }

  if (!/^\d{10}$/.test(phone)) {
    showError("phone", "Phone number must contain exactly 10 digits.");
    isValid = false;
  }

  if (!dob) {
    showError("dob", "Please select your date of birth.");
    isValid = false;
  } else if (new Date(dob) > new Date()) {
    showError("dob", "Date of birth cannot be in the future.");
    isValid = false;
  }

  if (!gender) {
    showError("gender", "Please select your gender.");
    isValid = false;
  }

  if (!course) {
    showError("course", "Please select a course.");
    isValid = false;
  }

  if (password.length < 8) {
    showError("password", "Password must be at least 8 characters.");
    isValid = false;
  }

  if (confirmPassword !== password || confirmPassword === "") {
    showError("confirmPassword", "Passwords do not match.");
    isValid = false;
  }

  if (!terms) {
    showError("terms", "Please accept the terms and conditions.");
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent =
      "Registration successful! Your details have been validated.";
    form.reset();
  }
});

form.addEventListener("reset", function () {
  clearErrors();
});
