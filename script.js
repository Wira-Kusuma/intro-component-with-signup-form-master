document.getElementById("submit").addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const valid = [];
  for (let i = 1; i <= 4; i++) {
    valid[i] = document.getElementById(`valid${i}`);
  }

  // Validasi First Name
  if (firstName === "") {
    valid[1].innerText = "First name cannot be blank";
  } else {
    valid[1].innerText = "";
  }

  // Validasi Last Name
  if (lastName === "") {
    valid[2].innerText = "Last name cannot be blank";
  } else {
    valid[2].innerText = "";
  }

  // Validasi Email
  if (email === "") {
    valid[3].innerText = "Email cannot be blank";
  } else if (!email.includes("@")) {
    valid[3].innerText = "Email must contain '@'";
  } else {
    valid[3].innerText = "";
  }

  // Validasi Password
  if (password === "") {
    valid[4].innerText = "Password cannot be blank";
  } else if (password.length <= 6) {
    valid[4].innerText="Password must be at least 6 characters";
  } else {
    valid[4].innerText = "";
  }
});
