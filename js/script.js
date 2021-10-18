  $(document).ready(function() {
	new WOW().init();


    //slide down menu
    $('.btn-div').click(function () {
        $(".cats-dispaly").slideToggle(400);
        $(".overlay-box2").fadeToggle(300);
        if ($(window).width() <= 1199) {
            $(".overlay-box2").hide();
            $(this).toggleClass("active")
        }
    });
    $('.overlay-box2').click(function () {
        $(".cats-dispaly").slideToggle(400);
        $(".overlay-box2").fadeOut(300);
    });
	//phone size menu onclick
	if ($(window).width() <= 1199) {
	//phone size menu
    if ($(window).width() <= 1199) {
         $('#menu-id').click(function (e) {
			e.preventDefault()
            $(".overlay-box").fadeIn(300);
            $("nav").addClass("reset-left");
            $("body").addClass("overflow");
        });
        $(".nav-head .close-btn, .overlay-box").click(function () {
        	$(".overlay-box").fadeOut(300);
            $("nav").removeClass("reset-left");
            $("body").removeClass("overflow");
        });

        $('.has-level-2>.cat-anchor').click(function (e) {
            e.preventDefault()
            var item = $(this);
            $(".has-level-2>.cat-anchor").not(item).removeClass("active");
            $(item).toggleClass("active");
            if ($(item).siblings().css('display') == 'none') {
                $(item).siblings().slideDown(500);
            } else {
                $(item).siblings().slideUp(500);
            }
            $(".has-level-2>.cat-anchor").not(item).siblings().slideUp(500);
        })
    }

	   //dropdown inside menu
	   $('.lang-word, .cat-down').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		
		})
    }
    // //main Slider Carousel
    ///////// ** main** /////////
    var specials = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });
    ///////// ** brand** /////////
    var specials = new Swiper('.brand-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.brand-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.brand-slider .swiper-btn-next',
            prevEl: '.brand-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 8,
                spaceBetween: 30,
            },
        },
    });    
     ///////// ** product** /////////
     ///////// ** product one** /////////
     var specials = new Swiper('.product-one .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-one .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-one .swiper-btn-next',
            prevEl: '.product-one .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
    var specials = new Swiper('.product-two .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-two .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-two .swiper-btn-next',
            prevEl: '.product-two .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
    var specials = new Swiper('.product-three .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-three .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-three .swiper-btn-next',
            prevEl: '.product-three .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
    var specials = new Swiper('.product-four .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-four .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-four .swiper-btn-next',
            prevEl: '.product-four .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });




	////////////////add swiper carsoul to class feature////////////////////////////////

    if ( $(window).width() < 1199 ) {
        $('.features .col-md-3.col-xs-12').contents().unwrap();
		$('.features .row').contents().unwrap();
        $(".feature-section .features").addClass("swiper-container");
        $(".feature-section .features-div").addClass("swiper-wrapper");
        $(".feature-section .features-box").addClass("swiper-slide");
        var blog = new Swiper('.feature-section .swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.feature-section .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1199: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }
    ////////////** footer transfer into accordion **//////////

	if ($(window).width() <= 767) {
		$(".nav-foot-header").addClass("footer-accordion");
		$(".nav-foot").addClass("footer-panel");
	}
	$('.footer-accordion').click(function () {
		var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
		$(".footer-accordion").not(this).removeClass("active");
		$(this).toggleClass("active");
		if ($(this).siblings().css('max-height') == '0px') {
			$(this).siblings().css('max-height', x);
			$(this).siblings('.nav-foot').css('padding-top', "15px");
		} else {
			$(this).siblings().css('max-height', '0');
			$(this).siblings('.nav-foot').css('padding-top', "0");
		}

		$(".footer-accordion").not(this).siblings().css('max-height', '0');
		$(".footer-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
	})

    //////////** fixed arrow**//////////
    $(".arrow-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);

    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);
    });

});