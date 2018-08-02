import cloneDeep from 'lodash/cloneDeep'


// function addActiveClass($el) {
//   $el.addClass('active')
// }

// Swipers config:
export const defaultSwiperConfig = {
  loop: false,
  slidesPerView: 'auto',
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  observer: true,
  observeParents: true,
  
}



const reviewsAndArticlesConfig = {
    ...cloneDeep(defaultSwiperConfig),
    spaceBetween: 11,
    slidesPerView: 3,
    slidesPerColumn: 1,
    loop: true,

    breakpoints: {
      1000: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
}

// Clone deep is needed to prevent multiple swipers 
// from sharing common nav settings
// ... — copies only first deep level of object
export const swiperConfig = {
  threats: {
    ...cloneDeep(defaultSwiperConfig),
    spaceBetween: 16,
    navigation: {
      nextEl: '.js-threats-slider .swiper-button-next',
      prevEl: '.js-threats-slider .swiper-button-prev',
    },
  },
  cases: {
    ...cloneDeep(defaultSwiperConfig),
    spaceBetween: 25,
  },
  restore: {
    ...cloneDeep(defaultSwiperConfig),
    spaceBetween: 16,
    navigation: {
      nextEl: '.js-restore-slider .swiper-button-next',
      prevEl: '.js-restore-slider .swiper-button-prev',
    },
  },
  
}