const elForm = document.querySelector("#form__log");
const elEmail = document.querySelector(".inputs__name");
const elPassword = document.querySelector(".inputs__password");
const elLogin = document.querySelector(".inputs__btn");
const elbtn = document.querySelector(".header__btn");

elEmail.addEventListener("keyup", () => {
  if (elEmail.value.length == 0 || elEmail.value.length < 6) {
    elEmail.style.border = "1px solid red";
    console.log(elEmail);
  } else {
    elEmail.style.border = "1px solid green";
  }
});

elPassword.addEventListener("keyup", () => {
  if (elPassword.value.length == 0 || elPassword.value.length < 6) {
    elPassword.style.border = "1px solid red";
    console.log(elEmail);
  } else {
    elPassword.style.border = "1px solid green";
  }
});

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (elEmail.value.length == 0 || elEmail.value.length > 6) {
    elEmail.style.border = "1px solid red";
    if (elEmail.value.length == 0) {
      alert(`Please fill the required `);
    }
  } else {
    elEmail.style.border = "1px solid green";
    alert(`Please fill the required `);
  }
  if (elPassword.value.length == 0 || elPassword.value.length > 6) {
    elPassword.style.border = "1px solid red";
  } else {
    elPassword.style.border = "1px solid green";
    alert(`Please fill the required `);
  }
  if (elEmail.value.length > 6 && elPassword.value.length > 6) {
    window.location.href = "../index.html";
    localStorage.setItem("log", "log");
  }
});
