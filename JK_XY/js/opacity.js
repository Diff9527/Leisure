//显示播放半透明层
define(['jquery'], function () {
    $(function () {
        $('.ul_tab li').each(function (index) {
            $(this).mouseover(function () {
                $('.collection').eq(index).css('display', 'block');
                $('.lessonplay').eq(index).css('opacity', 1);
            }).mouseout(function () {
                $('.collection').eq(index).css('display', 'none');
                $('.lessonplay').eq(index).css('opacity', 0);
            });
        });
    });
});