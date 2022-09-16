//Getting elements

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

//Activating menu on hamburger click

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
