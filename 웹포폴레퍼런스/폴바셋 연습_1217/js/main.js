

$(function() {


    // $('#visual ul').slick({
    //     arrows: false, //화살표 사용안함
    //     dots: false, //닷츠
    //     autoplay: true, //자동재생
    //     // fade: true, //페이드인 효과 
    //     // autoplaySpeed:5000, //재생시간 5초
    //     // pauseOnHover:false,//마우스 오버시 슬라이드 멈춤 해제
    //     // pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    // });

    //
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        /*
        pagination: {
          el: '.swiper-pagination',
        },
        */

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        /*
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        */


        
    });

})