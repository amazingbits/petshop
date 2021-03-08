const menuBtn = document.querySelector('#menu-change');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
  } else {
    menu.classList.add('menu-open');
  }
});
