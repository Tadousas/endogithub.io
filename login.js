function login() {
  var username = document.forms[0]["username"].value;
  var password = document.forms[0]["password"].value;

  if ((username == "Tadas" || username == "Vilius") && (password == "Syvokas" || password == "Zernys")) {
    window.location.href = "index.html";
    return false;
  } else {
    var errorElement = document.getElementById("error-message");
    errorElement.innerHTML = "Invalid username or password.";
    errorElement.style.display = "block";
    return false;
  }
}