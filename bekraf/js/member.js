$(document).ready(function(){
  $('.contents').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.members'
  });
  $('.members').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.contents',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
  });
      
  });
  