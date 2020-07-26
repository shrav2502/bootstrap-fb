const username = document.getElementById("input");
const password = document.getElementById("inputPassword");
const login = document.getElementById("login");
const username1 = document.getElementById("inputEmail3");
const password1 = document.getElementById("inputPassword2");
const number = document.getElementById("inputPassword3");
const female = document.getElementById("customRadioInline2");
const male = document.getElementById("customRadioInline1");
const other = document.getElementById("customRadioInline3");
const signup = document.getElementById("sign-up");

login.addEventListener("click", function () {
  if (username.value.length > 0 && password.value.length > 0) {
    window.location.href = "feed.html";
  } else {
    alert("Enter Valid Input");
  }
});

signup.addEventListener("click", function () {
  if (
    username1.value.length > 0 &&
    password1.value.length > 0 &&
    number.value.length > 0
  ) {
    window.location.href = "feed.html";
  } else {
    alert("Enter Valid Input");
  }
});
