function setIntroClaim(){
  var timezone = new Date().getTimezoneOffset();
  timezone = parseInt((timezone<0? '+':'-')+(parseInt(Math.abs(timezone/60))));

  var thefuture = 'We are a design farm based in Shanghai.<br/>We live in the same future.';
  if(timezone != 8) thefuture = 'We are a design farm based in Shanghai.<br/>We live ' + (8-timezone) + ' hours in the future.';
    

  $('#claim').html(thefuture);
}

var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top-$( window ).height()
          }, 500);
    return false;
});
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

window.onload = function() {
    //add scrollspy to activate menu on scroll
    $('body').scrollspy({target: ".navbar"});
    AOS.init();
    $('#heroCarousel').carousel({
		interval: 3000
	});

  setIntroClaim();
}


$('#mainNav .navbar-toggle').click(function(){
  //$('.dropDown.menu').toggleClass("hidden");
  //$('#mainNav').toggleClass("expanded");
  if($('.dropDown.menu').css('display') == 'none') $('.dropDown.menu').fadeIn(400);
  else $('.dropDown.menu').fadeOut(400);
});


$('.dropDown.menu').click(function(){
  $(this).fadeOut(400);
});