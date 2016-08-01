$(window).load(function () {
    var curIndex = 0;
    $(".bannerList li").first().show();
    function startMoving() {
        curIndex < $(".bannerList li").length - 1 ? curIndex++ : curIndex = 0;
        $(".bannerList li").eq(curIndex).fadeIn(500).siblings().fadeOut(500);
        $(".bannerBtn li").eq(curIndex).addClass("cur").siblings().removeClass("cur");
    }
    setInterval(startMoving, 3000);
});
