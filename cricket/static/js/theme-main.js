// Template Name: Html for Leader/Candidate/Campaign Politic - Bootstrap 4 | Political
// Author: Iwthemes //// https://themeforest.net/user/iwthemes?ref=iwthemes
// Name File: theme-main.js
// Last Update 1.6
// Email: support@iwthemes.com
// Copyright: (C) 2018


$(document).ready(function ($) {
    'use strict';

    //Instagram API
    var feed = new Instafeed({
        get: 'user',
        userId: '558761032',
        limit: 6,
        resolution: 'standard_resolution',
        template: '<div class="insta-items"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>',
        accessToken: '558761032.1677ed0.983b2acc9e964ed88a2d69554d03955f',
    });

    feed.run();

    //Load Page Preview
    $(window).on('load', function () { // makes sure the whole site is loaded
        $('body').addClass('body--loaded');
    });


    //Scroll inside Page
    $('a.scroll').click(function () {
        var el = $(this).attr('href');
        var elWrapped = $(el);
        scrollToDiv(elWrapped, 40);
        return false;
    });

    function scrollToDiv(element, navheight) {
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - navheight;
        $('body,html').animate({
            scrollTop: totalScroll
        }, 500);
    }

    //toTop
    $().UItoTop({
        scrollSpeed: 2000,
        easingType: 'linear'
    });

    //Carousel of Schedule Trips
    $(document).ready(function () {
        $('.galleryList').slick({
            slidesToShow: 6,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 1650,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 995,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    $('.homeCarousel').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplaySpeed: 4000,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });

    //Carousel of Sponsors
    $(document).ready(function () {
        $('.sponsors').slick({
            slidesToShow: 7,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
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
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    //Carousel of Media Videos
    $(document).ready(function () {
        $('.media-videos').slick({
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 1060,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    //Carousel of Testimonials and Tweet List
    $(document).ready(function () {
        $('.testimonialsList').slick({arrows: false});
        $('.tweet_list').slick({arrows: false});
    });


    //Menu Fixed when Scroll
    $(document).scroll(function () {
        if ($(document).scrollTop() < 30) {
            $('.menu-no-stick').removeClass('hidden');
            $('.menu-sticked').css('top', '-100px');
        } else {
            $('.menu-no-stick').addClass('hidden');
            $('.menu-sticked').css('top', '0px');
        }
    });

    //Time of Event
    $('#event-one').countdown('2018/12/12', function (event) {
        var $this = $(this).html(event.strftime(''
            + '<span><span class="timedown"><span>%D</span></span>:</span>'
            + '<span><span class="timedown">%H</span>:</span>'
            + '<span><span class="timedown">%M</span>:</span>'
            + '<span><span class="timedown">%S</span></span>'));
    });

    //Twitter
    $(".twitter").tweet({
        modpath: 'js/twitter/index.php',
        username: "tomorrowland",
        count: 5,
        loading_text: "Loading tweets...",
    });
});
