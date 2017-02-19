define(['jquery', 'cookie'], function (jquery, cookie) {
    $(function () {
        //点击换肤
        $('#pcSkin').click(function () {
            $('.s_skin_layer').slideDown();
        });
        //点击收起
        $('#up').click(function () {
            $('.s_skin_layer').slideUp();
        });

        //点击之外收起
        $(document).mouseup(function (event) {
            var skin_layer = $('.s_skin_layer');
            //条件1：比较点击的目标是不是它自身
            //条件2：点击的目标并不是容器的子代
            if (!skin_layer.is(event.target) && (skin_layer.has(event.target).length === 0)) {
                skin_layer.slideUp();
            }
        });

        //点击相应的li
        $('.s-skin-nav li').each(function (index) {
            $(this).click(function (event) {
                var pic = $(this).find('img').attr('src');
                $('#bg-skin').css({
                    'background-image': 'url(' + pic + ')'
                });
                //记忆皮肤选择
                localStorage.setItem('skin', pic);
                event.preventDefault();
            });
        });

        //回复皮肤设置
        var picAdd = localStorage.getItem('skin' || 'images/1.jpg');
        $('#bg-skin').css({
            'background-image': 'url(' + picAdd + ')'
        });
    });
});