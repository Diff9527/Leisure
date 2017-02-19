//返回顶部
define(['jquery'], function (jquery) {
    $(function () {
        $('.top').click(function () {
            $('body,html').animate({scrollTop: 0}, 500);
        });
    });
});