const hamburgerButton = document.querySelector("#hamburguer-buttom");
const closeButton = document.querySelector("#close-button");

const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});