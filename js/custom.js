(function($) {
    'use strict';
    //Cache jQuery Selector
    var $window		= $(window),
        $carousel	= $('.carousel'),   			// 2. Bootstrap slider pause time
        $dropdown	= $('.dropdown-toggle'),		// 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
        $header		= $('#header'),					// 4. Update Header Style + Scroll to Top
        $projectimg	= $('.project-images'),			// 5. Single project slider click + Show large image in top box
        $our_team	= $('.our_team_member'),		// 8. Our Team Member Carousel
        $client		= $('.testimonials-carousel'),	// 9. Testimonials Carousel Slider
        $srv_slide	= $('.service-slider'),			// 10. Single service Slider
        $sidebar	= $('.feedback-sidebar'),		// 11. Testimonials Carousel in sidebar small
        $projectnav	= $('.project-thumbnail'),		// 12. Single Project slider carosure nav image slider
        $brand		= $('.partner-slider'),			// 13. Our Partner Logos Slider Auto
        $projects	= $('.projects2'),				// 14. Our Partner Logos Slider Auto
        $contact	= $('#contact-form')			// 22. Contact Form Validation



    /* Table of jQuery settings list

        1. Preloader For Hide loader
        2. Bootstrap slider pause time
        3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
        4. Update Header Style + Scroll to Top
        5. Single project slider click + Show large image in top box
        6. Submenu Dropdown Toggle
        7. Revolution Slider
        8. Our Team Carousel
        9. Testimonials Carousel Slider Home
        10. Single service Slider
        11. Testimonials Carousel in sidebar small
        12. Project image slider carosure nav image slide
        13. Our Partner Logos Slider Auto
        14. Project thumb slide in home page2
        15. Use for Accordion Box
        16. Fact Counter For Achivement Counting
        17. LightBox / Fancybox
        18. Sortable Masonary with Filters
        19. Gallery With Filters List
        20. Date Picker
        21. Scroll to a Specific Div
        22. Click Search Icon and Open Search Field
        23. Contact FormForm Validation
        24. Elements Animation
        25. When document is Scrollig, do
        26. When document is loading, do
        27. Youtube and Vimeo video popup control

    */



    // 1. Preloader For Hide loader
    function handlePreloader() {
        if($('.preloader').length){
            $('.preloader').delay(500).fadeOut(500);
            $('body').removeClass('page-load');
        }
    }



    // 2. Bootstrap slider pause time
    $('.carousel').carousel({
        interval: 6000,  // Slider Pause time
        pause: "hover"
    });


    // 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile

    $('#bs-example-navbar-collapse-1').each(function() {
        $dropdown.on('click', function(){
            if($window.width() < 992){
                if($(this).parent('.dropdown').hasClass('visible')){
                    $(this).parent('.dropdown').children('.dropdown-menu').first().stop(true, true).slideUp(300);
                    $(this).parent('.dropdown').removeClass('visible');
                }
                else{
                    $(this).parent('.dropdown').children('.dropdown-menu').stop(true, true).slideDown(300);
                    $(this).parent('.dropdown').addClass('visible');
                }
            }
        });

        $window.on('resize', function(){
            if($window.width() > 991){
                $('.dropdown-menu').removeAttr('style');
                $('.dropdown ').removeClass('visible');
            }
        });

    });



    // 4. Update Header Style + Scroll to Top
    function headerStyle() {
        if($header.length){
            var windowpos = $window.scrollTop();
            if (windowpos >= 180) {
                $header.addClass('fixed-header');
            } else {
                $header.removeClass('fixed-header');
            }
        }
    }


    // 5. Single project slider click + Show large image in top box
    $projectimg.each(function() {
        $(this).on('click','.item a',function(event) {
            event.preventDefault();
            $(this).parents('.project-images').find(".item a").removeClass('onlive');
            $(this).addClass('onlive');
            $(this).parents('.project-images').find(".slide-project img").attr("src", $(this).attr("href"));
        });
    });

    // 6. Submenu Dropdown Toggle
    if($('.main-menu li.dropdown ul').length){
        $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });

    }

    // 7. Auto active class adding with navigation
    $window.on('load', function(){
        var current = location.pathname;
        var $path = current.substring(current.lastIndexOf('http://unicoderbd.com/') + 1);
        $('.navbar-nav li a').each(function(e){
            var $this = $(this);
            // if the current path is like this link, make it active
            if($path == $this.attr('href')){
                $this.parent('li').addClass('active');
            }
            else if($path == ''){
                $('.navbar-nav li.first').addClass('active');
            }
        })
    })



    // 8. Our Team Carousel
    if ($our_team.length) {
        $our_team.owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots: true,
            autoplayHoverPause:false,
            slideBy: 3,
            smartSpeed: 300,
            autoplay: false,
            navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1024:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });
    }


    // 9. Testimonials Carousel Slider Home
    if ($client.length) {
        $client.owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplayHoverPause:false,
            autoplay: true,
            smartSpeed: 700,
            navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                760:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    }


    // 10. Single Project Slider
    if ($srv_slide.length) {
        $srv_slide.owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots: false,
            autoplayHoverPause:false,
            autoplay: true,
            smartSpeed: 700,
            navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-arrows"></i>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                760:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    }


    // 11. Testimonials Carousel in sidebar small
    if ($sidebar.length) {
        $sidebar.owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplayHoverPause:true,
            autoplay: true,
            smartSpeed: 700,
            navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                760:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    }


    // 12. Single Project slider carosure nav image slider
    if ($projectnav.length) {
        $projectnav.owlCarousel({
            loop:false,
            margin:20,
            nav:false,
            dots:false,
            autoplayHoverPause:false,
            autoplay: true,
            smartSpeed: 400,
            navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
            responsive:{
                0:{
                    items:3
                },
                600:{
                    items:4
                },
                760:{
                    items:5
                },
                1024:{
                    items:5
                },
                1100:{
                    items:6
                }
            }
        });
    }


    // 13. Our Partner Logos Slider Auto
    if ($brand.length) {
        $brand.owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            smartSpeed: 500,
            navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-arrows"></i>' ],
            autoplay: 4000,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                600:{
                    items:3
                },
                800:{
                    items:4
                },
                1200:{
                    items:4
                }
            }
        });
    }

    // 14. Project thumb slide in home page2
    if ($projects.length) {
        $projects.owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            smartSpeed: 500,
            navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-arrows"></i>' ],
            autoplay: false,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                600:{
                    items:2
                },
                800:{
                    items:2
                },
                1100:{
                    items:3
                }
            }
        });
    }


    // 15. Use for Accordion Box
    if($('.according_area').length){
        $('.according_title').on('click', function() {


            if($(this).hasClass('active')){
                $(this).addClass('active');
            }

            //if ($(this).next('.according_details').is(':visible')){
//				$(this).removeClass('active');
//			}
            else{
                $('.according_title').removeClass('active');
                $('.according_details').slideUp(300);
                $(this).addClass('active');
                $(this).next('.according_details').slideDown(300);
            }
        });
    }



    // 16. Fact Counter For Achivement Counting
    function factCounter() {
        if($('.fact-counter').length){
            $('.fact-counter .achievement.animated').each(function() {

                var $t = $(this),
                    n = $t.find(".counting").attr("data-stop"),
                    r = parseInt($t.find(".counting").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function() {
                            $t.find(".counting").text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $t.find(".counting").text(this.countNum);
                        }
                    });
                }

                //set skill building height


                var size = $(this).children('.progress-bar').attr('aria-valuenow');
                $(this).children('.progress-bar').css('width', size+'%');


            });
        }
    }


    // 17. LightBox / Fancybox
    if($('.photo_gallery a').length) {
        $('.photo_gallery a').fancybox({
            openEffect  : 'elastic',
            closeEffect : 'elastic',
            helpers : {
                media : {}
            }
        });
    }

    $(document).ready(function() {
        $(".fancybox").fancybox();
    });
    // 18. Sortable Masonary with Filters
    function enableMasonry() {
        if($('.sortable-masonry').length){

            var winDow = $(window);
            // Needed variables
            var $container=$('.sortable-masonry .items-container');
            var $filter=$('.sortable-masonry .filter-btns');

            $container.isotope({
                filter:'*',
                masonry: {
                    columnWidth : 1
                },
                animationOptions:{
                    duration:1000,
                    easing:'linear'
                }
            });


            // Isotope Filter
            $filter.find('li').on('click', function(){
                var selector = $(this).attr('data-filter');

                try {
                    $container.isotope({
                        filter	: selector,
                        animationOptions: {
                            duration: 1000,
                            easing	: 'linear',
                            queue	: false
                        }
                    });
                } catch(err) {

                }
                return false;
            });


            winDow.bind('resize', function(){
                var selector = $filter.find('li.active').attr('data-filter');

                $container.isotope({
                    filter	: selector,
                    animationOptions: {
                        duration: 1000,
                        easing	: 'linear',
                        queue	: false
                    }
                });
            });


            var filterItemA	= $('.sortable-masonry .filter-btns li');

            filterItemA.on('click', function(){
                var $this = $(this);
                if ( !$this.hasClass('active')) {
                    filterItemA.removeClass('active');
                    $this.addClass('active');
                }
            });
        }
    }

    enableMasonry();



    // 19. Date Picker
    if($('.datepicker').length){
        $( ".datepicker" ).datepicker();
    }


    // 20. Scroll to a Specific Div
    if($('.scroll-to-target').length){
        $(".scroll-to-target").on('click', function() {
            var HeaderHeight = $('.header-lower').height();
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top - HeaderHeight
            }, 1000);

        });
    }

    // 16. Range Slider
    $(document).ready(function(){
        var rangeSlider = function(){
            var slider = $('.range-slider'),
                range = $('.range-slider__range'),
                value = $('.range-slider__value');

            slider.each(function(){

                value.each(function(){
                    var value = $(this).prev().attr('value');
                    $(this).html(value);
                });

                range.on('input', function(){
                    $(this).next(value).html(this.value);
                });
            });
        };

        rangeSlider();

    });


    // 21. Click Search Icon and Open Search Field
    var $srcicon = $('.search_icon'),
        $srcfield = $('.search_from_menu');
    $srcicon.on('click', function(event){
        event.preventDefault();
        $srcfield.addClass('active');
        event.stopPropagation();
    });

    $('.src_close').on('click', function(){
        $srcfield.removeClass('active');
    });

    $srcfield.on('click', function(event){
        event.stopPropagation();
    });

    $window.on('click', function(e){
        $srcfield.removeClass('active');
    });





    // 23. Elements Animation
    if($('.wow').length){
        var wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }

    // 24. When document is Scrollig, do

    $window.on('scroll', function() {
        headerStyle();
        factCounter();
    });


    // 25. When document is loading, do

    $window.on('load', function() {
        handlePreloader();
        enableMasonry();
    });


    // 29. sideber nav toogle
    $('.sideber_dropdown').on('click', function() {
        $(this).toggleClass('active');
        $(this).next('.sub_category').slideToggle(500);

    });

    jQuery(document).ready(function() {hover_tab()
    });
    function hover_tab(){
        jQuery('.circle-block-outer[data-toggle="tab-hover"] div').on('mouseenter', function(){
            jQuery(this).tab('show');
        });
    }


    if ( $( '.main-form' ).length > 0 ) {
        $( '.main-form' ).on( 'submit', function( event ) {

            event.preventDefault( );
            var c_name = $( '#c_name' ),
                c_phone = $( '#c_phone' ),
                c_submit = $( '.main-submit' ),
                c_error = false;
            $( '.c_error_massage , .beautypress_success_message , .beautypress_loader' ).hide( ).fadeOut( 400 );
            if ( c_error === false ) {
                c_submit.before( ).hide( ).fadeIn( );
                $.ajax( {
                    type: "POST",
                    url: "proc.php",
                    data: {
                        'name' : c_name.val( ),

                        'whom' : "Оставить Заявку",
                        'phone' : c_phone.val( ),

                    },
                    success: function( result ){
                        $( '.main-form' )[0].reset( );
                        $(".OKmodal").modal("show");
                    },
                    complete: function () {
                        window.location.pathname = 'thank-you.html';
                    }
                } );
            }
        } );}


    if ( $( '.cta-form' ).length > 0 ) {
        $( '.cta-form' ).on( 'submit', function( event ) {

            event.preventDefault( );
            var c_name = $( '#cta_name' ),
                c_phone = $( '#cta_phone' ),
                c_submit = $( '.cta-submit' ),
                c_whom = $( '#cta_whom' ),
                c_error = false;
            $( '.c_error_massage , .beautypress_success_message , .beautypress_loader' ).hide( ).fadeOut( 400 );
            if ( c_error === false ) {
                c_submit.before( ).hide( ).fadeIn( );
                $.ajax( {
                    type: "POST",
                    url: "proc.php",
                    data: {
                        'name' : c_name.val( ),
                        'whom' : c_whom.val( ),
                        'phone' : c_phone.val( ),
                    },
                    success: function( result ){
                        $(".ctamodal").modal("hide");
                        $( '.cta-form' )[0].reset( );
                        $(".OKmodal").modal("show");
                    },
                    complete: function () {
                        window.location.pathname = 'thank-you.html';
                    }
                } );
            }
        } );}
    if ( $( '.faq-form' ).length > 0 ) {
        $( '.faq-form' ).on( 'submit', function( event ) {

            event.preventDefault( );
            var c_name = $( '#name' ),
                c_phone = $( '#phone' ),
                c_massage = $( '#message' ),
                c_submit = $( '.faq-submit' ),
                c_error = false;
            $( '.c_error_massage , .beautypress_success_message , .beautypress_loader' ).hide( ).fadeOut( 400 );
            if ( c_error === false ) {
                c_submit.before( ).hide( ).fadeIn( );
                $.ajax( {
                    type: "POST",
                    url: "proc.php",
                    data: {
                        'name' : c_name.val( ),
                        'whom' : "Вопросы",
                        'phone' : c_phone.val( ),
                        'massage' : c_massage.val( )
                    },
                    success: function( result ){
                        $( '.faq-form' )[0].reset( );
                        $(".OKmodal").modal("show");
                    },
                    complete: function () {
                        window.location.pathname = 'thank-you.html';
                    }
                } );
            }
        } );}



})(jQuery);