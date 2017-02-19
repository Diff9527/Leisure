//鼠标点击搜索框
define(['jquery'], function () {
    $(function () {
        var search_text = $('.search_text');

        search_text.focus(function () {
            $('.hot_words').css('display', 'none');
            $('#search').removeClass('search_btn').addClass('search_change');
        }).blur(function () {
            $('.hot_words').css('display', 'block');
            $('#search').removeClass('search_change').addClass('search_btn');
        });
    });
});
