// import "./node_modules/bootstrap/dist/js/bootstrap";
// import "./node_modules/swiper/package.json"
// import "./node_modules/swiper/swiper-bundle";

$("button#menu").click(function () {
    $(this).toggleClass("is-active");
    $('body').toggleClass("overlay");
});
$("#navbarDropdown").click(function () {
    $(this).toggleClass("is-active");
    $('body').toggleClass("overlay");
});

// SWIPER JS -------------

// Initialize Swiper
const bannerSlider = new Swiper(".banner-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const bestSellingSlider = new Swiper(".best-selling-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {

        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        }
    },
});