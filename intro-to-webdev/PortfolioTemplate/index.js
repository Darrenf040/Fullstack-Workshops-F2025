const openBtn = document.querySelector(".hamburger-menu-container");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-menu");

const projectWindowTitle = document.querySelector(".project-info-title");
const projectWindowThumbnail = document.querySelector(
  ".project-info-thumbnail"
);
const projectWindowDescription = document.querySelector(
  ".project-info-description"
);

const projectWindow = document.querySelector(".project-info");
const projectCloseBtn = document.querySelector(".project-info-close-button");

const projects = {
  "project-1": {
    name: "my first project!",
    imgSrc: "https://picsum.photos/300/200",
    description:
      "this is my very first project. i am very proud of it. please don't be mean to it.",
  },
  "project-2": {
    name: "my first second project!",
    imgSrc: "https://picsum.photos/300/200",
    description:
      "this is my very second project. i am not very proud of it. please do be mean to it.",
  },
};

const openProjectWindow = (event) => {
  console.log(event.target);
  console.log(event.target.id);
  const projectToDisplay = projects[event.currentTarget.id];
  projectWindowTitle.textContent = projectToDisplay.name;
  projectWindowThumbnail.src = projectToDisplay.imgSrc;
  projectWindowDescription.textContent = projectToDisplay.description;

  projectWindow.className = "project-info";
};

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

projectCloseBtn.addEventListener("click", () => {
  projectWindow.className = "hide project-info";
});
