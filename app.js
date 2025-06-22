
function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const user = { name, email, password };
  localStorage.setItem("learnx_user", JSON.stringify(user));
  localStorage.setItem("isLoggedIn", "true");
  alert("Signup successful!");
  window.location.href = "dashboard.html";
}


function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedUser = JSON.parse(localStorage.getItem("learnx_user"));
  if (savedUser && savedUser.email === email && savedUser.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password.");
  }
}


function checkAuth() {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please log in first.");
    window.location.href = "login.html";
  }
}


function logout() {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out!");
  window.location.href = "login.html";
}
