//切换
define(['jquery'], function () {
    $(function () {
        $('#tab_li li').each(function (index) {
            var liNode = $(this);
            $(this).mouseover(function () {
                $('.lession-list .ul_tab_display').removeClass('ul_tab_display');
                $('#tab_li li.on').removeClass('on');
                $('.lession-list ul').eq(index).addClass('ul_tab_display');
                liNode.addClass('on');
            });
        });
    });
});