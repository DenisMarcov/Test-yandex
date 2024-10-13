let swiper1;
let swiper2;

function initSwiper1() {
    if (window.innerWidth < 1366) {
        if (!swiper1) {
            swiper1 = new Swiper('.mySwiper1', {
                navigation: {
                    nextEl: '.mySwiper1 .swiper-button-next',
                    prevEl: '.mySwiper1 .swiper-button-prev',
                },
                pagination: {
                    el: '.mySwiper1 .swiper-pagination',
                    clickable: true,
                },
                speed: 400,
                spaceBetween: 100,
            });
        }
    } else if (swiper1) {
        swiper1.destroy(false, true); 
        swiper1 = undefined;
    }
}

swiper2 = new Swiper('.mySwiper2', {
    navigation: {
        nextEl: '.mySwiper2 .swiper-button-next',
        prevEl: '.mySwiper2 .swiper-button-prev',
    },
    pagination: {
        el: '.mySwiper2 .swiper-pagination',
        type: 'fraction',
    },
    speed: 400,
    spaceBetween: 100,
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        }
    }
});

initSwiper1();

window.addEventListener('resize', function() {
    initSwiper1();
});