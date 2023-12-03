// slick carousel script
$(document).ready(function(){
    $('.demo').slick({
        adaptiveHeight:true,
        autoplay:true,
        autoplaySpeed: 2000,
        dots:true,
        dotsClass:'slick-dots',
    });
    $('.demoTwo').slick({
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:true,
        // prev arrow
        prevArrow: '<i class="fa-solid fa-arrow-left slick-prev"></i>',

        // next arrow
        nextArrow: '<i class="fa-solid fa-arrow-right slick-next"></i>',
    });
  });