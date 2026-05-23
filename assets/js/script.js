'use strict';

// element toggle helper
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// sidebar (mobile)
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// page navigation: clicking a nav link activates the matching <article data-page="...">
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const activatePage = (target) => {
  pages.forEach((p) => p.classList.toggle("active", p.dataset.page === target));
  navigationLinks.forEach((nl) =>
    nl.classList.toggle("active", nl.innerHTML.trim().toLowerCase() === target)
  );
  window.scrollTo(0, 0);
};

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    activatePage(this.innerHTML.trim().toLowerCase());
  });
});
