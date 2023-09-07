document.addEventListener("DOMContentLoaded", function () {
    const createAccountBtn = document.getElementById("createAccountBtn");
    const loginBtn = document.getElementById("loginBtn");
    const createAccountSection = document.getElementById("createAccountSection");
    const loginSection = document.getElementById("loginSection");

    createAccountBtn.addEventListener("click", function () {
      createAccountSection.classList.add("active");
      loginSection.classList.remove("active");
    });

    loginBtn.addEventListener("click", function () {
      createAccountSection.classList.remove("active");
      loginSection.classList.add("active");
    });
  });

//NOW INCLUDING JS FOR LOGGING




/* JavaScript code (included at the end of your HTML) */
const darkModeToggle = document.getElementById("darkModeToggle");
const container = document.querySelector(".container");
const registrationForm = document.getElementById("registration_form");
const loginForm = document.getElementById("login_form");

// Dark mode toggle functionality
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  container.classList.toggle("dark-mode");
  registrationForm.classList.toggle("dark-mode");
  loginForm.classList.toggle("dark-mode");
});


