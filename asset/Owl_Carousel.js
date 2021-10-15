
$('#listPic .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            items: 3,

            loop: true
        },
        739: {
            items: 3,

            loop: true
        },
        1000: {
            items: 4,

            loop: true
        }
    }
})
$('#listCake .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    nav: true,
    navText: ["<i class='slide__icon po--left fas fa-chevron-left'></i>", "<i class='slide__icon po--right fas fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,

        },
        739: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
})


$('#listComment .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 4000,
    dots: false,
    nav: true,
    navText: ["<i class='slide__icon po--left fas fa-chevron-left'></i>", "<i class='slide__icon po--right fas fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,

        },
        739: {
            items: 2,
        },
        1000: {
            items: 2,
        }
    }
})

