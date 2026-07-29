/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  }),
);

/*=============== ADD SHADOW HEADER ===============*/
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  window.scrollY >= 70
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
});
