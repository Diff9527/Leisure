//点击切换今日明日本周
define(['jquery'], function () {
    $(function () {
        var cur_tab = $('.s-block-xingzuo .tab-contents .tab-content-item'),
            tab_item = $('.detail-tabs .detail-tab-item');
        $('.detail-tabs a').each(function (index) {
            $(this).click(function () {
                //清理点击之前的样式
                cur_tab.removeClass('cur-tab');
                tab_item.css({
                    'background-color': '#fff',
                    'color': '#000',
                    'border': '1px solid #e9e9e9'
                });

                //增加点击之后的样式
                cur_tab.eq(index).addClass('cur-tab');
                tab_item.eq(index).css({
                    'background-color': '#38f',
                    'color': '#fff',
                    'border': '1px solid #38f'
                });
            });
        });
    });
});