
$(function () {
    // 5 使用插件
     $('#demo').slideBox();  // 基础功能 默认参数

    // 自己传参数 如果自己传参数 那么就以自己传入的参数为准 否则 就是默认参数
    /*$('#demo').slideBox({
        direction : 'left', // 轮播的方向
        duration : 0.3, // 滚动持续时间
        easing : 'swing', // 运动函数(匀速 linear 或 默认 swing)
        delay : 5, // 多久换一张
        startIndex : 0, // 初始从第几张开始
        hideClickBar : false,//不自动隐藏点选按键
        // clickBarRadius : 10,  // 小圆角的宽度 10px
        // hideBottomBar : true//隐藏底栏
        width: 350,
        height: 200
    });*/


})
/*
$('#ul-arr li').siblings('li').each(function () {
     var arrUl = $(this).index();
     if (arrUl>5 && arrUl===11){

          $(this).css('margin-bottom','none')
          console.log($(this).css('margin-bottom','none'))
     }

})
// var arrUl =document.getElementById('ul-arr');*/
