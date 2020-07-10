$(document).ready(function() {
    $(".teasing-slider").slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
            }
        }, ]
    });
    $(".car-types-slider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        variableWidth: true,
    });
    $(".new-cars-slider").slick({
        dots: false,
        arrows: false,
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
            // variableWidth: true
    });

    $(".product-slider").slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        // centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">&larr;</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">&rarr;</button>',
        // variableWidth: true
    });
    $(".brands-slider").slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        variableWidth: true,
    });
    $(".posts-slider").slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        // variableWidth: true
    });

});