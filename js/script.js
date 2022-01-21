$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Game Developer.", "Game Designer."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor:false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 8,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	        	items:3
	        },
	        938:{
	            items:4
	        },
	        1040:{
	        	items: 5
	        }
	    }
	});

	$("[data-fancybox]").fancybox();

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue:false
		}
	})

});