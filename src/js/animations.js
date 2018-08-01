import Typed from 'typed.js';

import './requestAnimationFramePolyfill.js';

import { clearStyles } from "./utils";

import {
  determineOsType
} from './detectOS'





export const typing = (selector, delay, duration) => {
  if (!determineOsType() == 'mac' || $(window).width() < 768) return false
  const $el = $(selector);
  let start = null
  function typeWriter(counter, text, node, step, duration) {

    if (!start) start = duration
    const progress = duration - start;

    if ( progress < step && counter < text.length) {
      const toAppend = node.text() + text.charAt(counter);
      node.text(toAppend)
      counter++;
      window.raf(() => typeWriter(counter, text, node, step, duration));
      return;
    }


  }

  $el.each(function(){
    const self = $(this);
    const text = self.text();
    const initialWidth = self.outerWidth();
    const initialHeight= self.outerHeight();
    self.css({
      'width': initialWidth,
      'height': initialHeight,
    })
    const counter = 0
    self.text('')
    const step = Math.round(duration/text.length)
    
    setTimeout(() => typeWriter(counter, text, self, step, duration), delay);

    setTimeout(() => clearStyles(self), 6000); 
  });

}


export const animateFirstSlide = () => {
  const $wrapper = $('.js-first-animation-block');
  $wrapper.addClass('before-anim');
  setTimeout(() => {
    $wrapper.removeClass('before-anim');
  }, 20);


  typing('.js-header-link', 1000, 1000)
  typing('.js-terms-link', 1000, 1000)
  typing('.js-main-header', 1500, 2000)
  
}
