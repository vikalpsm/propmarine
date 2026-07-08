const header = document.querySelector(".site-header");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");

const closeNav = () => {
  header.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
};

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.querySelector(".nav-close").addEventListener("click", closeNav);

const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownToggle = document.querySelector(".nav-dropdown-toggle");

const closeDropdown = () => {
  navDropdown.classList.remove("is-open");
  navDropdownToggle.setAttribute("aria-expanded", "false");
};

navDropdownToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = navDropdown.classList.toggle("is-open");
  navDropdownToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!navDropdown.contains(event.target)) {
    closeDropdown();
  }
});
