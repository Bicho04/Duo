$('.actividades').owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    center: true,
    loop:true,
    margin:50,
    dots:true,
		navText: [ 'anterios', 'siguiente' ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})