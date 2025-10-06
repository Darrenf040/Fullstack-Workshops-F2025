const openBtn = document.querySelector(".hamburger-menu-container");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-menu");

openBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hide")) {
    mobileMenu.classList.remove("hide");
    mobileMenu.classList.add("show");
  }
});

closeBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("show")) {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hide");
  }
});
