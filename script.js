let headerButton = document.querySelector('.header_nav_button');

let headerLinks = document.querySelector('.header_nav_links_mobile');

function toggleMenu() {
    headerLinks.classList.toggle('active');
    headerButton.classList.toggle('open');
}

headerButton.addEventListener('click', toggleMenu);
