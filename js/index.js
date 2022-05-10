const menu = document.getElementById('menu');
const navLinks = document.getElementById('navigation-links');
const logo = document.getElementById('logo');
const navAnchor = document.querySelectorAll('.nav-link');
const nav = document.querySelector('nav');

function toggleMenu() {
  menu.classList.toggle('menu-active');
  navLinks.classList.toggle('nav-active');
  logo.classList.toggle('hidden');
  nav.classList.toggle('active');
}

menu.addEventListener('click', toggleMenu);

navAnchor.forEach(
  (navAnchors) => {
    navAnchors.addEventListener('click', toggleMenu);
  },
);