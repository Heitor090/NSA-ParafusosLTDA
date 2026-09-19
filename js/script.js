
// =============================
// MENU MOBILE
// =============================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Fecha o menu ao clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// =============================
// FORMULÁRIO DE ORÇAMENTO
// =============================

const form = document.getElementById("quoteForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const product = document.getElementById("product").value.trim();

    const message = document.getElementById("message").value.trim();


    // Número do WhatsApp da loja
    // Substitua pelo número real.
    // Formato: código do país + DDD + número
    // Exemplo: 5511999999999

    const whatsappNumber = "5511999621292";


    const text =
        `Olá, N S A Comércio de Parafusos!%0A%0A` +
        `Gostaria de solicitar um orçamento.%0A%0A` +
        `Nome: ${name}%0A` +
        `Telefone: ${phone}%0A` +
        `Produto: ${product}%0A` +
        `Mensagem: ${message}`;


    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=${text}`;


    window.open(whatsappUrl, "_blank");

});


// CARROSSEL 


const carouselTrack = document.querySelector(".carousel-track");

const carouselImages = document.querySelectorAll(
    ".carousel-track img"
);

let currentSlide = 0;

function nextSlide() {

    currentSlide++;

    if (currentSlide >= carouselImages.length) {
        currentSlide = 0;
    }

    carouselTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;
}


// Troca a imagem automaticamente
setInterval(nextSlide, 2500);