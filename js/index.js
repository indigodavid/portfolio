const menu = document.getElementById('menu');
const navLinks = document.getElementById('navigation-links');
const logo = document.getElementById('logo');
const navAnchor = document.querySelector('.nav-link');

function toggleMenu() {
  menu.classList.toggle('menu-active');
  navLinks.classList.toggle('nav-active');
  logo.classList.toggle('hidden');
}

menu.addEventListener('click', toggleMenu);
navAnchor.addEventListener('click', toggleMenu);
