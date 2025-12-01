const button = document.querySelector('.header_nav_button');
const mobileLinks = document.querySelector('.header_nav_links_mobile');

button.addEventListener('click', () => {
    button.classList.toggle('open');
    mobileLinks.classList.toggle('active');
});
