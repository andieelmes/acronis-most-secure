
import {
  freezeHeight 
} from "./freeze";




/**
 * shows certain block by clicking on corresponding link
 * block set depends on url hash
 * @param {String} urlHash 
 * @return
 */
function showCertainBlock(urlHash) {
  //freezeHeight()
  $(`[href="#${urlHash}"]`).click()
  $(window).trigger(`${urlHash}Load`)
 
}

function showHistory(urlHash) {
  const $btn = $('.js-show-mobile-history');
  // if ($(window).width() < 768) {
    
  // }

  $btn.click()
 
}

function showInnerMenuBlock(urlHash) {
  //freezeHeight()
  $(`[href="#menu"]`).click()
  setTimeout(() => {
    $(`[href="#${urlHash}"]`).click()
  }, 200);
  $(window).trigger(`menuLoad`)
}

/** 
 * calls the matching function based on url hash
 * @return
*/
const checkUrlHash = () => {
  const urlHash = location.hash.replace('#', '');
  if (!urlHash) return

  const determineFunctionBasedOnUrl = {
    'feedback': showCertainBlock.bind(null, urlHash),
    'menu': showCertainBlock.bind(null, urlHash),
    'company': showInnerMenuBlock.bind(null, urlHash),
    'greetings': showCertainBlock.bind(null, urlHash),
    'history': showHistory.bind(null, urlHash),
  }

  const func = determineFunctionBasedOnUrl[urlHash]
  if (!func) return 
  
  func()
}

export default checkUrlHash