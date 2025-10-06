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
    name: "This Is Project 1!!!",
    img_src: "https://picsum.photos/200/100",
    description: "project 1 sure was difficult!!! i'm glad i did it :)",
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
