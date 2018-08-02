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
    navigation: {
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
      950: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
    on: {
      touchStart: function () {
        const $parent = $(this)[0].$el
        $parent.addClass('active')
      },
    }
}

// Clone deep is needed to prevent multiple swipers 
// from sharing common nav settings
// ... — copies only first deep level of object
export const swiperConfig = {
  reviews: cloneDeep(reviewsAndArticlesConfig),
  articles: cloneDeep(reviewsAndArticlesConfig),
  resources: cloneDeep(defaultSwiperConfig),
  solutions:  {
    ...cloneDeep(defaultSwiperConfig),
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 11,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 11,
      },
    },
  },
  threats: {
    ...cloneDeep(defaultSwiperConfig),
    spaceBetween: 16,
  }
}