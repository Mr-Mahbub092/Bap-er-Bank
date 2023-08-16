// step-01: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // set-02: get email and password value
  const emailField = document.getElementById("email");
  const email = emailField.value;

  const passField = document.getElementById("password");
  const password = passField.value;
  console.log(email, password)

  // Step-03: Varify Email & password.
  // Danger: Do not verify email password on the client side
  if (email === "mr.mahbub0921@gmail.com" && password === "Mahbub0692") {
    window.location.href="./statement.html";
  } else {
    alert("Invalid User");
  }
});

