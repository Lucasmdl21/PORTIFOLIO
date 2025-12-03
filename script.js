const button = document.querySelector('.header_nav_button');
const mobileLinks = document.querySelector('.header_nav_links_mobile');
const links = document.querySelectorAll('.header_nav_links_mobile a');

button.addEventListener('click', () => {
    button.classList.toggle('open');
    mobileLinks.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        button.classList.remove('open');
        mobileLinks.classList.remove('active');
    });
});




