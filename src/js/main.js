/**
 * Global deps, included in html:
 * - jquery;
 * - fullpage;
 */

import {
  detectIE
} from './detectIE'

if (detectIE()) {
  $('html').addClass('is-ie')
}

import {
  initFullPage
} from './initFullPage'


initFullPage()

import {
  showNextSlide,
  controlSlidesContent,
  showSpecificSlide,
  showMobileHistory,
  controlFullPageScroll,
} from './fullPageControl'



controlFullPageScroll()
$(window).resize(() => controlFullPageScroll())

controlSlidesContent()



function switchBtnRoles() {
  if ($(window).width() > 768) {
    showSpecificSlide()
    showNextSlide()
  }
  else {
    showMobileHistory()
  }
}
switchBtnRoles()
$(window).resize(() => {
  switchBtnRoles()
})

import {
  openPopup
} from './popup'

openPopup('.js-menu-btn')
openPopup('.js-company-btn')
openPopup('.js-feedback-btn')
openPopup('.js-greetings-btn')
openPopup('.js-history-btn')

import {
  animateFirstSlide
} from './animations'




import checkUrlHash from './checkUrlHash'




$(window).on('load', function(){
  checkUrlHash()
})

import {
  clearHash,
  changeHash,
  clearStyles
} from './utils'

$('.js-clear-hash').on('click', function(){
  clearHash()
})

$('.js-change-hash').on('click', function(){
  changeHash($(this))
})



import {
  sendFeedback,
} from './feedback'


sendFeedback()


import {
  initGreetingsSlider 
} from "./sliders";


initGreetingsSlider()

$(window).on('load', function(){
  $('.js-loader').addClass('is-hidden')
  animateFirstSlide()
})

import { loadYoutube } from "./youtube";

loadYoutube()