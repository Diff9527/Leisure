requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery',
        cookie: 'cookie'
    }
});

//更多产品
require(['more'], function (more) {
});

//点击输入框
require(['search'], function (search) {
});

//点击自定义
require(['custom'], function (custom) {
});

//点击星座
require(['constellation'], function (constellation) {
});

//点击切换星座
require(['tab_constellation'], function (tab_constellation) {
});

//点击切换今日明日本周
require(['tab_day'], function (tab_day) {
});

//滚动显示隐藏导航
require(['none_nav'], function (none_nav) {
});

//回到顶部
require(['top'], function (top) {
});

//点击换肤
require(['skin'], function () {
});