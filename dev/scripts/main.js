const mySite = {};

mySite.init = function() {
	mySite.events();
};

mySite.events = () => {
	//listens for click to open hamburger menu 
	$('.hamburger').on('click', function(){
		//toggle the overlay class on menu
		$('.menu-bar').toggleClass('overlay');

		//toggle the show class on the ul inside of menu
		$('.main-menu').toggleClass('show');
	});

	//smooth scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});
}

$(function() {
	mySite.init();
});