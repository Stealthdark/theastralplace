$("button#menu").click(function () {
    $(this).toggleClass("is-active");
    $('body').toggleClass("overlay");
});
$("#navbarDropdown").click(function () {
    $(this).toggleClass("is-active");
    // $("button#menu").toggleClass("is-active");
});
$(".dropdown-item").click(function () {
    $("button#menu").toggleClass("is-active");
    $('body').toggleClass("overlay");
});

var header = $('header');

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $('header').addClass("fixed-top shadow");
    } else {
        $('header').removeClass("fixed-top shadow");
    }
});

// SWIPER JS -------------

// Initialize Swiper
const bannerSlider = new Swiper(".banner-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        // disableOnInteraction: true,
    },
});

const bestSellingSlider = new Swiper(".best-selling-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        // disableOnInteraction: true,
    },
    breakpoints: {

        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4,
            autoplay: false
        }
    },
});

// SMTP Form js
function sendEmail() {
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userMobile = document.getElementById("phone").value;
    var userMessage = document.getElementById("message").value;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "shantrishadesigns@gmail.com",
        Password: "21BB890ACD816A38E38177D677E7ED90EFB6",

        To: "shantrishadesigns@gmail.com",
        From: "shantrishadesigns@gmail.com",
        Subject: "New Contact form enquiry",
        ReplyFrom: document.getElementById("email").value,
        Body: `Hello Admin! Please find below the required information:` +
            `<br />` +
            `<br />` +
            `Name : ` +
            userName +
            `<br />` +
            `Email-Id : ` +
            userEmail +
            `<br />` +
            `Mobile-Number : ` +
            userMobile +
            `<br />` +
            `Message : ` +
            userMessage
    }).then((message) =>
        alert(
            "Thanks for Submitting. Your details are with us and we will shortly connect with you!"
        )
    );
}