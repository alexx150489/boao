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

});