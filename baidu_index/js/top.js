//回到顶部
define(['jquery'], function (jquery) {
    $(function () {
        $(window).scroll(function () {
            var sc = $('#top'),
                go = $('.go-top');
            if ($(this).scrollTop() > (sc.offset().top + sc.height())) {
                go.css({
                    'visibility': 'visible'
                });
                go.click(function () {
                    $('body,html').animate({scrollTop: 0}, 0);
                });
            } else {
                go.css({
                    'visibility': 'hidden'
                });
            }
        });

    });
});