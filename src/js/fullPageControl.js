import {
  typing
} from './animations'

import {
  initGreetingsSlider
} from './sliders'

export const showNextSlide = () => {
  const $btn = $('.js-next-slide');
  $btn.on('click', function(){
    $.fn.fullpage.moveSlideRight();
    typing(`.js-years-slide.active .js-section-header`, 500, 1000)
  })
}

export const controlSlidesContent = () => {
  const fixedYearsSelector = '.js-years'
  
 
  $(window).on(`slideLoad`, () => {
    $(fixedYearsSelector).removeClass('is-hidden')
   
  })
  $(window).on(`defaultSlideLoad`, () => {
    $(fixedYearsSelector).addClass('is-hidden')
  })
  
  const fixedMenuSelector = '.js-menu'
  const fixedFooterLinksSelector = '.js-terms'

  $(window).on(`menuLoad`, () => {
    $(fixedMenuSelector).addClass('is-hidden')
    $(fixedFooterLinksSelector).addClass('is-hidden')
    $(fixedYearsSelector).addClass('is-hidden')
    //console.log('menu');
    controlFullPageScroll()
    if ($('html').hasClass('fp-enabled'))  $.fn.fullpage.setMouseWheelScrolling(false);
   
  })
  

  $(window).on(`feedbackLoad`, () => {
    $(fixedMenuSelector).removeClass('is-hidden')
    $(fixedFooterLinksSelector).removeClass('is-hidden')
    $(fixedYearsSelector).removeClass('is-hidden')
    //console.log('feedback');
    controlFullPageScroll()
    if ($('html').hasClass('fp-enabled'))  $.fn.fullpage.setMouseWheelScrolling(false);
   
  })

  $(window).on(`greetingsLoad`, () => {
    $(fixedYearsSelector).addClass('is-hidden')   
    $(fixedMenuSelector).removeClass('is-hidden')
    $(fixedFooterLinksSelector).removeClass('is-hidden')

    
    //initGreetingsSlider()
    $(window).trigger('updateSwipers-greetings')

    controlFullPageScroll()
    if ($('html').hasClass('fp-enabled'))  $.fn.fullpage.setMouseWheelScrolling(false);
  })

  $(window).on(`historyLoad`, () => {
    $(fixedMenuSelector).removeClass('is-hidden')
    $(fixedFooterLinksSelector).removeClass('is-hidden')
    $(fixedYearsSelector).addClass('is-hidden')
    const activeSlide = $('.fp-slide.active');
    //console.log('history');
    controlFullPageScroll()
    if ($('html').hasClass('fp-enabled'))  $.fn.fullpage.setMouseWheelScrolling(true);
   
    if (!activeSlide.hasClass('js-first-slide') && !!activeSlide.length) $(fixedYearsSelector).removeClass('is-hidden')
    
  })

  
  $(window).on(`firstYearLoad`, () => {
    $(fixedMenuSelector).removeClass('is-hidden')
    $(fixedFooterLinksSelector).removeClass('is-hidden')
    $(fixedYearsSelector).removeClass('is-hidden')
    //console.log('first');
    if ($('html').hasClass('fp-enabled')) {
      $.fn.fullpage.setMouseWheelScrolling(true);
      $.fn.fullpage.silentMoveTo('history', 2003);
    } 
  })
}

export const showSpecificSlide = () => {
  const $btn = $('.js-show-slide');
  $btn.each(function(){
    const self = $(this);

    const year = self.attr('data-year')
    
    self.on('click', function(e){
      $.fn.fullpage.silentMoveTo('history', year);
      typing(`.js-years-slide[data-anchor=${year}] .js-section-header`, 500, 1000)
    })
  });
}


export const showMobileHistory = () => {
  const $btn = $('.js-show-mobile-history');
  const $firstSlide = $('.js-first-slide');
  const $slides = $('.js-years-slide')

  const $closeBtn = $('.js-popup-close')
  const $closeAllBtn = $('.js-close-all-popups');
  const $openPopupBtn = $('[data-popup]')
  $btn.on('click', function(){
    $slides.addClass('active-mobile')
    $firstSlide.addClass('hidden-mobile')
    location.hash = 'history'
  })
  function closeHistory() {
    $slides.removeClass('active-mobile')
    $firstSlide.removeClass('hidden-mobile')
   
  }
  function closeHistoryAndClearHash() {
    closeHistory()
    location.hash = ''
    $(window).trigger(`historyLoad`)
  }
  $closeAllBtn.on('click', closeHistoryAndClearHash)

  $closeBtn.on('click', closeHistory)

  $openPopupBtn.on('click', closeHistory)

}

export const controlFullPageScroll = () => {

  const popupIsOpen = $('.js-popup-container').hasClass('active')
  
  

  if ($(window).width() < 768 && $('html').hasClass('fp-enabled')) {
    $.fn.fullpage.setMouseWheelScrolling(false);
  }
  else if ($(window).width() > 768 && !popupIsOpen && $('html').hasClass('fp-enabled')){
    $.fn.fullpage.setMouseWheelScrolling(true);
  }
  
  else if ($(window).width() > 768 && popupIsOpen && $('html').hasClass('fp-enabled')) {
    $.fn.fullpage.setMouseWheelScrolling(false);
    
  }
  
}

