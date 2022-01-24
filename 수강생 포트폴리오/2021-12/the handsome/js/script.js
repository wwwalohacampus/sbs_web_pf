

  $(function () {


    // 스와이퍼 시작!
    const swiper = new Swiper('.swiper-container-horizontal swiper-container-wp8-horizontal', {
        
        direction: 'horizontal',
        // Infinity:true,        
        autoplay: {                     // 자동재생    
            delay: 1000,                // 슬라이드 당 지연시간 (ms) 
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            loop: true,                     // 반복여부
            
        },


        slidesPerView: 1,               // 보여지는 슬라이드 개수
        spaceBetween: 0,               // 슬라이드 간 여백
        
       

        // 페이지 네이션 (• • • • •)
        pagination: {
            el: '.swiper-pagination-bullets',       // 페이지 네이션이 적용될 요소 (선택자)
            type: 'bullet',            // 'bullets'        : • • • 
                                            // 'fraction'       : (현재번호/전체번호) 
                                            // 'progressbar'    : 진행률(게이지)
                                            // 'custom'         
            clickable: true,                // 페이지 네이션 클릭 가능 여부
        },


        // 네비게이션 화살표
        navigation: {
            nextEl: '.swiper-button-next',   // 다음 화살표가 적용될 요소
            prevEl: '.swiper-button-prev',   // 이전 화살표가 적용될 요소
        },


        // 스크롤바
        scrollbar: {
            el: '.swiper-scrollbar',        // 스크롤바가 적용될 요소
            hide: true,                     // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김)
            draggable: true,                // 스크롤바 드래그 가능 여부
            snapOnRelease: true,            // 스크롤바를 놓을 때, 슬라이드 위치 맞춤
        },
    });

})



$(function () {


    // 스와이퍼 시작!
    const swiper = new Swiper('.edt_banner_wrap1903 .swiper-container', {
        
        direction: 'horizontal',        // 슬라이드 방향 : 'vertical', 'horizontal'
        // loop: true,    
        dots: true,
        arrows: true,                 
        autoplay: {                        
            delay: 1500,                
            // Infinity:true,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            
        },


        slidesPerView: 3,               // 보여지는 슬라이드 개수
        spaceBetween: 10,               // 슬라이드 간 여백
        
       

        // 페이지 네이션 (• • • • •)
        pagination: {
            el: '.swiper-pagination-bullets',       // 페이지 네이션이 적용될 요소 (선택자)
            type: 'bullets',            // 'bullets'        : • • • 
                                            // 'fraction'       : (현재번호/전체번호) 
                                            // 'progressbar'    : 진행률(게이지)
                                            // 'custom'         
            clickable: true,                // 페이지 네이션 클릭 가능 여부
        },


        // 네비게이션 화살표
        navigation: {
            nextEl: '.swiper-button-nxt',   // 다음 화살표가 적용될 요소
            prevEl: '.swiper-button-pre',   // 이전 화살표가 적용될 요소
        },


        // // 스크롤바
        // scrollbar: {
        //     el: '.swiper-scrollbar',        // 스크롤바가 적용될 요소
        //     hide: true,                     // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김)
        //     draggable: true,                // 스크롤바 드래그 가능 여부
        //     snapOnRelease: true,            // 스크롤바를 놓을 때, 슬라이드 위치 맞춤
        // },
    });

})


