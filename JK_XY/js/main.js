requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery',
        unslider: 'unslider.min'
    }
});

//鼠标点击搜索框
require(['search'], function (search) {
});

//鼠标移动在导航上
require(['nav'], function (nav) {
});

//切换
require(['tab'], function (tab) {
});

//显示播放半透明层
require(['opacity'], function (opacity) {
});

//显示精品系列半透明层
require(['boutique'], function (boutique) {
});

//返回顶部
require(['top'], function (top) {
});

//大轮播
require(['slider'], function (slider) {
});