

$(function() {

    // 스크롤 감지
    $(window).on('scroll resize', function(){
        const scrollTop = $(document).scrollTop()
        console.log(scrollTop);

        if( scrollTop > 40 ) {
            $('.logo').addClass('on')
            $('.logo2').css({'display' : 'none'})
        } else {
            $('.logo').removeClass('on')
            $('.logo2').css({'display' : 'block'})
        }
     });

   
     

})