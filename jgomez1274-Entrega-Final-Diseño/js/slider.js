var swiper = new Swiper(".swiper-container", {
  
  pagination: {
    el: ".swiper-pagination",
  },
  clickable: true,
  grabCursor: true,

  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesrPerView: 2,
      spaceBetween: 10,
    },
    980: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
