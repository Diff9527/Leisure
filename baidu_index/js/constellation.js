//点击星座
define(['jquery'], function () {
    $(function () {
        $('.mine-title').click(function () {
            $('.s-block-container .s-mblock-content').slideToggle();
        });
    });
});