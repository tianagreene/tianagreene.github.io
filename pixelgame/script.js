$( "#target" ).keydown(function( event ) {
  if ( event.which == 37 || event.which == 65) {
   event.preventDefault();
   $('.person').attr('src', 'images/spritey.gif')
   $(".wrapper").removeClass("forward")
   //alert('left arrow!')
  } else if( event.which == 39 || event.which == 68 ) {
   event.preventDefault();
   $('.person').attr('src', 'images/spritey.gif')
   $(".wrapper").addClass("forward")
   //alert('right arrow!')
  } else if( event.which == 38 || event.which == 87 ) {
   event.preventDefault();
   $('.person').attr('src', 'images/spritey.gif')
   $('.person-space').css('top', '40px').delay( 800 )
   $('.person-space').css('top', '80px')
   //$('.person').css('translate', 'transformY(50px)')
   //alert('up arrow!')
  }
 });