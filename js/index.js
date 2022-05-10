const menu = document.getElementById('menu');
const navLinks = document.getElementById('navigation-links');
const logo = document.getElementById('logo');
const navAnchor = document.querySelectorAll('.nav-link');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const envelope = document.getElementById('envelope');
const whiteBar = document.getElementById('white-bar');

function toggleMenu() {
  menu.classList.toggle('menu-active');
  navLinks.classList.toggle('nav-active');
  logo.classList.toggle('hidden');
  nav.classList.toggle('active');
  header.classList.toggle('active');
  envelope.classList.toggle('active');
  whiteBar.classList.toggle('active');
}

menu.addEventListener('click', toggleMenu);

navAnchor.forEach(
  (navAnchors) => {
    navAnchors.addEventListener('click', toggleMenu);
  },
);