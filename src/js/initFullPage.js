const $yearsContainer = $('.js-year-container')
const $years = $('.js-year-btn')

const initFullPageInstance = () => {
  $(document).ready(function() {
    $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      navigation: false,
      navigationPosition: 'right',
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',
  
      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,
  
      //Accessibility
      keyboardScrolling: true,
      animateAnchor: false,
      recordHistory: true,
  
      //Design
      controlArrows: false,
      verticalCentered: true,
      sectionsColor : ['transparent', 'transparent'],
      paddingTop: '0',
      paddingBottom: '0',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  
      //Custom selectors
      sectionSelector: '.js-section_selector',
      slideSelector: '.js-slide_selector',
  
      lazyLoading: true,
      // andieelmes.ru
      //scrollHorizontallyKey: 'YW5kaWVlbG1lcy5ydV9iS2RjMk55YjJ4c1NHOXlhWHB2Ym5SaGJHeDUzR3Y=',
      //acronis.com
      scrollHorizontallyKey: 'YWNyb25pcy5jb21faE1PYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1R01P',
      scrollHorizontally: true,
      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterResponsive: function(isResponsive){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        if (slideIndex >= 1) {
          $(window).trigger(`slideLoad`)
          const year = +slideIndex + 2002     
          $years.removeClass('active');          
          $yearsContainer.find(`[data-year=${year}]`).addClass('active')
        }
        else {
          $(window).trigger(`defaultSlideLoad`)
          $years.removeClass('active');
        }
      },
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
  });
}

const destroyFullPageInstance = () => {
  $.fn.fullpage.destroy('all');
}

export const initFullPage = () => {
  const _init = () => {
    const inited = $('html').hasClass('fp-enabled')

    if ($(window).width() > 768 && !inited) initFullPageInstance()
    else if ($(window).width() < 768 && inited) destroyFullPageInstance()
  }

  _init()
  $(window).resize(() => _init())
}