 $(document).ready(function() {
 	$('#myCarousel').carousel({
        pause: 'none'
    });
 	$('.container .row .well').slideUp();

 	$('#btnXanh').click(function(event) {
 		/* Act on the event */
 			$(this).next().slideToggle();
 			$(this).toggleClass('maudo');
 	});;
    	$('#btnTim').click(function(event) {
 		/* Act on the event */
 			$(this).next().slideToggle();
 	});;
    		$('#btnXanhNhat').click(function(event) {
 		/* Act on the event */
 			$(this).next().slideToggle();
 	});;
 });

 