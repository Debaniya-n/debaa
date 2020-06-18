$(document).ready(function(){
  $('.merchname').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.merchs'
  });
  $('.merchs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.merchname',
    infinite: true,
    autoplay: true,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
  });
      
  });
  