$(document).ready(function() {

	// ancor
	$(".ancor-js").on("click", function(e) {
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

	$('.slider.slick4').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slick4-prev'),
		nextArrow: $('.slick4-next')
	});

		$('.slider.slick5').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slick5-prev'),
		nextArrow: $('.slick5-next')
	});

		$('.slider.slick6').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slick6-prev'),
		nextArrow: $('.slick6-next')
	});

	$('.slider.slick7').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.slick7-prev'),
		nextArrow: $('.slick7-next')
	});

});