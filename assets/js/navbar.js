// Accordion Action
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
    el.addEventListener("click", () => {
        if (el.classList.contains("active")) {
            el.classList.remove("active");
        } else {
            accordionItem.forEach((el2) => el2.classList.remove("active"));
            el.classList.add("active");
        }
    })
);
document.querySelectorAll('.main .accordion-item .title').forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        // Dependiendo del ítem sobre el que se hace hover, cambia la imagen de fondo.
        document.querySelector('.background-image').style.backgroundImage = `url('assets/img/navbar/nav-img-${index + 1}.jpg')`;
    });
});
const navToggler = document.getElementById('nav-toggler');
const accordion = document.querySelector('.main .accordion');

navToggler.addEventListener('change', function () {
    if (this.checked) {
        // Si el nav-toggler está marcado, muestra el acordeón
        accordion.style.display = 'block';
    } else {
        // Si no está marcado, oculta el acordeón
        accordion.style.display = 'none';
    }
});
// Encuentra todos los enlaces con clase "paragraph" dentro del acordeón
const menuLinks = document.querySelectorAll('.accordion .paragraph');

// Añade un listener a cada enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Si navToggler está marcado (el menú está abierto), desmarcarlo para cerrar el menú
        if (navToggler.checked) {
            navToggler.checked = false;
            // Opcionalmente, disparar el evento de cambio manualmente si es necesario
            navToggler.dispatchEvent(new Event('change'));
        }
    });
});
