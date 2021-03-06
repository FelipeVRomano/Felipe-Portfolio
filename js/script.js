$(window).on("load", function(){

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue:false
		}
	});
})

$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
	    items:4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        780:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});

	$("[data-fancybox]").fancybox();
	/*
	$("#filters a").click(function(){
		
		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue:false
			}
		});

		return false;


	});
	*/

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}

	}

	const openModalButtons = document.querySelectorAll('[data-modal-target]');
	const closeModalButtons = document.querySelectorAll('[data-close-button]');
	const overlay = document.getElementById('overlay');

	overlay.addEventListener('click', () => {
		const popup = document.querySelectorAll('.popup.active');
		popup.forEach(modal =>{
			closeModal(modal);
		})
	})
	
	openModalButtons.forEach(button => {
		button.addEventListener('click', () => {
			const popup = document.querySelector(button.dataset.modalTarget);
			openModal(popup);
		})
	})

	closeModalButtons.forEach(button => {
		button.addEventListener('click', () => {
			const popup = button.closest('.popup');
			closeModal(popup);
		})
	})

	function openModal(popup){
		if(popup == null) return;

		popup.classList.add('active');
		overlay.classList.add('active');
	}

	function closeModal(popup){
		if(popup == null) return;

		popup.classList.remove('active');
		overlay.classList.remove('active');
	}
});