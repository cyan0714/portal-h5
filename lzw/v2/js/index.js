const initSwiper = (options, className) => new Swiper(className, options)
const newsSwiper = initSwiper(
  {
    autoplay: {
      disableOnInteraction: false
    },
    loop: true
  },
  '.news-rotaion'
)

const khnSwiper_one = initSwiper(
  {
    autoplay: {
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '#khn-next-btn',
      prevEl: '#khn-previous-btn'
    }
  },
  '.khn-swiper-0'
)
const khnSwiper_two = initSwiper(
  {
    autoplay: {
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '#khn-next-btn',
      prevEl: '#khn-previous-btn'
    }
  },
  '.khn-swiper-1'
)
const khnSwiper_three = initSwiper(
  {
    autoplay: {
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '#khn-next-btn',
      prevEl: '#khn-previous-btn'
    }
  },
  '.khn-swiper-2'
)
