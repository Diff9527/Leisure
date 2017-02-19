//鼠标移动在导航上
define(['jquery'], function () {
    $(function () {
        $('.nav_box a').each(function (index) {
            $('.nav_box').mouseover(function () {
                $('.nav_panel').css('display', 'block');
            }).mouseout(function () {
                $('.nav_panel').css('display', 'none');
            });
        });
    });
});