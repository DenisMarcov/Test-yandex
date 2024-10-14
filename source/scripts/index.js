let swiperPlans;
let swiperPlayers;

function initSwiperPlans() {
    if (window.innerWidth < 1366) {
        if (!swiperPlans) {
            swiperPlans = new Swiper('.swiper-plans', {
                navigation: {
                    nextEl: '.swiper-plans .swiper-button-next',
                    prevEl: '.swiper-plans .swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-plans .swiper-pagination',
                    clickable: true,
                },
                speed: 400,
                spaceBetween: 100,
            });
        }
    } else if (swiperPlans) {
        swiperPlans.destroy(false, true); 
        swiperPlans = undefined;
    }
}

swiperPlayers = new Swiper('.swiper-players', {
    navigation: {
        nextEl: '.swiper-players .swiper-button-next',
        prevEl: '.swiper-players .swiper-button-prev',
    },
    pagination: {
        el: '.swiper-players .swiper-pagination',
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

initSwiperPlans();

window.addEventListener('resize', function() {
    initSwiperPlans();
});
