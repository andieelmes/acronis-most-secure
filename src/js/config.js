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

// Clone deep is needed to prevent multiple swipers 
// from sharing common nav settings
// ... — copies only first deep level of object
export const swiperConfig = {
  greetings: {
    ...cloneDeep(defaultSwiperConfig),
    slidesPerView: 3,
    spaceBetween: 1,
    loop:true,
    navigation: {
      nextEl: '.js-swiper-next',
    },
    breakpoints: {
      1920: {
        slidesPerView: 3,
      },
      1700: {
        slidesPerView: 2,
      },
      1000: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
    },
  },
}