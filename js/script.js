//Navigation - burger

document.querySelector('i.fa-bars').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('.ul-list').classList.toggle('active');
})


//SCROLL

const headerPosTop = $('header').offset().top
const aboutUsPosTop = $('.about-us').offset().top
const ourServicesPosTop = $('.our-services').offset().top
const galleryPosTop = $('.gallery').offset().top
const subscribeUsPosTop = $('.subscribe-us').offset().top
let blogPosTop = $('.blog').offset().top
const contactPosTop = $('.contact').offset().top
const footerPosTop = $('footer').offset().top

const navHeight = $('nav').height()


//FLEX

const classLista = ['section.gallery', 'div.wrap-gallery', 'div.wrap-content-4'];

document.querySelector('.view-more').addEventListener('click', function () {
    for (let i = 0; i < classLista.length; i++) {
        document.querySelector(classLista[i]).classList.toggle("active");
    }
    blogPosTop = $('.blog').offset().top
    if (document.querySelector('.wrap-gallery').classList.contains('active')) {
        document.querySelector('.view-more').textContent = "view less"

    } else {
        document.querySelector('.view-more').textContent = "view more"
    }

})

//SCROLL
function toScroll(PosTop, navH) {
    $('body, html').animate({
        scrollTop: PosTop - navH
    }, 1000)
    document.querySelector('nav').classList.remove('active');
    document.querySelector('.ul-list').classList.remove('active');
}

$('.a-home').on('click', function () {
    toScroll(headerPosTop, 0)
})

$('.a-about').on('click', function () {
    toScroll(aboutUsPosTop, navHeight)
})

$('.a-services').on('click', function () {
    toScroll(ourServicesPosTop, navHeight)
})

$('.a-gallery').on('click', function () {
    toScroll(galleryPosTop, navHeight)
})

$('.a-blog').on('click', function () {
    toScroll(blogPosTop, navHeight)
})

$('.a-contact').on('click', function () {
    toScroll(contactPosTop, navHeight)
})