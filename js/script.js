// -------------- banner slider
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
        
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },


});

// ---------------client slider

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
// --------------loader

setTimeout(function () {

    $('.loader').fadeToggle();

}, 7200);

// ----------to top buttton

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {

        toTop.classList.add("active");

    } else {

        toTop.classList.remove("active");
    }

})

// --------------navbar

const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navbar.classList.toggle("active");

})










