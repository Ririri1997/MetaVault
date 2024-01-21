'use strict'

//theme
const headerMode = document.querySelector('.header-mode');


headerMode.addEventListener('click', function() {
  if (!document.body.hasAttribute('light')) {
    document.body.setAttribute('light', '');
  } else {
    document.body.removeAttribute('light');
  }
});
//  Переход по якорным ссылкам
const anchors = document.querySelectorAll(".scroll-to");
const menuItems = document.querySelectorAll(".link-nav");

anchors.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 120;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// переход по якорным ссылкам из мобильного меню
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
   toggleMenu();
   body.classList.remove('no-scroll');
  });
});

//slider
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },

});

//animate 
new WOW().init();