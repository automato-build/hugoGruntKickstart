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


$('#mainNav .navbar-toggle').click(function() {
    //$('.dropDown.menu').toggleClass("hidden");
    //$('#mainNav').toggleClass("expanded");
    if ($('.dropDown.menu').css('display') == 'none') $('.dropDown.menu').fadeIn(400);
    else $('.dropDown.menu').fadeOut(400);
});


$('.dropDown.menu').click(function() {
    $(this).fadeOut(400);
});



$('.dropDown.menu').click(function(){
  $(this).fadeOut(400);
});

$('.tab-content').find('.tab-pane').each(function(idx, item) {
  var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
      title = $(this).attr('title');
  navTabs.append('<li><a href="#">'+title+'</a></li');
});

$('.code-tabs ul.nav-tabs').each(function() {
  $(this).find("li:first").addClass('active');
})

$('.code-tabs .tab-content').each(function() {
  $(this).find("div:first").addClass('active');
});

$('.nav-tabs a').click(function(e){
  e.preventDefault();
  var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest('.code-tabs'),
      tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
  tabPanel.find('.active').removeClass('active');
  tab.addClass('active');
  tabPane.addClass('active');

$(document).ready(function() {

    $('#gridGallery').lightGallery();


});
