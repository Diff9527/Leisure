//显示精品系列半透明层
define(['jquery'], function () {
    $(function () {
        $('.lesson-card').each(function (index) {
            $(this).mouseover(function () {
                $(this).css('border', '1px solid #35B558');
                $('.describe').eq(index).css({
                    'visibility': 'visible',
                    'opacity': 1
                });
            }).mouseout(function () {
                $(this).css('border', '1px solid #e4e4e4');
                $('.describe').eq(index).css({
                    'visibility': 'hidden',
                    'opacity': 0
                });
            });
        });
    });
});