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

    // lottery button heid
    $('.show_filter').click(function(){
        $('.lottery_nav_provide').show();
        $('.lottery_provide_btn').show();
        $('.lottery_item_box2').hide();
    })
    $('.lottery_provide_btn').click(function(){
        $('.lottery_item_box2').show();
        $('.lottery_provide_btn').hide();
        $('.lottery_nav_provide').hide();
    })
    // Swiper slider
    // var swiper = new Swiper(".card_slider", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    // });

    // let swiperCards = new Swiper('.card_slider', {
    //     loop: true,
      
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
      
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    // });
});

/*=============== SWIPER JS ===============*/
var swiper = new Swiper(".card_slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
  });