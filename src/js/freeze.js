import {
  clearStyles
} from './utils'

export const freezeHeight = () => {
  let height = $(window).innerHeight();
  
  
  if ($(window).width() < 768) {
    
    $('.js-popup-container.active:not(#company)').height(height)

    $('.js-first-slide').height(height)
  
    $(window).on('menuLoad feedbackLoad greetingsLoad', function(){
      height =  $(window).innerHeight() - height < 100 && $(window).innerHeight() > height ? $(window).innerHeight() : height;

      $('.js-popup-container.active').height(height)
      $('.js-popup-container.active').css({'border': '1px solid green'})
    })
    $(window).on('popupClosed', function(){
      clearStyles($('.js-popup-container'))
    })
  }
  else {
    clearStyles($('.js-popup-container'))
  }
  
  
}