$(document).ready(function() {

	// ancor
	$(".block-sidebar .link").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});


	// slcik slider http://kenwheeler.github.io/slick/ >>>

	$('.slider.slick1').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slick1-prev'),
		nextArrow: $('.slick1-next')
	});

		$('.slider.slick2').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slick2-prev'),
		nextArrow: $('.slick2-next')
	});

		$('.slider.slick3').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slick3-prev'),
		nextArrow: $('.slick3-next')
	});

});