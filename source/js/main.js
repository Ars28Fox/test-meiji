// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function () {

	if ($('.js-nav-toggle').length) {
		$('.js-nav-toggle').click(function () {
			$(this).toggleClass('active');
			$('.js-nav').fadeToggle().css('display', 'flex');
		})
	}

	$(window).resize( function () {
		if ($(window).width() > 767) {
			$('.js-nav').css('display', 'flex');
		} else {
			$('.js-nav').css('display', 'none');
		}
	})

	// $('input[type=tel]')
	// 	.inputmask("8 (999) 999 99 99");


	// $('.js-popup-img')
	// 	.magnificPopup({
	// 		type:'image',
	// 		closeOnContentClick: true,
	// 		fixedContentPos: true,
	// 		mainClass: 'mfp-no-margins mfp-with-zoom',
	// 		image: {
	// 			verticalFit: true
	// 		},
	// 		zoom: {
	// 			enabled: true,
	// 			duration: 300
	// 		}
	// 	});
});