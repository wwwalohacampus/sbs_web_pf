

$(function() {

    // 스크롤 감지
    $(window).on('scroll resize', function(){
        const scrollTop = $(document).scrollTop()
        console.log(scrollTop);

        if( scrollTop > 40 ) {
            $('.logo').addClass('on')
            $('.logo1').css({
                'background-position-y': '1rem',
                'width' : '250px', 
                'height': '160px'
        })
            $('.logo2').css({'display' : 'none'})
        } else {
            $('.logo').removeClass('on')
            $('.logo1').css({
                'background-position-y': '1rem',
                'width' : 'auto', 
                'height': 'auto'
        })
           
            $('.logo2').css({'display' : 'block'})
        }
     });
     
     // 이미지 슬라이드
     const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        slidesPerView: 6,
        // direction: 'vertical',
        loop: true,
        spaceBetween: 25.5,
        autoplay:true,
        autoplayTimeout:1000,

        // If we need pagination
        /*
        pagination: {
          el: '.swiper-pagination',
        },
        */

        // Navigation arrows
        navigation: {
            // nextEl: '.swiper-button-next',
            nextEl: '.btn-next',
            // prevEl: '.swiper-button-prev',
            prevEl: '.btn-prev',
        },

        // And if we need scrollbar
        /*
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        */
    });
    
  



})

    