var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    grabCursor: true,
  },

  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesrPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
