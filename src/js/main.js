/**
 * Global deps, included in html:
 * - jquery;
 */

import {
  detectIE
} from './detectIE'

if (detectIE()) {
  $('html').addClass('is-ie')
}

import {
  initThreatsSlider,
  initCasesSlider,
  initRestoresSlider,
} from './sliders'


initThreatsSlider()
initCasesSlider()
initRestoresSlider()

import { loadYoutube } from "./youtube";

loadYoutube()

import { animateSequence } from "./animation";

animateSequence()