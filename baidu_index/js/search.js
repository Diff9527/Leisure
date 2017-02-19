//点击输入框
define(['jquery'], function (jquery) {
    $(function () {
        $('.input_class').focus(function () {
            $('.search_class').css('border-color', '#4791ff');
        }).blur(function () {
            $('.search_class').css('border-color', '#b6b6b6');
        });
    });
});