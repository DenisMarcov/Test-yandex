const swiper1 = new Swiper('.mySwiper1', {
    navigation: {
      nextEl: '.mySwiper1 .swiper-button-next', // Кнопка "вперед"
      prevEl: '.mySwiper1 .swiper-button-prev', // Кнопка "назад"
    },
    pagination: {
        el: '.mySwiper1 .swiper-pagination',  // Селектор для элемента пагинации
        clickable: true,           // Включаем кликабельность точек пагинации
      },
    speed: 400, // Скорость анимации
    spaceBetween: 100, // Пространство между слайдами
  });

  const swiper2 = new Swiper('.mySwiper2', {
    navigation: {
      nextEl: '.mySwiper2 .swiper-button-next', // Кнопка "вперед"
      prevEl: '.mySwiper2 .swiper-button-prev', // Кнопка "назад"
    },
    pagination: {
        el: '.mySwiper2 .swiper-pagination',  // Селектор для элемента пагинации
        type: 'fraction',
      },
    speed: 400, // Скорость анимации
    spaceBetween: 100, // Пространство между слайдами
  });