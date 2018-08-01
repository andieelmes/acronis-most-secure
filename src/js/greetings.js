import {
  smoothScrollInsideParent
} from './utils'



export const showGreetings = () => {
  const $names = $('.js-greeting-name')
  const $container = $('.js-greeting-names')
  const $containerInner = $('.js-greeting-names-inner')
  const $greetings = $('.js-greeting-item')

  let canChangeActive = true
  let canChangeAuto = true
  let autoScrollStopped = false;
  let halfHeight = $(window).height()/2

  // $(window).resize(() => halfHeight = $(window).height()/2)

  function onScroll(e) {
    if (!canChangeActive) return;

    $names.each(function () {
      const $current = $(this);
      const greetingNumber = +$current.attr("data-greeting-number")
      const $greeting = $(`[data-greeting=${greetingNumber}]`);


      if (!$greeting.length) return false;
      
      if ($current.offset().top <= halfHeight) {
          $names.removeClass("active");
          $greetings.removeClass("active")

          $current.addClass("active");
          $greeting.addClass("active")
      }
      else{
          $current.removeClass("active");
      }
    });
  }

  function showGreeting() {
    $names.on('click', function(){
      const $self = $(this);
      const greetingNumber = +$self.attr("data-greeting-number")
      const $greeting = $(`[data-greeting=${greetingNumber}]`);

      $names.removeClass("active");
      $greetings.removeClass("active")

      $self.addClass("active");
      $greeting.addClass("active").removeClass('active-next')

      canChangeActive = false
      smoothScrollInsideParent($self, $container, () => 
        canChangeActive = true)
    })
  }
  //showGreeting()


  function autoScroll() {
    if (!canChangeAuto) return
    
    $container.animate({ 
      scrollTop: $containerInner.outerHeight() - $(window).height()
    }, 20000,"linear", function() {
        $(this).animate({ scrollTop: 0 }, 20000);
    });
  }

  function stopScroll() {
    if (autoScrollStopped) return
    $containerInner.on('click scroll', function(){
      $container.stop()
      autoScrollStopped = true;
      showGreeting()
      //$container.on("scroll", onScroll);
    })
    
  }
  //autoScroll()
  //stopScroll()
  //$container.on("scroll", onScroll);
  
  
}