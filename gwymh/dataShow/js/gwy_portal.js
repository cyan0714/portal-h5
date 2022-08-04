/* 
 * @Description: 顶部tab切换效果实现
 * @param: index 传递切换下标
 */
function changeTabNav(index) {
    let tabNavList = $('.protal-content-tabnav-item');
    tabNavList.removeClass('protal-content-tabnav-item-active');
    $(tabNavList[index]).addClass('protal-content-tabnav-item-active');
}

function changeCensusDetailsTabs(e, index) {
    $('.census-details-tabs-item').removeClass('census-details-tabs-item-active')
    $(e.target).parent().addClass('census-details-tabs-item-active')
}