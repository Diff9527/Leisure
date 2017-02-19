//更多产品
define(['jquery'], function (jquery) {
    $(function () {
        $('.more').mouseover(function () {
            $('.details').css('display', 'block');
        });

        $('.details').mouseleave(function () {
            $(this).css('display', 'none');
        });
    });
});