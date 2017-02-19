/**
 * Created by T on 2016/6/10.
 */

//页面加载
$(document).ready(function () {
    $(window).on('load', function () {
        imgLocation();
        //模拟网络加载
        var dataImg = {
            'data': [{'src': '1.jpg'}, {'src': '2.jpg'}, {'src': '3.jpg'}, {'src': '4.jpg'}, {'src': '5.jpg'}, {'src': '6.jpg'}, {'src': '7.jpg'}, {'src': '8.jpg'}, {'src': '9.jpg'}, {'src': '10.jpg'}, {'src': '11.jpg'}, {'src': '12.jpg'}, {'src': '13.jpg'}, {'src': '14.jpg'}, {'src': '15.jpg'}, {'src': '16.jpg'}, {'src': '17.jpg'}, {'src': '18.jpg'}, {'src': '19.jpg'}, {'src': '20.jpg'}]
        };
        //窗口滚动时
        window.onscroll = function () {
            if (scrollside()) {
                $.each(dataImg.data, function (index, value) {
                    //加载box类到container之中
                    var box = $('<div>').addClass('box').appendTo('#container');
                    //加载content类到box中
                    var content = $('<div>').addClass('content').appendTo(box);
                    //加载图片到content中
                    $('<img>').attr('src', './img/' + $(value).attr('src')).appendTo(content);
                });
                imgLocation();
            }
        };
    });
    $(window).on('resize', function () {
        imgLocation();
    });
});

function scrollside() {
    var box = $('.box');
    //最后一张图片的高度/2+最后一张图片距离顶部的高度
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    //窗口的高度
    var documentHeight = $(document).height();
    //鼠标滚动的高度
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < documentHeight + scrollHeight) ? true : false;
}

//盒子的摆放
function imgLocation() {
    var box = $('.box');
    //图片的宽度
    var boxWidth = box.eq(0).width();
    //窗口的宽度除以图片的宽度
    var num = Math.floor($(window).width() / boxWidth);
    //储存一行中box的高度
    var boxArr = [];
    //index确定位置 value确定元素
    box.each(function (index, value) {
        value.style.cssText = '';
        //获取每个盒子的高度
        var boxHeight = box.eq(index).height();
        //将盒子的高度传到boxArr数组中
        if (index < num) {
            boxArr[index] = boxHeight;
            $(value).css({
                'position': "absolute",
                'top': 0,
                'left': boxWidth * index
            });
        } else {
            //得到最小高度的盒子
            var minboxHeight = Math.min.apply(null, boxArr);
            //得到最小高度盒子的位置
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            //盒子的摆放位置
            $(value).css({
                'position': "absolute",
                'top': minboxHeight,
                'left': box.eq(minboxIndex).position().left
            });
            //更新最小盒子的高度
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });
}