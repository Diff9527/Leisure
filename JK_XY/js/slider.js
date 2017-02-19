//大轮播
define(['jquery', 'unslider'], function (unslider) {
    $(function () {
        var unslider = $('#banner-big').unslider({
                dots: true
            }),
            data = unslider.data('unslider');

        $('.unslider-arrow').click(function () {
            var fn = this.className.split(' ')[1];
            data[fn]();
        });
    });
});