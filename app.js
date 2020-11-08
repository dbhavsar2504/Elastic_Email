let logIn = document.getElementById("logIn")
let modalActive = document.querySelector(".login-container")
let close = document.querySelector(".close")

logIn.addEventListener("click", function () {
    modalActive.classList.add("login-container-active");
})
close.addEventListener("click", function () {
    modalActive.classList.remove("login-container-active");
})
