$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,  /*переход с 1 на 7*/
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    smartSpeed: 2000,
    dotsSpeed: 3000,
    dragEndSpeed: 3000,

  
  });
  });

$('.mobile-menu').on('click', function(e) {
  e.preventDefault();
  $('.menu-btn').toggleClass('menu_active');
  $('.menu').toggleClass('menu_active');
});