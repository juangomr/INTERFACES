var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 10,

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
        }
    }
});