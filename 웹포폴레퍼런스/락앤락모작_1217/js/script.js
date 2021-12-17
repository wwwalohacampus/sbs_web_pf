$(function () {

    $('header').on('mouseover', () => {
        $('.header_svg path').attr('fill', '#000')
    })

    $('header').on('mouseout', () => {
        $('.header_svg path').attr('fill', '#fff')
    })

    // 스크롤 감지
    // 이전 스크롤 위치
    let lastScrollTop = 0
    $(window).on('scroll resize', function(){
        // 현재 스크롤 위치
        let scrollTop = $(document).scrollTop()

        console.log(scrollTop);
        if( scrollTop == 0 ) {
            $('.header_wrap').removeClass('on')
        }

        if( scrollTop > lastScrollTop ) {
            // 스크롤 아래로
            $('.header_wrap').addClass('on')
            $('header').slideUp()
        } else {
            // 스크롤 위로
            $('header').slideDown()
        }

        lastScrollTop = scrollTop
    });

})

$(document).ready(function(){
    $('.gnb li').on('click', function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    })

})
