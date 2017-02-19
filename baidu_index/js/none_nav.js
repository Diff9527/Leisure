define(['jquery'], function (jquery) {
    $(function () {
        $(window).scroll(function () {
            var sc = $('.logo');
            //离开视野
            if ($(this).scrollTop() > (sc.offset().top + sc.height())) {
                $('#s_top_wrap').css({
                    'display': 'block'
                });
            } else {
                //进入视野
                $('#s_top_wrap').css({
                    'display': 'none'
                });
            }
        });
    });
});