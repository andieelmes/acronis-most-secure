
const isMac = () => {
  return /Mac\sOS|Macintosh/ig.test(navigator.userAgent)
}

export const determineOsType = () => {
  const $osTypeTexts = $('.js-os-types')
  const os = isMac() ? 'mac' : 'pc';
  return os;
}
