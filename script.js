//your JS code here. If required.


const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// 👉 Check if user already exists in localStorage
function checkExistingUser() {
  const savedUser = localStorage.getItem("username");

  if (savedUser) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

// 👉 Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save data
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove data
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkExistingUser();
});

// 👉 Login as existing user
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");

  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});

// 👉 Run on page load
checkExistingUser();