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

    // animacao letras para PC
const spanRotate = document.querySelector(".rotate");

const words = [
    "FRONT-END",
    "DESIGN",
    "UI / UX",
    "JAVASCRIPT",
    "CRIADOR"
];

let index = 0;

function changeWord() {
    spanRotate.classList.remove("fade");

    setTimeout(() => {
        spanRotate.textContent = words[index];
        spanRotate.classList.add("fade");

        index = (index + 1) % words.length;
    }, 200);
}

changeWord();
setInterval(changeWord, 2000); // troca a cada 2 segundos


    // animacao letras para MOBILE
const spanRotateMobile = document.querySelector(".rotate_mobile");

const wordsMobile = [
    "DEV",
    "MOBILE",
    "CREATOR",
    "JS",
    "UI/UX"
];

let indexMobile = 0;

function changeWordMobile() {
    spanRotateMobile.classList.remove("fade_mobile");

    setTimeout(() => {
        spanRotateMobile.textContent = wordsMobile[indexMobile];
        spanRotateMobile.classList.add("fade_mobile");

        indexMobile = (indexMobile + 1) % wordsMobile.length;
    }, 200);
}

changeWordMobile();
setInterval(changeWordMobile, 2000);


  AOS.init({
    duration: 1200,   // tempo da animação
    once: true,      
  });


