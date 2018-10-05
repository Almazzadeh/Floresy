$(function () {
    new WOW().init();

    // DROPDOWN ==========
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    $('ul.navbar-nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
    });
    // ======================

    $("header").css("background-image", 'url("images/' + $("header").data("bg") + '")')

    $("#js-rotating").Morphext({
        animation: "fadeInDown",
        speed: 5000
    })

    $("header .nav-link").each(function () {
        if ($(this).data("id")) {
            $(this).on("click", function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $($(this).data("id")).offset().top - 56
                }, 500);
            })
        }
    })

    $(document).on("scroll", function () {
        var headerHeight = $("header").height();
        if ($(document).scrollTop() > headerHeight) {
            $("header nav").css("background", "rgba(0,0,0,.7)");
        } else {
            $("header nav").css("background", "");
        }
    })

    $("#year").html((new Date()).getFullYear())
})