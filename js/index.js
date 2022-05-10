const menu = document.getElementById('menu');
const navLinks = document.getElementById('navigation-links');

menu.addEventListener('click', function (){
  menu.classList.toggle('menu-active');
  navLinks.classList.toggle('nav-active');
})