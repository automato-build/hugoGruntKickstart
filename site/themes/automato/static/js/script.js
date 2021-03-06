var $root = $('html, body');
// $('a').click(function() {
//     $root.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top - $(window).height()
//     }, 500);
//     return false;
// });
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var isMenuTransparent;

// window.onload = function() {
//     //add scrollspy to activate menu on scroll
//     $('body').scrollspy({
//         target: ".navbar"
//     });
//     $('#heroCarousel').carousel({
//         interval: 3000
//     });
// }


$('#mainNav .navbar-toggle, #fullMenu').click(function() {
    var fm = $('#fullMenu');
    if (fm.is(':visible')) {
        if (!isMenuTransparent) {
            $('#mainNav').removeClass("inverted");
            $('#mainNav').removeClass("transparent");
        }
        $('#fullMenu').animate({
            opacity: 0.0
        }, 1000, function() {
            $('#fullMenu').hide();
        });
    } else {
        $('#mainNav').addClass("inverted");
        $('#mainNav').addClass("transparent");
        $('#fullMenu').show();
        $('#fullMenu').animate({
            opacity: 1.0
        }, 1000);
    }
});

$("#single-project #project-header .title h1").boxfit(
  {
  multiline: true,
  align_center:false
  }
);

$("#portfolio .portfolio_item .title h3").boxfit(
  {
  multiline: true,
  }
);

$('#fullMenu').click(function() {
    $('#nav-icon').removeClass('open');
});

$('.dropDown.menu').click(function() {
    $(this).fadeOut(400);
});


$('.dropDown.menu').click(function() {
    $(this).fadeOut(400);
});

$('.tab-content').find('.tab-pane').each(function(idx, item) {
    var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
        title = $(this).attr('title');
    navTabs.append('<li><a href="#">' + title + '</a></li');
});

$('.code-tabs ul.nav-tabs').each(function() {
    $(this).find("li:first").addClass('active');
})

$('.code-tabs .tab-content').each(function() {
    $(this).find("div:first").addClass('active');
});

$('.nav-tabs a').click(function(e) {
    e.preventDefault();
    var tab = $(this).parent(),
        tabIndex = tab.index(),
        tabPanel = $(this).closest('.code-tabs'),
        tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
    tabPanel.find('.active').removeClass('active');
    tab.addClass('active');
    tabPane.addClass('active');
});


$('#hero').on('inview', function(event, isInView) {
    if (isInView) {
        $('#mainNav').addClass("inverted");
        $('#mainNav').addClass("transparent");
        isMenuTransparent = true;
    } else {
        $('#mainNav').removeClass("inverted");
        $('#mainNav').removeClass("transparent");
        isMenuTransparent = false;
    }
});



$('#nav-icon').click(function() {
    $(this).toggleClass('open');
});


function theFuture(){
    $timezone = new Date().getTimezoneOffset()
    $timezone = parseInt(($timezone<0? '+':'-')+(parseInt(Math.abs($timezone/60))));
    if($timezone < 8)
        $thefuture = 'Research & Design from ' + (8-$timezone) + ' hours in the future.';
    else
        $thefuture = 'Research & Design from a different future.';

    $('#thefuture').text($thefuture);
}




$(document).ready(function() {

    var nav = document.getElementById('mainNav');
    nav.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);

    $('#gridGallery').lightGallery();

    $(".flex-video").fitVids();




    $("img.lazy").lazyload({
        threshold: 200,
        effect: "fadeIn"
    });

    var mycarousel = $('.scrolling-content .owl-carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        nav: true,
        lazyLoad: true,
        navigatio:true,
        navText: [
            "<i class='fa fa-chevron-left fa-2x' aria-hidden='true'></i>",
            "<i class='fa fa-chevron-right fa-2x' aria-hidden='true'></i>"
        ],
    });

    var herocarousel = $('#hero .owl-carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        nav: false,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:5000
    });

    /* BAFFLE */
    /* Animation speed value can be increased or decreased. Same with duration */
    let b = baffle('.baffle', {
        characters: '█▓▒░🤖',
        speed: 150
    }).reveal(2500); /* Runs animation only once, upon page load */
    let bl = baffle('.baffle-longer', {
        characters: '█▓▒░🤖',
        speed: 150,
        duration: 3000
    }).reveal(2500); /* Animation duration set to 3 seconds */
    let bf = baffle('.baffle-forever', {
        characters: '█▓▒░🤖',
        speed: 150
    }).start(); /* Animation continues on an endless loop */

    setInterval(resetBannerPosition, 2000);

    if ($('#mainNav').hasClass('transparent')) isMenuTransparent = true;
    else isMenuTransparent = false;

    theFuture();


});



var resetBannerPosition = function() {

	 var bannerHeight=$("#brutalistBanner").height();
	 var bannerWidth=$("#brutalistBanner").width();

	 var windowHeight= $( window ).height();
	 var windowWidth= $( window ).width();

	 console.log(windowWidth,windowHeight,bannerWidth,bannerHeight);

    $("#brutalistBanner").css('top', Math.random() * (windowHeight-bannerHeight));
    $("#brutalistBanner").css('left', Math.random() * (windowWidth-bannerWidth));

		// $("#brutalistBanner2").css('top', Math.random() * (windowHeight-bannerHeight));
    // $("#brutalistBanner2").css('left', Math.random() * (windowWidth-bannerWidth));



}

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};
