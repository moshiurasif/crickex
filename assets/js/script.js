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

    // forgot password email
    $('.forgot_btn_1').click(function(){
        $('.forgot_P_email').show('.active');
        $('.forgot_P_sms').hide();

    })
    // forgot password sms
    $('.forgot_btn_2').click(function(){
        $('.forgot_P_sms').show('.active');
        $('.forgot_P_email').hide();
    })
    
    // SWIPER JS mobile device index
    var swiper = new Swiper(".card_slider", {
        slidesPerView: 2,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "9",
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    //   hide: true,
    // },
});