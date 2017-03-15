var $root = $('html, body');
// $('a').click(function() {
//     $root.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top - $(window).height()
//     }, 500);
//     return false;
// });
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

window.onload = function() {
    //add scrollspy to activate menu on scroll
    $('body').scrollspy({
        target: ".navbar"
    });
    AOS.init();
    $('#heroCarousel').carousel({
        interval: 3000
    });
}


/*$('#mainNav .navbar-toggle').click(function() {
    $('.dropDown.menu').toggleClass("hidden");
    $('#mainNav').toggleClass("expanded");
    if ($('.dropDown.menu').css('display') == 'none') $('.dropDown.menu').fadeIn(400);
    else $('.dropDown.menu').fadeOut(400);
});*/


$('#mainNav .navbar-toggle, #fullMenu').click(function(){
    var fm = $('#fullMenu');
    if(fm.is(':visible')){
        $('#mainNav').removeClass("inverted");
        $('#mainNav').removeClass("transparent");
        $('#fullMenu').animate({
            opacity : 0.0
        }, 1000, function(){
            $('#fullMenu').hide();
        });
    }
    else{
        $('#mainNav').addClass("inverted");
        $('#mainNav').addClass("transparent");
        $('#fullMenu').show();
        $('#fullMenu').animate({
            opacity : 1.0
        }, 1000);
    }
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
    } else {
        $('#mainNav').removeClass("inverted");
        $('#mainNav').removeClass("transparent");
    }
});



$(document).ready(function() {
    $('#gridGallery').lightGallery();

    $(".flex-video").fitVids();

    $('.masonryGrid').masonry({
      itemSelector: '.grid-item',
    });

    $("img.lazy").lazyload({
        threshold: 200,
        effect: "fadeIn"
    });

    var mycarousel = $('.owl-carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        nav: true,
        lazyLoad: true,
        navText: [
            "<i class='fa fa-chevron-left fa-2x' aria-hidden='true'></i>",
            "<i class='fa fa-chevron-right fa-2x' aria-hidden='true'></i>"
        ],
    });


    /* BAFFLE */
    /* Animation speed value can be increased or decreased. Same with duration */
    let b = baffle('.baffle', { characters: '█▓▒░🤖', speed: 150 }).reveal(2500); /* Runs animation only once, upon page load */
    let bl = baffle('.baffle-longer', { characters: '█▓▒░🤖', speed: 150, duration: 3000 }).reveal(2500); /* Animation duration set to 3 seconds */
    let bf = baffle('.baffle-forever', {characters: '█▓▒░🤖', speed: 150}).start(); /* Animation continues on an endless loop */

    setInterval(resetBannerPosition, 2000);

});



var resetBannerPosition=function(){
  $("#brutalistBanner").css('top',Math.random()*800);
  $("#brutalistBanner").css('left',Math.random()*800);
}
