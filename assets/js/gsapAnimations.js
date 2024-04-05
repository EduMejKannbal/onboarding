
function animateTextElements(selector, triggerID) {
  const textElements = gsap.utils.toArray(selector);

  textElements.forEach(text => {
    gsap.to(text, {
      backgroundSize: '100%',
      ease: 'none',
      duration: 10,
      scrollTrigger: {
        trigger: `#${triggerID}`,
        start: 'center 80%',
        end: 'center 20%',
        scrub: true,
      },
    });
  });
}

// //CardImageHover
// function addMouseRotateEffect(className) {
//   const elements = document.querySelectorAll(`.${className}`);
//   function rotateToMouse(e) {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     elements.forEach((element) => {
//       const bounds = element.getBoundingClientRect();
//       const leftX = mouseX - bounds.x;
//       const topY = mouseY - bounds.y;
//       const center = {
//         x: leftX - bounds.width / 2,
//         y: topY - bounds.height / 2
//       };
//       const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
//       element.style.transform = `
//           scale3d(1.07, 1.07, 1.07)
//           rotate3d(
//             ${center.y / 100},
//             ${-center.x / 100},
//             0,
//             ${Math.log(distance) * 2}deg
//           )
//         `;
//     });
//   }
//   elements.forEach((element) => {
//     element.addEventListener('mouseenter', () => {
//       document.addEventListener('mousemove', rotateToMouse);
//     });

//     element.addEventListener('mouseleave', () => {
//       document.removeEventListener('mousemove', rotateToMouse);
//       element.style.transform = '';
//     });
//   });
// }

// Llamadas a funciones de animación de texto y hover ya optimizadas.

// let elements = document.querySelectorAll('.cardHorizontal');
// let active = NaN;

// function changeActive(progress) {
//   let oneElement = 1 / (elements.length - 1);
//   let activeItem = Math.round(progress.toFixed(3) / oneElement);
//   if (active !== activeItem) {
//     active = activeItem;
//     // Cambio a JavaScript puro si no deseas usar jQuery
//     document.querySelectorAll(`.a_${active}`).forEach((el) => {
//       el.classList.remove('hide');
//       el.classList.add('scale-in-tr');
//     });
//   }
// }

animateTextElements('.text, .text_span', 'container_1');
animateTextElements('.text_nuestra, .text_estructura', 'container_2');
animateTextElements('.text_nuestraR, .text_region', 'container_3');
animateTextElements('.text_mapaLatinNuestra, .text_mapaLatinRegion', 'container_4');
animateTextElements('.text_nuestraCultura, .text_diversa', 'container_5');
animateTextElements('.text_nuestraEstructura, .text_estructuraNuestra', 'container_6');

//Animaciones de imagenes hover
// addMouseRotateEffect('cardImage');
// addMouseRotateEffect('cardOrientadaCliente');
var swiper3 = new Swiper(".mySwiper3", {
  grabCursor: true,
  effect: "creative",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  on: {
    init: function () {
      this.slides.forEach((slide, index) => {
        slide.setAttribute('id', `swiper-slide-${index}`);
        slide.style.opacity = index === 0 ? '1' : '0';
      });
    },
    slideChangeTransitionEnd: function () {
      this.slides.forEach((slide, index) => {
        slide.style.opacity = index === this.activeIndex ? '1' : '0';
      });
    },
  },
});
function createReusableSwiper(selector, direction, effect) {
  return new Swiper(selector, {
    direction: direction,
    loop: true,
    effect: effect,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        this.slides.forEach((slide, index) => {
          slide.setAttribute('id', `swiper-slide-${index}`);
          slide.style.opacity = index === 0 ? '1' : '0';
        });
      },
      slideChangeTransitionStart: function () {
        this.slides.forEach(slide => {
          slide.style.opacity = '0';
        });
        this.slides[this.activeIndex].style.opacity = '1';
      },
      slideChangeTransitionEnd: function () {
        this.slides.forEach((slide, index) => {
          slide.style.opacity = index === this.activeIndex ? '1' : '0';
        });
      },
    },
  });
}

var swiperLatin = createReusableSwiper('.swiper-latin', 'horizontal', 'fade');
var swiperSostenibilidad = createReusableSwiper('.swiper-sostenibilidad', 'vertical');

AOS.init();
