document.getElementById("submit").addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();


  const valid = [];
  const inputs = [];
  for (let i = 1; i <= 4; i++) {
    valid[i] = document.getElementById(`valid${i}`);
    inputs[i] = document.querySelector(`.inputs${i}`);
  }

  // Validasi First Name
  if (firstName === "") {
    valid[1].innerText = "First name cannot be blank";
    inputs[1].style.border="1px solid red";
  } else {
    valid[1].innerText = "";
    inputs[1].style.border="1px solid black";
  }

  // Validasi Last Name
  if (lastName === "") {
    valid[2].innerText = "Last name cannot be blank";
    inputs[2].style.border="1px solid red";
  } else {
    valid[2].innerText = "";
    inputs[1].style.border="1px solid black";
  }

  // Validasi Email
  if (email === "") {
    valid[3].innerText = "Email cannot be blank";
    inputs[3].style.border="1px solid red";
  } else if (!email.includes("@")) {
    valid[3].innerText = "Email must contain '@'";
    inputs[3].style.border="1px solid red";
  } else {
    valid[3].innerText = "";
    inputs[1].style.border="1px solid black";
  }

  // Validasi Password
  if (password === "") {
    valid[4].innerText = "Password cannot be blank";
    inputs[4].style.border="1px solid red";
  } else if (password.length <= 6) {
    valid[4].innerText="Password must be at least 6 characters";
    inputs[4].style.border="1px solid red";
  } else {
    valid[4].innerText = "";
    inputs[1].style.border="1px solid black";
  }
});
