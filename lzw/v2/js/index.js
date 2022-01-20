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

  const addMouseOver = tabClassName => {
    const _title = document.querySelector(tabClassName+ ' ' + '.layui-tab-title')
    const _content = document.querySelector(tabClassName + ' ' + '.layui-tab-content')
    _title.addEventListener('mouseover', function(e) {
      if (e.target.tagName === 'LI') {
        Array.prototype.forEach.call(_title.children, function(el, index){
          const _classList = el.classList
          _content.children[index].classList.remove('layui-show')
          if (_classList.contains('layui-this')) {
            _classList.remove('layui-this')
          }
          if (el === e.target) {
            e.target.classList.add('layui-this')
            _content.children[index].classList.add('layui-show')
          }
        })
      }
    })
  }

  addMouseOver('.work-dynamic .layui-tab')
  addMouseOver('.qjsh-box .layui-tab')
  addMouseOver('.footer .layui-tab')
})
