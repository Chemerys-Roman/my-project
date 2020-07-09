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
const el = document.querySelector(".scrolling-button");
const menuElements = document.querySelectorAll(".main-menu__item");
const menuOptions = document.querySelectorAll(".main-menu-option");
const stockEndDate = Date.parse($(".stock-timer").data("timer"));
let coords = el.getBoundingClientRect();
console.log(coords);

setInterval(getStokeTime, 1000);
getStokeTime();


function getStokeTime(endTime) {
    let curentTime = new Date().getTime();
    let timeToEnd = stockEndDate - curentTime;
    let timeDays = Math.floor(timeToEnd / 86400000);
    $("#timer-days").html(timeDays);
    let timeHours = Math.floor((timeToEnd - timeDays * 86400000) / 3600000);
    $("#timer-hours").html(timeHours);
    let timeMinutes = Math.floor(
        (timeToEnd - timeDays * 86400000 - timeHours * 3600000) / 60000
    );
    $("#timer-minutes").html(timeMinutes);
    let timeSeconds = Math.floor(
        (timeToEnd -
            timeDays * 86400000 -
            timeHours * 3600000 -
            timeMinutes * 60000) /
        1000
    );
    $("#timer-seconds").html(timeSeconds);
}

$(".main-menu__item_a").bind("click", showMenu);
$(".burger__button").on("click", showMenuBar);
$(".active-menu-darker").on("click", hideMenuBar);
$(".menu-level-1__item>a").on("click", showSubmenu);
$(".option-searching__item").on("click", showSelectMenu);
$(".details-evo__item").on("click", setEvoluation);
$(".product__cover-box_add-curt-box > div").on("click", addToWishList);
$(".new-cars__item-box").hover(newCarActionShow, newCarActionHide);
$(".item__info").hover(rotateIcon);
$(".scrolling-button").on("click", scrollingTop);

function rotateIcon(event) {
    $(event.target)
        .siblings(".item__img")
        .children("img")
        .toggleClass("img-rotate");
}

function addToWishList(event) {
    $(event.target).toggleClass("added-to-wish-list");
}

function newCarActionShow(event) {
    $(event.target)
        .children(".new-cars__item_price")
        .children(".new-cars__item_user-action-box-show")
        .show();
}

function newCarActionHide(event) {
    $(event.target)
        .children(".new-cars__item_price")
        .children(".new-cars__item_user-action-box-show")
        .hide();
}

function setEvoluation(event) {
    $(event.target)
        .toggleClass("evo-active")
        .nextAll()
        .removeClass("evo-active")
        .end()
        .prevAll()
        .addClass("evo-active");
}

function showSelectMenu(event) {
    console.log($(event.target));
    $(event.target)
        .next("div")
        .toggle()
        .siblings(".option-searching__item_container")
        .hide();
}

function showMenuBar(event) {
    event.preventDefault();
    $(".menu-container").addClass("menu-container-active");
    $(".active-menu-darker").show();
    $(".main-menu__item_nav").addClass("active-menu");
    $(".main-menu-option_nav").show();
    $("body").css("overflow", "hidden")
}

function hideMenuBar(event) {
    event.preventDefault();
    $(".menu-container").removeClass("menu-container-active");
    $(".active-menu-darker").hide();
    $("body").css("overflow", "auto")
}

function showMenu(event) {
    event.preventDefault();
    const parentElement = event.target.parentNode;
    $(parentElement)
        .addClass("active-menu")
        .siblings()
        .removeClass("active-menu");
    menuElements.forEach((item, index) => {
        if ($(item).hasClass("active-menu")) {
            $(menuOptions[index]).show();
        } else {
            $(menuOptions[index]).hide();
        }
    });
}

function showSubmenu(event) {
    event.preventDefault();
    const parentElement = event.target.parentNode;
    $(parentElement)
        .children("ul")
        .toggle()
        .end()
        .children("a")
        .children(".pointer")
        .toggleClass("pointer-rotate");
    $(parentElement)
        .siblings("li")
        .children("ul")
        .hide()
        .end()
        .children("a")
        .children(".pointer")
        .removeClass("pointer-rotate");
}

function scrollingTop(event) {
    let scrl = $("main");
    console.log(scrl);


}