export const loadYoutube = () => {
  var youtube = document.querySelectorAll( ".js-youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg";

    var bg = $(youtube[i]).append( "<div class='greetings-bg' style='background-image:url("+source+")'></div>");
		
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
              iframe.setAttribute( "allowfullscreen", "" );
              iframe.setAttribute( "width", "560" );
              iframe.setAttribute( "height", "315" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&amp;showinfo=0&amp;autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};

}

	