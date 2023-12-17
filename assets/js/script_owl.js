$(document).ready(function(){
    // owl.carousel
    $('.promotion_nav').owlCarousel({
      loop:true,
      nav:true,
      margin:0,
      center:true,
    //   autoplay:true,
      dots:false,
      autoplayTimeout:2000,
      responsive:{
        0:{
          items:1
        },
        575:{
          items:6
        },
        991:{
          items:9
        }
      }
    });
  
    
  });
  