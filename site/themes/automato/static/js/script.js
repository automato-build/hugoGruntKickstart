var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $(window).height()
    }, 500);
    return false;
});
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

window.onload = function() {
    //add scrollspy to activate menu on scroll
    $('body').scrollspy({
        target: ".navbar"
    });
    AOS.init();
    $('#heroCarousel').carousel({
        interval: 5000
    });

    setInterval(function() {
        randomTextInHero()
    }, 5000);
}


$('#mainNav .navbar-toggle').click(function() {
    //$('.dropDown.menu').toggleClass("hidden");
    //$('#mainNav').toggleClass("expanded");
    if ($('.dropDown.menu').css('display') == 'none') $('.dropDown.menu').fadeIn(400);
    else $('.dropDown.menu').fadeOut(400);
});


$('.dropDown.menu').click(function() {
});



$('#hero #mato').hover(
  function() {
    $('.mato.explain').fadeIn(100);
    $('#hero').addClass('mato');

  },
  function() {
    $('.mato.explain').fadeOut(200);
    $('#hero').removeClass('mato');

  }
);

$('#hero #auto').hover(
  function() {
    $('.auto.explain').fadeIn(100);

  },
  function() {
    $('.auto.explain').fadeOut(200);
  }
);




var randomTextInHero = function() {
    var replacement_auto_words = $('#hero #auto .replacement_words li');
    var replacement_mato_words = $('#hero #mato .replacement_words li');

    var replacementIndex = Math.floor(Math.random() * replacement_auto_words.length);

    $('#hero #auto').animate({
        top: '-1000px'
    }, 500, function() {
        $('#hero #auto h1').text(replacement_auto_words[replacementIndex].textContent);
        $('#hero #auto').css("top", '1000px');

        $('#hero #auto').animate({
            top: '0px'
        }, 500, function() {

            $('#hero #mato').animate({
                top: '1000px'
            }, 500, function() {
                $('#hero #mato h1').text(replacement_mato_words[replacementIndex].textContent);
                $('#hero #mato').css("top", '-1000px');

                $('#hero #mato').animate({
                    top: '0px'
                }, 500, function() {

                });
            });

        });
    });

}
