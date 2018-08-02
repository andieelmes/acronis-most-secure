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
} from './sliders'


initThreatsSlider()
initCasesSlider()

import { loadYoutube } from "./youtube";

loadYoutube()