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
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',

        // next arrow
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
    });
  });