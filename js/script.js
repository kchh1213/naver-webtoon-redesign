$(document).ready(function () {
    // 슬릭
    $('.slider-box .slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        dots: false,
        prevArrow: false,
        nextArrow: $(".slider-box .next"),
    });
    // 서비스 왼쪽
    $(".right-box .box").click(function () {
        let num = $(this).index()

        if ($(".left-box li").eq(num).hasClass("active")) {
            $(".left-box li").removeClass("active")
        } else {
            // 메뉴야 켜져라
            $(".left-box li").addClass("active")
            $(".left-box li").eq(num).addClass("active")
            $(".left-box li").eq(num).siblings().removeClass("active")
        }
    })
    // 서비스 우측 버튼
    $(".right-box .box").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        }
    });

    // 영상 호버
    $(".movie-box .box").hover(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

});