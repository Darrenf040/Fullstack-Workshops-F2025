const openBtn = document.querySelector(".hamburger-menu-container");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-menu");

const projectWindowTitle = document.querySelector(".project-info-title");
const projectWindowThumbnail = document.querySelector(".project-info-thumbnail");
const projectWindowDescription = document.querySelector(".project-info-description");

const projectWindow = document.querySelector(".project-info");
const projectCloseBtn = document.querySelector(".project-info-close-button");

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
