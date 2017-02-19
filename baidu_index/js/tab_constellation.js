//点击切换星座
define(['jquery'], function () {
    $(function () {
        var cur = $('.s-block-xingzuo .constel-pannel'),
            item = $('.constel-item .border-for-item');

        $('#baiyang').addClass('cur-pannel');
        $('#bai .border-for-item').css({
            'border-bottom': '2px solid #42A1FF'
        });
        $('.constel-head-content a').each(function (index) {
            $(this).click(function () {
                //清理点击之前的样式
                cur.removeClass('cur-pannel');
                item.css({
                    'border-bottom': '1px solid transparent'
                });

                //增加点击之后的样式
                cur.eq(index).addClass('cur-pannel');
                item.eq(index).css({
                    'border-bottom': '2px solid #42A1FF'
                });
            });
        });
    });
});