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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const navLinkMap = new Map();
sections.forEach((section) => {
  const id = section.getAttribute("id");
  const link = document.querySelector(`.nav-menu a[href*="${id}"]`);

  if (link) navLinkMap.set(id, link);
});

window.addEventListener("scroll", () => {
  const scrollDown = this.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 56;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const sectionLink = navLinkMap.get(sectionId);

    if (sectionLink) {
      const isActive =
        scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight;

      sectionLink.classList.toggle("active-link", isActive);
    }
  });
});
