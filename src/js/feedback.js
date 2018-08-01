export const sendFeedback = () => {
  const $formContainer = $('.js-feedback-form');
  const $name = $('.js-feedback-name')
  const $company = $('.js-feedback-company')
  const $text = $('.js-feedback-text')
  const $inputs = $('.js-feedback-input')
  const $btn = $('.js-feedback-submit-btn')

  const $newBtn = $('.js-new-feedback-btn')

  $inputs.on('focus', function(){
    $(this).removeClass('error')
  })
  $inputs.on("invalid",
		function(e) {
				e.preventDefault();
		});
  function checkInputLength(input) {
    return input.val().length
  }
  $btn.on('click', function(e){

    if (!checkInputLength($name)) $name.addClass('error')
    if (!checkInputLength($company)) $company.addClass('error')
    if (!checkInputLength($text)) $text.addClass('error')
    
    if (checkInputLength($name) 
        && checkInputLength($text)
        && checkInputLength($company)){
          
      //e.preventDefault()
      $formContainer.addClass('loading')
      $.ajax({
        url:"formTest.php", 
        data: {
          delay:1
        },
        success: function() {
          $formContainer.addClass('loaded').removeClass('loading')
          setTimeout(() => {
            $formContainer.removeClass('loaded').addClass('end')
          }, 1000);
        }
      }).always(function(){
      
      }); 
    }
        
  })
  $newBtn.on('click', function(){
    $formContainer.removeClass('end')
    $inputs.val('')
  })
}