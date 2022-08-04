/* 
 * @Description: 顶部tab切换效果实现
 * @param: index 传递切换下标
 */
function changeTabNav(index) {
    let tabNavList = $('.protal-content-tabnav-item');
    tabNavList.removeClass('protal-content-tabnav-item-active');
    $(tabNavList[index]).addClass('protal-content-tabnav-item-active');
    let protalBarList = $('.protal-bar');
    protalBarList.removeClass('protal-bar-show');
    $(protalBarList[index]).addClass('protal-bar-show');
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        //年选择器
        laydate.render({
            elem: `#yearSelect${index}`,
            type: 'year',
            value: 2020
        });
    });
}

function changeCensusDetailsTabs(e, index, type) {
    $('.census-details-tabs-item').removeClass('census-details-tabs-item-active')
    $(e.target).parent().addClass('census-details-tabs-item-active')
    let censusList = $(`.${type}-bar .census-details-content-item`);
    censusList.removeClass('census-details-content-item-active');
    $(censusList[index]).addClass('census-details-content-item-active');
    console.log(censusList)
}