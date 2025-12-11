document.getElementById("submit").addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const valid = [];
  const inputs = [];
  const imgs = [];
  for (let i = 1; i <= 4; i++) {
    valid[i] = document.getElementById(`valid${i}`);
    inputs[i] = document.querySelector(`.inputs${i}`);
    imgs[i] = document.querySelector(`.imgs${i}`);
  }

  // Validasi First Name
  if (firstName === "") {
    valid[1].innerText = "First name cannot be blank";
    inputs[1].style.border="1px solid red";
    imgs[1].style.display="block";
  } else {
    valid[1].innerText = "";
    inputs[1].style.border="1px solid black";
    imgs[1].style.display="none";
    localStorage.setItem("firstName",firstName);
  }

  // Validasi Last Name
  if (lastName === "") {
    valid[2].innerText = "Last name cannot be blank";
    inputs[2].style.border="1px solid red";
    imgs[2].style.display="block";
  } else {
    valid[2].innerText = "";
    inputs[2].style.border="1px solid black";
    imgs[2].style.display="none";
    localStorage.setItem("lastName",lastName);
  }

  // Validasi Email
  if (email === "") {
    valid[3].innerText = "Email cannot be blank";
    inputs[3].style.border="1px solid red";
    imgs[3].style.display="block";
  } else if (!email.includes("@")) {
    valid[3].innerText = "Email must contain '@'";
    inputs[3].style.border="1px solid red";
    imgs[3].style.display="block";
  } else {
    valid[3].innerText = "";
    inputs[3].style.border="1px solid black";
    imgs[3].style.display="none";
    localStorage.setItem("email",email);
  }

  // Validasi Password
  if (password === "") {
    valid[4].innerText = "Password cannot be blank";
    inputs[4].style.border="1px solid red";
    imgs[4].style.display="block";
  } else if (password.length <= 5) {
    valid[4].innerText="Password must be at least 6 characters";
    inputs[4].style.border="1px solid red";
    imgs[4].style.display="block";
  } else {
    valid[4].innerText = "";
    inputs[4].style.border="1px solid black";
    imgs[4].style.display="none";
    localStorage.setItem("password",password);
  }
});
