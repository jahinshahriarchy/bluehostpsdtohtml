(function ($) {
    "use strict";
    
   // meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});


// data - background
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

// sticky
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 2) {
    $("#header-sticky").removeClass("sticky");
  } else {
    $("#header-sticky").addClass("sticky");
  }
});
    
    // chose-box active
    $('.chose-box').on('mouseenter', function () {
            $(this).addClass('active').parent().siblings().find('.chose-box').removeClass('active');
    })
    
    // mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

$('.activ-testimonai').slick({
   dots: false,
   arrows: true,
   infinite: true,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	 nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
	centerMode: true,
	centerPadding: '0',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1,
        infinite: true,
        dots: false,
        centerMode: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});

$('.brand-active').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
 slidesToShow: 5,
 slidesToScroll: 1,
 responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll:1,
       infinite: true,
       dots: false,
     }
   },
   {
     breakpoint: 767,
     settings: {
       slidesToShow: 2,
       slidesToScroll:1,
       infinite: true,
       dots: false,
     }
   } ,
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1
     }
   }
 ]
});

    
    // WOW active
    new WOW().init();
    


      
    
    
    })(jQuery);