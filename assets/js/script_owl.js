$(document).ready(function(){
    // owl.carousel
    // $('.promotion_nav').owlCarousel({
    //   loop:true,
    //   nav:true,
    //   margin:40,
    //   center:true,
    //   autoplay:true,
    //   dots:false,
    //   autoplayTimeout:2000,
    //   responsive:{
    //     0:{
    //       items:1
    //     },
    //     575:{
    //       items:2
    //     },
    //     991:{
    //       items:5
    //     }
    //   }
    // });

    $('.promotion_nav').owlCarousel({
      loop:true,
      // margin:10,
      // center:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:6,
              nav:true,
              loop:false
          }
      }
  })
  
    
  });
  