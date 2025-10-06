const openBtn = document.querySelector(".hamburger-menu-container");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-menu");

const projectWindowTitle = document.querySelector(".project-info-title");
const projectWindowThumbnail = document.querySelector(".project-info-thumbnail");
const projectWindowDescription = document.querySelector(".project-info-description");

const projectWindow = document.querySelector(".project-info");
const projectCloseBtn = document.querySelector(".project-info-close-button");

const projects = {
  "project-1": {
    name: "Portfolio Site",
    img_src: "./images/portfolio-site-thumbnail.png",
    description: "This was one of the first websites I ever created: a portfolio for myself. It includes all of my important information, some projects, and a drawing system that allows visitors to draw post-it notes on my website. You can see everything anyone has drawn! Here is the link if you would like to visit it: https://professional-website-626228053985.us-south1.run.app/",
  },
};

const openProjectWindow = (clickEventInfo) => {
  const id = clickEventInfo.currentTarget.id;
  const project = projects[id];
  projectWindowTitle.textContent = project.name;
  projectWindowThumbnail.src = project.img_src;
  projectWindowDescription.textContent = project.description;

  projectWindow.className = "project-info";
};

projectCloseBtn.addEventListener("click", () => {
  projectWindow.className = "hide project-info";
});

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
