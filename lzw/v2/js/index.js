layui.use('element', function () {
  var element = layui.element

  new Swiper('.news-rotaion', {
    autoplay: 3000,
    loop: true,
    autoplayDisableOnInteraction: false,
    pagination: '#news-swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    }
  })

  new Swiper('.khn-swiper-0', {
    autoplay: 3000,
    slidesPerView: 3,
    spaceBetween: 12,
    loop: true,
    autoplayDisableOnInteraction: false,
    nextButton: '#khn-next-btn',
    prevButton: '#khn-previous-btn'
  })

  function addMouseOver(tabClassName) {
    var _title = document.querySelector(tabClassName + ' ' + '.layui-tab-title')
    var _content = document.querySelector(tabClassName + ' ' + '.layui-tab-content')
    _title.addEventListener('mouseover', function (e) {
      if (e.target.tagName === 'LI') {
        Array.prototype.forEach.call(_title.children, function (el, index) {
          var _classList = el.classList
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
