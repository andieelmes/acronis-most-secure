import {
  typing
} from './animations'

import {
  showGreetings,
} from './greetings'


export const openPopup = (btn) => {
  const btnClassName = btn; 
  const $btn = $(btnClassName)  
  const $popups = $('.js-popup-container')
  const $companyPopup = $('.js-popup-container#company')

  const $formContainer = $('.js-feedback-form');
  const $inputs = $('.js-feedback-input')

  const $closeAll = $('.js-close-all-popups')
  const $yearBtns = $('.js-show-slide-bottom')
  $btn.each(function(){

    function closePopup(){
      $popup.removeClass('active')
      
      if (popupName != "#company") $(window).trigger('popupClosed')
      if ($formContainer.hasClass('end')) {
        $formContainer.removeClass('end')
        $inputs.val('')
      }
      
    }
    function closePopups(){
      $popups.removeClass('active')
      $(window).trigger(`historyLoad`)
      $(window).trigger('popupClosed')
      if ($formContainer.hasClass('end')) {
        $formContainer.removeClass('end')
        $inputs.val('')
      }
    }

    function openPopup(){          
      if (popupName !== "#company") $popups.removeClass('active')
      if (popupName === "#menu") {
        $(window).trigger(`historyLoad`)
        $companyPopup.removeClass('active')
        
      }
      if ($formContainer.hasClass('end')) {
        $formContainer.removeClass('end')
        $inputs.val('')
      }
      $popup.addClass('active');  


      if (popupName == "#greetings") showGreetings()  

      location.hash = popupName 
      $(window).trigger(`${popupNameEvent}Load`)

      const $typingHeader = $popup.find('.js-menu-header-typing')
      $typingHeader.each(function(i, el){
        const self = $(this);
        typing(self, i*200, 500)
      });
      
    }

   

    const self = $(this);
    
    if (self.hasClass('js-history-btn')) {
      self.on('click', function(e){
          closePopups()
          $(window).trigger(`firstYearLoad`)       
        })
      return
    }
    
    const popupName = self.attr('data-popup')
    const $popup = $(popupName)
    const $closebtn = $popup.find('.js-popup-close').first()

    var $autoFocusInput = $popup.find('input:first, textarea:first')

    const popupNameEvent = popupName.replace('#', '')
   

    self.on('click', function(e){
      if (!$popup.hasClass('active')) {
        e.preventDefault()
        e.stopPropagation()
        
        openPopup();
        if ($autoFocusInput) $autoFocusInput.focus()

       
      }
    })

    $(document).keydown(function(e) {
      if (e.keyCode == 27) {
        closePopup()
      }
    });
    $closebtn.on('click', function(e){
      e.preventDefault();
      closePopup()
    })
    $closeAll.on('click', function(e){
      e.preventDefault();
      closePopups()

    })
    $yearBtns.on('click', function(){
      closePopups()
    })
  })
}