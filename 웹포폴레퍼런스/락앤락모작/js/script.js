$(function() {

    $('header').on('mouseover', () => {
        $('.header_svg path').attr('fill', '#000')
    })

    $('header').on('mouseout', () => {
        $('.header_svg path').attr('fill', '#fff')
    })


})
