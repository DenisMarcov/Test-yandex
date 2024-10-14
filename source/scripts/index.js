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
    renderFraction: (currentClass, totalClass) => `
      <span class="${currentClass}"></span><span class="slash-pagination">/</span>
      <span class="${totalClass}"></span>`,
  },
  observer: true,
  observeParents: true,
  speed: 400,
  spaceBetween: 100,
  on: {
    init() {
      setTimeout(updateFraction, 0, this)
    },
    slideChange() {
      updateFraction(this);
    },
    resize() {
      updateFraction(this);
    },
  },
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

window.addEventListener('resize', function () {
  initSwiperPlans();
});

function updateFraction(slider) {
  const { params, activeIndex } = slider;
  const currentElement = slider.pagination.el.querySelector(`.${params.pagination.currentClass}`);
  const totalElement = slider.pagination.el.querySelector(`.${params.pagination.totalClass}`);

  if (currentElement && totalElement) {
    const totalSlides = slider.slides.length;
    currentElement.textContent = `${activeIndex + params.slidesPerView}`;
    totalElement.textContent = `${totalSlides}`;
  }
}