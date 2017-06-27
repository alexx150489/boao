$(document).ready(function() {

	// ancors
	$(".block-sidebar .link1").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});

	$(".block-sidebar .link2").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});

	$(".block-sidebar .link3").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});

	$(".block-sidebar .link4").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});

	$(".block-sidebar .link5").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});

	$(".block-sidebar .link6").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});

	$(".block-sidebar .link7").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});

	$(".block-sidebar .link8").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});

	$(".block-sidebar .link9").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});



	// slcik slider http://kenwheeler.github.io/slick/ >>>
	// block-meditation
	$('.meditation-gallery .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.meditation-gallery .slider-prev'),
		nextArrow: $('.meditation-gallery .slider-next')
	});
	// block-sport
		$('.sport-gallery .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.sport-gallery .slider-prev'),
		nextArrow: $('.sport-gallery .slider-next')
	});
		// block-sea
		$('.sea-gallery1 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.sea-gallery1 .slider-prev'),
		nextArrow: $('.sea-gallery1 .slider-next')
	});
	// block-sea
	$('.sea-gallery2 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.sea-gallery2 .slider-prev'),
		nextArrow: $('.sea-gallery2 .slider-next')
	});
	// block-seafood
	$('.seafood-gallery .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.seafood-gallery .slider-prev'),
		nextArrow: $('.seafood-gallery .slider-next')
	});
	// block-seafood
		$('.seafood-gallery2 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.seafood-gallery2 .slider-prev'),
		nextArrow: $('.seafood-gallery2 .slider-next')
	});
	// block-international
		$('.international-gallery1 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.international-gallery1 .slider-prev'),
		nextArrow: $('.international-gallery1 .slider-next')
	});
	// block-music
		$('.music-gallery1 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.music-gallery1 .slider-prev'),
		nextArrow: $('.music-gallery1 .slider-next')
	});
	// block-music
		$('.music-gallery2 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.music-gallery2 .slider-prev'),
		nextArrow: $('.music-gallery2 .slider-next')
	});
		// block-honeymoon
		$('.honeymoon-gallery1 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.honeymoon-gallery1 .slider-prev'),
		nextArrow: $('.honeymoon-gallery1 .slider-next')
	});

	$('.honeymoon-gallery2 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.honeymoon-gallery2 .slider-prev'),
		nextArrow: $('.honeymoon-gallery2 .slider-next')
	});

		$('.honeymoon-gallery3 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.honeymoon-gallery3 .slider-prev'),
		nextArrow: $('.honeymoon-gallery3 .slider-next')
	});

		// nation
		$('.block-nation .nation-gallery1 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.block-nation .nation-gallery1 .slider-prev'),
		nextArrow: $('.block-nation .nation-gallery1 .slider-next')
	});

		$('.block-nation .nation-gallery2 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.block-nation .nation-gallery2 .slider-prev'),
		nextArrow: $('.block-nation .nation-gallery2 .slider-next')
	});

		$('.block-nation .nation-gallery3 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.block-nation .nation-gallery3 .slider-prev'),
		nextArrow: $('.block-nation .nation-gallery3 .slider-next')
	});
		// medtravel
		$('.block-medtravel .medtravel-gallery1 .slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.block-medtravel .medtravel-gallery1 .slider-prev'),
		nextArrow: $('.block-medtravel .medtravel-gallery1 .slider-next')
	});
});