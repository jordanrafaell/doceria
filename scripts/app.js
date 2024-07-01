const btnMenu = document.querySelector('.btn_menu');
const navMenu = document.querySelector('.container_nav');
const nav = document.querySelectorAll('.container_list a');

btnMenu.addEventListener('click', function () {
  navMenu.classList.toggle('active_menu');
});

nav.forEach((links) => {
  links.addEventListener('click', function () {
    navMenu.classList.remove('active_menu');
  });
});


