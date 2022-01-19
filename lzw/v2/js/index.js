var  newsSwiper = new Swiper(".news-rotaion", {
    autoplay: {
        disableOnInteraction: false
    },
    loop: true
})


var  khnSwiper_one = new Swiper(".khn-swiper-0", {
    autoplay: {
        disableOnInteraction: false
    },
    loop: true,
    navigation: {
        nextEl: '#khn-next-btn',
        prevEl: '#khn-previous-btn'
    }
})

var  khnSwiper_two = new Swiper(".khn-swiper-1", {
    autoplay: {
        disableOnInteraction: false
    },
    loop: true,
    navigation: {
        nextEl: '#khn-next-btn',
        prevEl: '#khn-previous-btn'
    }
})

var  khnSwiper_three = new Swiper(".khn-swiper-2", {
    autoplay: {
        disableOnInteraction: false
    },
    loop: true,
    navigation: {
        nextEl: '#khn-next-btn',
        prevEl: '#khn-previous-btn'
    }
})
layui.use('element', function () {
  var element = layui.element
  
})
