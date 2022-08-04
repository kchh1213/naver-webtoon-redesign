$(document).ready(function () {
    // 탑바 스크롤시 색상변경
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 900) {
            $(".top-bar").css("background", "#FFFFFF")
            $(".top-bar").css("border-bottom-width", "1px")
            $(".top-bar").css("border-bottom-style", "soild")
            $(".top-bar").css("border-bottom-color", "#ddd")
            $(".top-bar ul>li").css("color", "#49515A");
        } else {
            $(".top-bar").css("background", "")
            $(".top-bar").css("border-bottom-width", "0px")
            $(".top-bar ul>li").css("color", "#FFFFFF");
        }

        // aos 작동
        AOS.init();
    })


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

    // 영상 틀 박스 호버
    $(".movie-box .box").hover(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });


});