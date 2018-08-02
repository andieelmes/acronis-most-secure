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
} from './sliders'


initThreatsSlider()

import { loadYoutube } from "./youtube";

loadYoutube()